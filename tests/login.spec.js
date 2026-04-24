const { test, expect } = require('@playwright/test');
test.only('Open Testing101 website', async ({ page }) => {
    // Navigate to the website
    await page.goto('https://www.testing101.net/');
    await page.waitForTimeout(5000)
    
   await page.getByTestId('handle-button').click();
   await page.getByTestId('signUp.switchToSignUp').click();
   await page.getByRole('textbox', { name: 'Email' }).fill('ankita.math@e-bharatai.com');
   await page.getByRole('textbox', { name: 'Password' }).fill('Ankita@2465');
   await page.getByTestId('buttonElement').click();
   await page.pause();
});