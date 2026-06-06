const { test, expect } = require('@playwright/test');
const { GooglePage } = require('../pages/google.page');

test('Google search page loads', async ({ page }) => {

  const googlePage = new GooglePage(page);

  await googlePage.navigate();

  const title = await googlePage.getTitle();

  expect(title).toContain('Google');

});