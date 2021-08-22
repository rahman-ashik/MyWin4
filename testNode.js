const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto('https://nylottery.ny.gov/draw-game?game=win4');
  // await page.screenshot({ path: 'example.png' });
  const title = await page.title();
  console.log(title);
  await browser.close();
})();

console.log("title");