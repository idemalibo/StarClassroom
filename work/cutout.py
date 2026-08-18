from PIL import Image
from collections import deque
import math

SRC = r"C:\Users\Admin\Desktop\初音.webp"
img = Image.open(SRC).convert("RGBA")
w, h = img.size
px = img.load()

# ---------- 背景诊断 ----------
border = []
for x in range(w):
    border.append(px[x, 0][:3]); border.append(px[x, h-1][:3])
for y in range(h):
    border.append(px[0, y][:3]); border.append(px[w-1, y][:3])
bg = tuple(round(sum(c[i] for c in border)/len(border)) for i in range(3))
print("border avg bg:", bg)

# 四角颜色
corners = {"tl": px[3,3][:3], "tr": px[w-4,3][:3], "bl": px[3,h-4][:3], "br": px[w-4,h-4][:3]}
print("corners:", corners)

# 边框暗像素比例（是否有描边）
dark_border = 0
for x in range(w):
    for y in (0, h-1):
        if sum(px[x,y][:3]) < 320: dark_border += 1
for y in range(h):
    for x in (0, w-1):
        if sum(px[x,y][:3]) < 320: dark_border += 1
print("dark border px:", dark_border)

def hsv_of(p):
    r, g, b = [x/255 for x in p]
    mx, mn = max(r,g,b), min(r,g,b)
    d = mx-mn
    hue = 0
    if d: 
        if mx==r: hue = 60*(((g-b)/d)%6)
        elif mx==g: hue = 60*((b-r)/d+2)
        else: hue = 60*((r-g)/d+4)
    return hue, (0 if mx==0 else d/mx), mx

def dist(a, b):
    return math.sqrt(sum((a[i]-b[i])**2 for i in range(3)))

def bg_like(p, t):
    d = dist(p[:3], bg)
    hue, sat, val = hsv_of(p[:3])
    return d <= t or (val > 0.93 and sat < 0.05)

def flood(t):
    seen = [[False]*w for _ in range(h)]
    q = deque()
    for x in range(w):
        if bg_like(px[x,0], t): q.append((x,0)); seen[0][x] = True
        if bg_like(px[x,h-1], t): q.append((x,h-1)); seen[h-1][x] = True
    for y in range(h):
        if bg_like(px[0,y], t): q.append((0,y)); seen[y][0] = True
        if bg_like(px[w-1,y], t): q.append((w-1,y)); seen[y][w-1] = True
    while q:
        x, y = q.popleft()
        for dx, dy in ((1,0),(-1,0),(0,1),(0,-1)):
            nx, ny = x+dx, y+dy
            if 0 <= nx < w and 0 <= ny < h and not seen[ny][nx] and bg_like(px[nx,ny], t):
                seen[ny][nx] = True
                q.append((nx, ny))
    return seen

for t in (14, 20, 28, 38, 50):
    seen = flood(t)
    bgcount = sum(sum(r) for r in seen)
    xs = []; ys = []
    for y in range(h):
        for x in range(w):
            if not seen[y][x]:
                xs.append(x); ys.append(y)
    bbox = (min(xs), min(ys), max(xs), max(ys)) if xs else None
    # 脸部区域（中心偏上）被吃掉的背景比例
    face_band = 0; face_total = 0
    for y in range(int(h*0.26), int(h*0.45)):
        for x in range(int(w*0.30), int(w*0.70)):
            face_total += 1
            if seen[y][x]: face_band += 1
    # 未被填充的背景色内部空洞
    holes = 0
    for y in range(0, h, 2):
        for x in range(0, w, 2):
            if not seen[y][x] and bg_like(px[x,y], t):
                holes += 1
    print(f"T={t}: bg={bgcount/(w*h)*100:.1f}% bbox={bbox} face_bg={face_band/face_total*100:.1f}% holes={holes}")
    if t == 28:
        out = Image.new("RGBA", (w, h), (0,0,0,0))
        for y in range(h):
            for x in range(w):
                if not seen[y][x]:
                    out.putpixel((x, y), px[x, y])
        out.save("work/cut_t28.png")

# 打印中轴扫描线：第 30%/45%/60% 高度的非背景像素分布
print("\n--- 中轴扫描（x范围） ---")
for fy in (0.22, 0.32, 0.45, 0.6, 0.8):
    y = int(h*fy)
    xs = [x for x in range(w) if sum(px[x,y][:3]) < 700 or (sum(px[x,y][:3]) < 740 and px[x,y][3] > 200)]
    print(f"y={fy}: {min(xs) if xs else '-'} .. {max(xs) if xs else '-'}")
