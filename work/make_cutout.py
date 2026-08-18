from PIL import Image, ImageFilter
from collections import deque
import math, json, os

SRC = r"C:\Users\Admin\Desktop\初音.webp"
OUT = r"outputs\assets\miku.png"
os.makedirs(os.path.dirname(OUT), exist_ok=True)

img = Image.open(SRC).convert("RGBA")
w, h = img.size
px = img.load()

border = []
for x in range(w):
    border.append(px[x,0][:3]); border.append(px[x,h-1][:3])
for y in range(h):
    border.append(px[0,y][:3]); border.append(px[w-1,y][:3])
bg = tuple(round(sum(c[i] for c in border)/len(border)) for i in range(3))

def hsv_of(p):
    r,g,b = [x/255 for x in p]
    mx,mn = max(r,g,b), min(r,g,b)
    d = mx-mn
    hue = 0
    if d:
        if mx==r: hue = 60*(((g-b)/d)%6)
        elif mx==g: hue = 60*((b-r)/d+2)
        else: hue = 60*((r-g)/d+4)
    return hue, (0 if mx==0 else d/mx), mx

def dist(a,b): return math.sqrt(sum((a[i]-b[i])**2 for i in range(3)))

T = 20
def bg_like(p):
    d = dist(p[:3], bg)
    hue, sat, val = hsv_of(p[:3])
    return d <= T or (val > 0.93 and sat < 0.05)

# 泛洪填充
seen = [[False]*w for _ in range(h)]
q = deque()
for x in range(w):
    if bg_like(px[x,0]): q.append((x,0)); seen[0][x]=True
    if bg_like(px[x,h-1]): q.append((x,h-1)); seen[h-1][x]=True
for y in range(h):
    if bg_like(px[0,y]): q.append((0,y)); seen[y][0]=True
    if bg_like(px[w-1,y]): q.append((w-1,y)); seen[y][w-1]=True
while q:
    x,y = q.popleft()
    for dx,dy in ((1,0),(-1,0),(0,1),(0,-1)):
        nx,ny = x+dx,y+dy
        if 0<=nx<w and 0<=ny<h and not seen[ny][nx] and bg_like(px[nx,ny]):
            seen[ny][nx]=True; q.append((nx,ny))

# 主连通域（非背景像素）
comp = [[-1]*w for _ in range(h)]
areas = []
cid = 0
for y in range(h):
    for x in range(w):
        if not seen[y][x] and comp[y][x] == -1:
            q = deque([(x,y)]); comp[y][x] = cid; area = 0
            while q:
                cx,cy = q.popleft(); area += 1
                for dx,dy in ((1,0),(-1,0),(0,1),(0,-1)):
                    nx,ny = cx+dx,cy+dy
                    if 0<=nx<w and 0<=ny<h and not seen[ny][nx] and comp[ny][nx]==-1:
                        comp[ny][nx]=cid; q.append((nx,ny))
            areas.append(area); cid += 1

main = max(range(len(areas)), key=lambda i: areas[i]) if areas else None
print("components:", len(areas), "main:", areas[main] if main is not None else None, "total non-bg:", sum(areas))

mask = Image.new("L", (w, h), 0)
mp = mask.load()
for y in range(h):
    for x in range(w):
        if main is not None and comp[y][x] == main:
            mp[x,y] = 255

# 侵蚀 1px 去掉边缘浅色毛边
mask = mask.filter(ImageFilter.MinFilter(3))
mp = mask.load()

out = Image.new("RGBA", (w, h), (0,0,0,0))
op = out.load()
for y in range(h):
    for x in range(w):
        if mp[x,y]:
            op[x,y] = px[x,y]
out.save(OUT)
print("saved:", OUT)

# ---------- 头部测量 ----------
mask = mask.convert("L")
mpx = mask.load()
ys = [y for y in range(h) for x in range(w) if mpx[x,y]]
xs = [x for y in range(h) for x in range(w) if mpx[x,y]]
bbox = (min(xs), min(ys), max(xs), max(ys))
print("mask bbox:", bbox)

# 面部区域：中上部分
fb = [ (x,y) for y in range(int(h*0.18), int(h*0.45)) for x in range(int(w*0.25), int(w*0.75)) if mpx[x,y] ]
fcx = sum(p[0] for p in fb)/len(fb); fcy = sum(p[1] for p in fb)/len(fb)
fx0 = min(p[0] for p in fb); fx1 = max(p[0] for p in fb)
print("face band centroid:", round(fcx), round(fcy), "x range:", fx0, fx1)

# 眼睛：面部带内深色像素
eyes = []
for x,y in fb:
    r,g,b,_ = px[x,y]
    if r+g+b < 300:
        eyes.append((x,y))
if eyes:
    ecx = sum(p[0] for p in eyes)/len(eyes); ecy = sum(p[1] for p in eyes)/len(eyes)
    print("eye dark centroid:", round(ecx), round(ecy), "n=", len(eyes))

metrics = {
    "size": [w,h], "bbox": bbox, "head_top": bbox[1],
    "face_cx": round(fcx), "face_cy": round(fcy),
    "face_x0": fx0, "face_x1": fx1
}
with open("work/cutout_metrics.json","w") as f:
    json.dump(metrics, f)
print(json.dumps(metrics))
