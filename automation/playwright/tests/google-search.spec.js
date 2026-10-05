const { test, expect } = require('@playwright/test');
const { GooglePage } = require('../pages/GooglePage');

test('Search Playwright on Google', async ({ page }) => {

  const googlePage = new GooglePage(page);

  await googlePage.open();

  await googlePage.search('Playwright');

  await expect(page).toHaveTitle(/Playwright/i);

});