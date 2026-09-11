import { test, expect } from '@playwright/test'

test.beforeEach(async ({page}) => {

    await page.goto("https://www.demoblaze.com/")

    // Login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill("pavanol")
    await page.locator('#loginpassword').fill("test@123")
    await page.locator('//button[text()="Log in"]').click()
})

test.afterEach(async ({page}) => {

    // Logout
    await page.locator('#logout2').click()
})


test("HomePage test", async ({page}) => {

    const products = await page.locator('//h4[@class="card-title"]')
    await expect(products).toHaveCount(9)

})


test("Add Product to cart test", async ({page}) => {

    await page.click('//a[text()="Nokia lumia 1520"]')
    await page.locator('//a[text()="Add to cart"]').click()

    page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Product added.')
        await dialog.accept()
    })

})


//beforeEach
//afterEach
//beforeAll
//afterAll