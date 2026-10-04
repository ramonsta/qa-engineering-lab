const { test, expect } = require('../fixtures/test.fixture');
const users = require('../data/users.json');
const Logger = require('../../shared/logger/logger');

test('@smoke successful login', async ({ loginPage, page }) => {
  Logger.info('Opening application');
  await loginPage.open();

  Logger.info('Submitting valid credentials');
  await loginPage.login(
    users.validUser.username,
    users.validUser.password
  );

  await expect(page).toHaveURL(/logged-in-successfully/);
  await expect(
    page.getByRole('heading', { name: /logged in successfully/i })
  ).toBeVisible();
});