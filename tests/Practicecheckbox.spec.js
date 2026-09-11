/// code got from codegen using tap and find locator
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'தமிழ் - TA' }).click();
  await page.getByRole('link', { name: 'English - EN' }).click();
  await page.getByRole('navigation', { name: 'Primary' }).getByLabel('Expand to Change Language or').click();
  await page.getByRole('link', { name: 'हिन्दी - HI' }).click();
  await page.getByRole('link', { name: 'English - EN' }).click();
});

///
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('laptop');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
});

// While trying to find the page is going up and i cant able to select the other checkbox 
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('laptop');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  await page.getByRole('link', { name: 'Apply the filter Lenovo to' }).click();
  await page.getByRole('link', { name: 'Clear' }).click();
  await page.getByRole('link', { name: 'Apply the filter ASUS to' }).click();
});