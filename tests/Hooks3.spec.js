import { test, expect, chromium } from '@playwright/test'

let page

test.beforeAll(async ({browser}) => {

    page = await browser.newPage()
    await page.goto("https://www.demoblaze.com/")

    // Login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill("pavanol")
    await page.locator('#loginpassword').fill("test@123")
    await page.locator('//button[text()="Log in"]').click()
})


test("HomePage test", async () => {

    const products = await page.locator('//h4[@class="card-title"]')
    expect(products).toHaveCount(9)

})


test("Add Product to cart test", async () => {

    await page.click('//a[text()="Nokia lumia 1520"]')
    await page.locator('//a[text()="Add to cart"]').click()

    page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Product added.')
        await dialog.accept()
    })

})


test.afterAll(async () => {

    // Logout
    await page.locator("#logout2").click()

})