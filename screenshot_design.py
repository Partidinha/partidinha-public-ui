import asyncio
from playwright.async_api import async_playwright

html_path = r"C:\Users\mdeme\AppData\Roaming\kimi-desktop\daimon-share\daimon\agents\main\blueprint\widgets\widget_fb57070d-c189-4935-95ea-93685cf37e51\workspace\index.html"
output_dir = r"C:\Users\mdeme\OneDrive\Área de Trabalho\Code\partidinha-public-ui\design"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1280, "height": 800})
        
        await page.goto(f"file:///{html_path}")
        await page.wait_for_timeout(2000)  # wait for fonts + layout
        
        # Full page screenshot desktop
        await page.screenshot(path=f"{output_dir}/design-preview-desktop.png", full_page=True)
        print(f"Saved: {output_dir}/design-preview-desktop.png")
        
        # Mobile screenshot
        await page.set_viewport_size({"width": 390, "height": 844})
        await page.goto(f"file:///{html_path}")
        await page.wait_for_timeout(1500)
        await page.screenshot(path=f"{output_dir}/design-preview-mobile.png", full_page=True)
        print(f"Saved: {output_dir}/design-preview-mobile.png")
        
        await browser.close()

asyncio.run(main())
