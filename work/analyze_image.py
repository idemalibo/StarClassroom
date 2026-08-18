from PIL import Image
import math, json

SRC = r"C:\Users\Admin\Desktop\初音.webp"
img = Image.open(SRC).convert("RGBA")
w, h = img.size
print("size:", w, "x", h, "mode:", img.mode)

# ---------- 背景 / 透明检测 ----------
px = img.load()
has_alpha = False
alpha_min = 255
for yy in range(0, h, 3):
    for xx in range(0, w, 3):
        a = px[xx, yy][3]
        if a < 250:
            has_alpha = True
            alpha_min = min(alpha_min, a)
print("has_transparency:", has_alpha, "min_alpha_sampled:", alpha_min)

if has_alpha:
    # 字符包围盒 = 不透明区域
    xs, ys = [], []
    for yy in range(h):
        for xx in range(w):
            if px[xx, yy][3] > 40:
                xs.append(xx); ys.append(yy)
    bbox = (min(xs), min(ys), max(xs), max(ys))
    print("char_bbox:", bbox, "char_size:", bbox[2]-bbox[0], "x", bbox[3]-bbox[1])
    # 分析区域限制在包围盒内
    region = img.crop(bbox)
else:
    region = img
    bbox = (0, 0, w-1, h-1)

# ---------- 降采样 + k-means 主色 ----------
small = region.resize((80, 100))
sp = small.load()
samples = []
for yy in range(small.height):
    for xx in range(small.width):
        r, g, b, a = sp[xx, yy]
        if has_alpha and a < 40:
            continue
        samples.append([r, g, b])

K = 10
def dist(c1, c2):
    return sum((c1[i]-c2[i])**2 for i in range(3))

# 用远距离种子初始化
centers = [samples[0]]
for _ in range(K-1):
    best = None; bestd = -1
    for s in samples:
        d = min(dist(s, c) for c in centers)
        if d > bestd:
            bestd = d; best = s
    centers.append(best)

for it in range(30):
    groups = [[] for _ in range(K)]
    for s in samples:
        k = min(range(K), key=lambda i: dist(s, centers[i]))
        groups[k].append(s)
    newc = []
    for g in groups:
        if g:
            newc.append([sum(p[i] for p in g)/len(g) for i in range(3)])
        else:
            newc.append(centers[groups.index(g)] if False else [0,0,0])
    if all(dist(newc[i], centers[i]) < 0.5 for i in range(K)):
        break
    centers = newc

clusters = []
for i, g in enumerate(groups):
    if not g:
        continue
    c = centers[i]
    # 平均位置（归一化到原图）
    xs = []; ys = []
    for yy in range(small.height):
        for xx in range(small.width):
            r, g2, b, a = sp[xx, yy]
            if has_alpha and a < 40:
                continue
            if dist([r, g2, b], c) < 900:
                xs.append(xx/80); ys.append(yy/100)
    clusters.append({
        "rgb": [round(v) for v in c],
        "hex": "#%02x%02x%02x" % tuple(round(v) for v in c),
        "count": len(g),
        "cx": round(sum(xs)/len(xs), 2) if xs else None,
        "cy": round(sum(ys)/len(ys), 2) if ys else None,
        "x0": round(min(xs), 2) if xs else None,
        "x1": round(max(xs), 2) if xs else None,
        "y0": round(min(ys), 2) if ys else None,
        "y1": round(max(ys), 2) if ys else None,
    })
clusters.sort(key=lambda c: -c["count"])
print(json.dumps(clusters, ensure_ascii=False, indent=1))

# ---------- 肤色 / 发色 / 深色 详细统计 ----------
def hsv(p):
    r, g, b = [x/255 for x in p]
    mx, mn = max(r, g, b), min(r, g, b)
    d = mx - mn
    if d == 0: hue = 0
    elif mx == r: hue = 60 * (((g-b)/d) % 6)
    elif mx == g: hue = 60 * ((b-r)/d + 2)
    else: hue = 60 * ((r-g)/d + 4)
    sat = 0 if mx == 0 else d/mx
    return hue, sat, mx

skin, hair, dark, white = [], [], [], []
for yy in range(small.height):
    for xx in range(small.width):
        r, g, b, a = sp[xx, yy]
        if has_alpha and a < 40:
            continue
        hue, sat, val = hsv([r, g, b])
        if 5 <= hue <= 45 and sat < 0.55 and val > 0.75:
            skin.append([r, g, b, xx/80, yy/100])
        elif 150 <= hue <= 200 and sat > 0.35 and val > 0.35:
            hair.append([r, g, b, xx/80, yy/100])
        elif val < 0.28:
            dark.append([r, g, b, xx/80, yy/100])
        elif sat < 0.12 and val > 0.85:
            white.append([r, g, b, xx/80, yy/100])

def stats(name, arr):
    if not arr:
        print(name, "none")
        return
    avg = [round(sum(p[i] for p in arr)/len(arr)) for i in range(3)]
    x0 = min(p[3] for p in arr); x1 = max(p[3] for p in arr)
    y0 = min(p[4] for p in arr); y1 = max(p[4] for p in arr)
    print(f"{name}: n={len(arr)} avg=#{avg[0]:02x}{avg[1]:02x}{avg[2]:02x} x=[{x0:.2f},{x1:.2f}] y=[{y0:.2f},{y1:.2f}]")

stats("skin", skin)
stats("hair_teal", hair)
stats("dark", dark)
stats("white", white)

region.save("work/ref_region.png")
small.save("work/ref_small.png")
print("saved work/ref_region.png")
