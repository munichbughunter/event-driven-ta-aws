export { };

describe('First Serverless UI Test on AWS', () => {
    it('Open testing page', async () => {
        await page.goto('https://github.com/microsoft/playwright');
        const title = await page.title();
        expect(title).toBe('GitHub - microsoft/playwright: Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API.');
    });
});
