import { test, expect } from '@playwright/test';

test('Single and Multiple File Upload', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Scroll to the file upload section
    await page.locator('#singleFileInput').scrollIntoViewIfNeeded();

    // Single File Upload
    await page.locator('#singleFileInput').setInputFiles('C:/Users/Lenovo/OneDrive/Desktop/Profile Templates/Agenti_AI_Profile.doc');
    await page.waitForTimeout(5000);

    // Assertion (optional)
    // await expect(page.locator('#singleFileInput')).toHaveJSProperty('files');

    // Multiple File Upload
    await page.locator('#multipleFilesInput').setInputFiles([
        'C:/Users/Lenovo/OneDrive/Desktop/Profile Templates/DevOps_Profile.doc',
        'C:/Users/Lenovo/OneDrive/Desktop/Profile Templates/Agenti_AI_Profile.doc'
    ]);

    // Click Upload button (if available)
    // await page.locator("button:has-text('Upload Multiple Files')").click();

});

// test.skip('Single Upload', async ({ page }) => {
//     await page.goto('https://www.file.io/');

//     await page.waitForSelector('//label[@class="css-zpjtsm e12cce780"]');
//     await page.locator('//label[@class="css-zpjtsm e12cce780"]').click();

//     await page.locator('input[id="upload-folder"]').setInputFiles('C:/Users/Lenovo/Downloads/DevOps_Resume.pdf');
//     await page.waitForTimeout(5000);
// });

// Single file
// await page.locator('#singleFileInput')
//     .setInputFiles('tests/files/sample.pdf');

// Multiple file