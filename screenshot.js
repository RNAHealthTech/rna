const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Desktop
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('https://headachespecialistindia.com', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'd:/RNAHealthTech/rna/public/content/headache-desktop.png' });
  
  // Mobile
  await page.setViewport({ width: 375, height: 812, isMobile: true });
  await page.screenshot({ path: 'd:/RNAHealthTech/rna/public/content/headache-mobile.png' });
  
  await browser.close();
  console.log('Screenshots captured successfully!');
})();
