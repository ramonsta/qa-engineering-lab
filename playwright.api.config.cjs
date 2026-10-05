const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './automation/playwright/tests/api',
  testMatch: '**/*.spec.js',
  timeout: 30_000,
  forbidOnly: Boolean(process.env.CI),
  retries: 0,
  fullyParallel: true,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-api-report', open: 'never' }]
  ],
  outputDir: 'test-results-api',
  use: {
    baseURL: 'http://127.0.0.1:3000'
  },
  webServer: {
    command: 'node api/demo/server.cjs',
    url: 'http://127.0.0.1:3000/health',
    reuseExistingServer: false,
    timeout: 15_000
  }
});
