const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './automation/playwright/tests',
  testMatch: '**/*.spec.js',

  // Os testes HTTP usam playwright.api.config.cjs.
  testIgnore: '**/api/**',

  timeout: 30_000,
  expect: {
    timeout: 5_000
  },

  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,

  reporter: [
    ['list'],
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never'
    }]
  ],

  outputDir: 'test-results',

  use: {
    baseURL:
      process.env.BASE_URL || 'https://practicetestautomation.com',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium'
      }
    },
    {
      name: 'mobile-chrome',
      use: {
        browserName: 'chromium',
        viewport: {
          width: 390,
          height: 844
        },
        isMobile: true,
        hasTouch: true
      }
    }
  ]
});
