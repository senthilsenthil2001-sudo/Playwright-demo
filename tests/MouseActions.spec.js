import { test, expect } from '@playwright/test';

test('Hover Example', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator("button:has-text('Point Me')").hover();
    await page.waitForTimeout(3000)
});

test('Double Click', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('//button[text()="Copy Text"]').dblclick();

    await expect(page.locator("#field2")).toHaveValue("Hello World!");
});

test('Right Click', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator("#field1").dblclick({
        button: 'right'
    });
});

test('Drag and Drop', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator("div#draggable").dragTo(page.locator("div#droppable"));

    await expect(page.locator("div#droppable")).toContainText("Dropped!");
});


    /*
hover()
click({
    button: 'right'
})
dblclick()
dragTo()
mouse.up().down().wheel()
*/