import { test, expect } from '@playwright/test'

test("Web table", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    //Rows & Coloumns

    // const rows = page.locator("//table[@id='productTable']//tbody/tr");
    // const columns = page.locator("//table[@id='productTable']//thead/tr/th");

    // console.log("Rows:", await rows.count());
    // console.log("Columns:", await columns.count());


    //List

    // const rows = page.locator("//table[@id='productTable']//tbody/tr");

    // const rowCount = await rows.count();

    // for (let i = 0; i < rowCount; i++) {

    //     const product = await rows.nth(i).locator("td").nth(1).textContent();

    //     console.log(product.trim());
    // }


    //Gaming Console selecting

const pages = page.locator(".pagination li a");

const pageCount = await pages.count();
console.log(pageCount);

for (let p = 0; p < pageCount; p++) {

    await pages.nth(p).click();

    const rows = page.locator("//table[@id='productTable']//tbody/tr");

    const rowCount = await rows.count();

    for (let i = 0; i < rowCount; i++) {

        const product = await rows.nth(i).locator("td").nth(1).textContent();

        if (product.trim() === "Gaming Console") {

            await rows.nth(i).locator("input[type='checkbox']").check();

            console.log("Gaming Console selected");

            return;
        }
    }
}

