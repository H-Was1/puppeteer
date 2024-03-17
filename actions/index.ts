"use server";

const chromium = require("chrome-aws-lambda");
const puppeteer = require("puppeteer-core");
export async function scraper() {
  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath,
    headless: false,
  });
  const page = await browser.page();
  await page.goto("http://www.google.com/");
  const content = await browser.content();
  console.log(content);
  await browser.close();
}
