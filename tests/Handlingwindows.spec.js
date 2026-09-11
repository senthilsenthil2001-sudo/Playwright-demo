const { test, expect, chromium } = require('@playwright/test')

test('Handling Pages/Windows', async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()
    const page2 = await context.newPage()
    const page3 = await context.newPage()

    const allpages = context.pages()
    console.log("No. of Pages : ", allpages.length)

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")

    await page2.goto("https://orangehrm.com/")
    await expect(page2).toHaveTitle("OrangeHRM: All in One HR Software for Businesses | OrangeHRM")

    await page3.goto("https://www.demoblaze.com/")
    await expect(page3).toHaveTitle("STORE")
})


test.only('Handling Multiple Pages/Windows', async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")
    await page1.waitForTimeout(3000)

    const pagePromise = context.waitForEvent("page")
    await page1.locator('//a[text()="OrangeHRM, Inc"]').click()

    const newpage = await pagePromise
    await expect(newpage).toHaveTitle("OrangeHRM: All in One HR Software for Businesses | OrangeHRM")
    await newpage.waitForTimeout(4000)
})