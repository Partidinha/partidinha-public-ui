from PIL import Image
from collections import Counter

img = Image.open(r"C:\Users\mdeme\Downloads\icon-_U71x0jL.png").convert("RGB")
w, h = img.size

# Sample every 4th pixel for performance
pixels = []
for x in range(0, w, 4):
    for y in range(0, h, 4):
        r, g, b = img.getpixel((x, y))
        # Skip very dark (background) and very light pixels
        brightness = (r + g + b) / 3
        if brightness < 30 or brightness > 245:
            continue
        pixels.append((r, g, b))

# Quantize to reduce noise - round to nearest 16
quantized = [(r // 16 * 16, g // 16 * 16, b // 16 * 16) for r, g, b in pixels]

# Count and get top colors
counter = Counter(quantized)
top = counter.most_common(20)

print("=== Top 20 raw colors (RGB) ===")
for color, count in top:
    pct = count / len(quantized) * 100
    hex_color = '#{:02x}{:02x}{:02x}'.format(*color)
    print(f"{hex_color}  RGB{color}  {pct:.1f}%")

# Group by hue families
import colorsys

def rgb_to_hsv(r, g, b):
    return colorsys.rgb_to_hsv(r/255, g/255, b/255)

# Find dominant hue families
hue_groups = {}
for color, count in top:
    h, s, v = rgb_to_hsv(*color)
    # Group by hue bucket (every 30 degrees)
    hue_bucket = round(h * 360 / 30) * 30
    if hue_bucket not in hue_groups:
        hue_groups[hue_bucket] = []
    hue_groups[hue_bucket].append((color, count))

print("\n=== Hue Families ===")
for hue, colors in sorted(hue_groups.items()):
    total = sum(c for _, c in colors)
    print(f"Hue ~{hue}°: {total} pixels")
    for color, count in colors[:3]:
        hex_color = '#{:02x}{:02x}{:02x}'.format(*color)
        print(f"  {hex_color}")

# Get 3 dominant colors by averaging top colors in each major hue family
print("\n=== 3 Dominant Colors ===")
# The icon has deep navy background, medium blue body, light blue highlights
# Let's manually pick representative colors from the top list

# Deep navy (background/darkest)
deep_navy = top[0][0] if top else (15, 40, 60)

# Find medium blue (the main body color)
medium_blues = [(c, cnt) for c, cnt in top if 50 < c[2] < 180 and c[0] < c[2] and c[1] < c[2]]
medium_blue = medium_blues[0][0] if medium_blues else (40, 90, 140)

# Find light blue/cyan (highlights)
light_blues = [(c, cnt) for c, cnt in top if c[2] > 150 and c[0] > 80 and c[1] > 120]
light_blue = light_blues[0][0] if light_blues else (120, 180, 220)

dominant_colors = [
    ("Deep Navy (fundo escuro)", deep_navy),
    ("Ocean Blue (corpo principal)", medium_blue),
    ("Sky Cyan (destaques)", light_blue),
]

for name, (r, g, b) in dominant_colors:
    hex_color = '#{:02x}{:02x}{:02x}'.format(r, g, b)
    print(f"{name}: {hex_color}  RGB({r},{g},{b})")
