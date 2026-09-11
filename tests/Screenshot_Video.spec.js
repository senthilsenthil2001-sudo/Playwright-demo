import { test, expect } from '@playwright/test'

// //Screenshots

// test('Page screenshot', async ({page}) => {
//     await page.goto("https://www.demoblaze.com/")
//     await page.screenshot({path:'tests/screenshots/'+Date.now()+'HomePage1.png'})
// })

// test('Full page screenshot', async ({page}) => {
//     await page.goto("https://www.demoblaze.com/")
//     await page.screenshot({path:'tests/screenshots/'+Date.now()+'FullPage.png', fullPage: true})
// })

// test('Element screenshot', async ({page}) => {
//     await page.goto("https://www.demoblaze.com/")
//     await page.locator("//a[text()='Nokia lumia 1520']/ancestor::div[@class='card h-100']").screenshot({path:'tests/screenshots/'+Date.now()})
// })

// console.log("hi"+"hello")

//Video


//Practise
//Full Page
// test.only('Full page screenshot', async ({page}) => {
//     await page.goto("https://testautomationpractice.blogspot.com/")
//     await page.screenshot({path:'tests/screenshots/'+Date.now()+'FullPage.png', fullPage: true})
// })
//

 test('Element screenshot', async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
     const usernameInput = await page.locator('#user-name')
    await page.locator('//input[@id="name"]').fill('Chidambaram').screenshot({path:'tests/screenshots/'+Date.now()})
})

