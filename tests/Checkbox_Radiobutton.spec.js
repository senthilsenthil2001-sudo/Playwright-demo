import { test, expect } from '@playwright/test';

test('radio button', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Select male
  const male = await page.locator('input#male');
  await male.check();

  // await expect(male).toBeChecked();
  await expect(page.locator('input#male')).toBeChecked();

  const female = await page.locator('input#female');
  await expect(female).not.toBeChecked();

  // Select female
  await female.check();
  await expect(female).toBeChecked();
  await expect(male).not.toBeChecked();
});

test('Checkbox', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const sunday = await page.locator('input#sunday');
  const monday = await page.locator('input#monday');
  const tuesday = await page.locator('input#tuesday');
  const wednesday = await page.locator('input#wednesday').check();
  const thursday = await page.locator('input#thursday');
  const friday = await page.locator('input#friday').check();
  const saturday = await page.locator('input#saturday');

  // Select checkbox
  await sunday.check();

  await expect(sunday).toBeChecked();
  await expect(wednesday).toBeChecked();
  await expect(tuesday).not.toBeChecked();
  await thursday.check();
  await expect(thursday).toBeChecked();
  await expect(monday).not.toBeChecked();
});