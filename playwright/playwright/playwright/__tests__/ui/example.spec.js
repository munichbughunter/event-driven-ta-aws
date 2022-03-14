const { test, expect } = require('@playwright/test');

test('First Serverless UI Test on AWS', async ({ page }) => {
    await page.goto('https://github.com/microsoft/playwright');
    const title = await page.title();
    expect(title).toBe('GitHub - microsoft/playwright: Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API.');
});

// import { test, expect } from '@playwright/test';

// test.describe('First Serverless UI Test on AW', () => {
//     test('Open testing page', async ({ page }) => {
//         await page.goto('https://github.com/microsoft/playwright');
//         const title = await page.title();
//         // expect(title).toBe('GitHub - microsoft/playwright: Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API.');
//         expect(title).toBe('I am the greatest');
//     });
// });