const { test, expect } = require('@playwright/test')

// test('frames', async({page})=>{
//     await page.goto('https://ui.vision/demo/webtest/frames/')

//     // console.log(page.frames().map(frame => frame.url()))

//     // //total frames
//     const totalFrames = await page.frames()
//     console.log("No. of frames: ", totalFrames.length)

//     //1.Using name | url
//     const frame_1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1'})
//     await frame_1.locator('input[name="mytext1"]').fill("Hello Class")
//     await frame_1.waitForTimeout(4000)

//     // //2.Using locator
//     const input = await page.frameLocator('frame[src="frame_2.html"]').locator('input[name="mytext2"]')
//     await input.fill("Welcome Class")
//     await page.waitForTimeout(4000)
// })

test('Nested frames', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');

    // Go to Frame 3
   const frame3 = page.frameLocator('frame[src="frame_3.html"]');
    await frame3.locator('input[name="mytext3"]').fill("I'm Indhu");

    // Go to nested Google Form iframe
    const nestedFrame = frame3.frameLocator('iframe');
    await nestedFrame.locator('div[id="i6"]').click()
   // await nestedFrame.locator('div[class="uVccjd aiSeRd FXLARc wGQFbe BJHAP oLlshd i9xfbb"]').click()
    await nestedFrame.getByRole('button', { name: 'Next' }).click();

    

    //  await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('textbox', { name: 'Enter a short answer...' })
    //  await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('textbox', { name: 'Enter a short answer...' })
    //  await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('textbox', { name: 'Enter a long answer...' })

    await page.waitForTimeout(5000)
})


//Using code gen
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/frame_3');
  await page.getByText('Loading...').contentFrame().getByRole('radio', { name: 'Hi, I am the UI.Vision IDE' }).click();
  await page.getByText('Loading...').contentFrame().getByRole('checkbox', { name: 'Web Testing' }).click();
  await page.getByText('Loading...').contentFrame().getByRole('button', { name: 'Next' }).click();
  await page.getByText('Loading...').contentFrame().getByRole('textbox', { name: 'Enter a short text' }).click();
  await page.getByText('Loading...').contentFrame().getByRole('textbox', { name: 'Enter a short text' }).press('CapsLock');
  await page.getByText('Loading...').contentFrame().getByRole('textbox', { name: 'Enter a short text' }).fill('C');
  await page.getByText('Loading...').contentFrame().getByRole('textbox', { name: 'Enter a short text' }).press('CapsLock');
  await page.getByText('Loading...').contentFrame().getByRole('textbox', { name: 'Enter a short text' }).fill('Chid');
  await page.getByText('Loading...').contentFrame().getByRole('textbox', { name: 'Enter a long answer' }).click();
  await page.getByText('Loading...').contentFrame().getByRole('textbox', { name: 'Enter a short text' }).press('CapsLock');
  await page.getByText('Loading...').contentFrame().getByRole('textbox', { name: 'Enter a long answer' }).fill('C');
  await page.getByText('Loading...').contentFrame().getByRole('textbox', { name: 'Enter a long answer' }).press('CapsLock');
  await page.getByText('Loading...').contentFrame().getByRole('textbox', { name: 'Enter a long answer' }).fill('Chidambaram');
  await page.getByText('Loading...').contentFrame().getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Loading...').contentFrame().getByText('Thank you for testing the UI.').click();
});