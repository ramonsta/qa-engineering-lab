const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './automation/playwright/tests',

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  reporter: [
    ['html'],
    ['list']
  ]
});