import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['Pixel 3 landscape'],
});

test('test', async ({ page }) => {
});