import { test, expect } from "@playwright/test";
import { text } from "node:stream/consumers";

test("Multiple locators", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page
        .getByRole("textbox")
        .and(page.getByPlaceholder("Enter Name"))
        .fill("Midun");

    await page.waitForTimeout(5000);

    // await page.locator("input").first().fill("Midun");
    // await page.locator("input").last().click();
    // await page.locator("input").nth(35).toBeTruthy();

});

// test.only("filter", async ({ page }) => {

//     await page.goto("https://testautomationpractice.blogspot.com/");

//     await page
//         .locator('table[id="productTable"]')
//         .filter({ has: "Laptop" })
//         .locator('//table[@id="productTable"]//tr[2]/td[4]')
//         .check();

// });

// and()   -> Checks every locator is available
// or()    -> Any one locator
// filter()
// last()
// first()
// nth(index)