import { chromium } from "playwright";

const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({
  viewport: { width: 1400, height: 1800 },
  deviceScaleFactor: 2,
});
await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(1200);

const ids = ["pair-individuais", "pair-unicos", "pair-top", "pair-mid", "pair-late", "pair-ranking"];
for (const id of ids) {
  const el = page.locator(`#${id}`);
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(200);
  await el.screenshot({
    path: `/workspace/screenshots/tabelas-${id}.png`,
    animations: "disabled",
  });
}
await page.screenshot({
  path: "/workspace/screenshots/tabelas-full.png",
  fullPage: true,
  animations: "disabled",
});
await browser.close();
console.log("captured", ids.length + 1, "images");
