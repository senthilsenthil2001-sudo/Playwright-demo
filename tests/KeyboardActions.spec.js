import { test } from '@playwright/test';

test('Press Enter', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.getByPlaceholder("Enter Name").fill("Midun")
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000)
});

test('Keyboard Type', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#name').click();
    await page.keyboard.type('Messi');
});

test('Tab Key', async ({ page }) => {
    await page.goto(
        'https://testautomationpractice.blogspot.com/'
    );

    await page.locator('#name').click();
    await page.keyboard.type('Sumaya');
    await page.keyboard.press('Tab');
    await page.keyboard.type('@gmail.com')
    await page.keyboard.press('Tab')
});

test('Arrow Keys', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowUp');
});

test('Select All', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#name').fill('Playwright');
    await page.keyboard.press('Control+A').press('Delete');
});