from PIL import Image

SRC = r"outputs\assets\miku.png"
img = Image.open(SRC).convert("RGBA")
w, h = img.size
px = img.load()

left = []; right = []
for y in range(int(h*0.20), int(h*0.48)):
    for x in range(int(w*0.20), int(w*0.80)):
        r, g, b, a = px[x, y]
        if a and r+g+b < 330:
            (left if x < w//2 else right).append((x, y))

for name, arr in (("left", left), ("right", right)):
    cx = sum(p[0] for p in arr)/len(arr)
    cy = sum(p[1] for p in arr)/len(arr)
    x0 = min(p[0] for p in arr); x1 = max(p[0] for p in arr)
    y0 = min(p[1] for p in arr); y1 = max(p[1] for p in arr)
    print(f"{name} eye: center=({cx:.0f},{cy:.0f}) bbox=({x0},{y0})-({x1},{y1}) n={len(arr)}")
