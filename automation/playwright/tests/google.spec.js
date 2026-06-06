const { test, expect } = require('@playwright/test');

test('Google search page loads', async ({ page }) => {

  await page.goto('https://www.google.com');

  await expect(page).toHaveTitle(/Google/);

});