import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';


const testDir = defineBddConfig({
    features: 'src/features',
    steps: [
      'src/steps',
      'support/fixtures.ts',
      'support/parameter_types.ts',
    ],
    missingSteps: 'fail-on-run',
  })
export default defineConfig({
  testDir: testDir,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace for each failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
    /* Make a screenshot at the end of a failed test */
    screenshot: 'only-on-failure',
    /* Make a video of each failed test */
    video: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
