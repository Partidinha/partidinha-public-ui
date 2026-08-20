import re

path = r"C:/Users/mdeme/AppData/Roaming/kimi-desktop/daimon-share/daimon/agents/main/blueprint/widgets/widget_fb57070d-c189-4935-95ea-93685cf37e51/workspace/index.html"

with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Remove the duplicated CSS block after the first :root closure
# Find the first :root { ... }  and remove everything between } and * { margin...
content = re.sub(
    r'(\}\s*)\n\s+--font:.*\n\s+\}\s*\n\s+--white:.*\n\s+--off-white:.*\n\s+--black:.*\n\s+--gray:.*\n\s+--gray-light:.*\n\s+--gray-dark:.*\n\s+--blue:.*\n\s+--blue-hover:.*\n\s+--blue-light:.*\n\s+--green:.*\n\s+--radius-sm:.*\n\s+--radius-md:.*\n\s+--radius-lg:.*\n\s+--shadow-product:.*\n\s+--font:.*\n\s+\}\s*\n\n',
    r'\1\n\n',
    content,
    count=1,
    flags=re.DOTALL
)

# 2. Fix #2997FF -> accent-400
content = content.replace('#2997FF', 'var(--accent-400)')

# 3. Fix #000  -> navy-900 (only in the gradient)
content = content.replace('#000 100%', 'var(--navy-900) 100%')

# 4. Verify no old Apple colors remain
old_colors = ['#0071E3', '#0077ED', '#1D1D1F', '#86868B', '#424245', '#34C759', '#2997FF', '#000 ']
for c in old_colors:
    if c in content:
        print(f"WARNING: Still found old color {c}")

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("Done! Palette applied.")
