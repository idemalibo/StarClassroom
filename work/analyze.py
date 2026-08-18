import json
from PIL import Image

def hsv(p):
    r, g, b = [x/255 for x in p]
    mx, mn = max(r,g,b), min(r,g,b)
    d = mx-mn
    hue = 0
    if d:
        if mx == r: hue = 60*(((g-b)/d) % 6)
        elif mx == g: hue = 60*((b-r)/d+2)
        else: hue = 60*((r-g)/d+4)
    sat = 0 if mx == 0 else d/mx
    return hue, sat, mx

def near(p, t, tol=22):
    return all(abs(p[i]-t[i]) <= tol for i in range(3))

with open('work/verify.json', encoding='utf-8') as f:
    data = json.load(f)
home = data['home']
img = Image.open('work/v-home.png').convert('RGB')
w, h = img.size
print('size:', w, h)
print('img natural:', home['img']['naturalWidth'], 'x', home['img']['naturalHeight'])

stage = home['stage']
crop = img.crop((int(stage['x']), int(stage['y']), int(stage['x']+stage['w']), int(stage['y']+stage['h'])))
colors = crop.getcolors(maxcolors=1000000)
print('stage unique colors:', len(colors) if colors else '>1M')

box = home['img']['box']
x0, y0 = int(box['x']), int(box['y'])
x1, y1 = int(box['x']+box['w']), int(box['y']+box['h'])
px = img.load()

stats = {'teal': 0, 'dark': 0, 'scene_bg': 0, 'total': 0}
for yy in range(y0, y1, 2):
    for xx in range(x0, x1, 2):
        p = px[xx, yy][:3]
        stats['total'] += 1
        hue, sat, val = hsv(p)
        if 150 <= hue <= 200 and sat > 0.2 and val > 0.25:
            stats['teal'] += 1
        elif sum(p) < 260:
            stats['dark'] += 1
        elif near(p, (255, 240, 247), 16) or near(p, (255, 227, 240), 16):
            stats['scene_bg'] += 1
print('char box stats:', {k: (round(v/stats['total']*100, 1) if k != 'total' else v) for k, v in stats.items()})

corner = px[x0+4, y0+6][:3]
center = px[(x0+x1)//2, (y0+y1)//2][:3]
print('top-left corner color:', corner, 'center color:', center)

f_im = Image.open('work/v-focus.png').convert('RGB')
print('focus size:', f_im.size)
