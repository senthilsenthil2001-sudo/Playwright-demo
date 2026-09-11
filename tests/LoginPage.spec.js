/*import { test, expect } from '@playwright/test';

test("Login Page", async ({ page }) => {

    // URL
    await page.goto("https://www.demoblaze.com/");

    // Login Click
    await page.locator("a[id='login2']").click();

    // Username and Password
    await page.locator("input[id='loginusername']").fill("pavanol");
    await page.locator("input[id='loginpassword']").fill("test@123");
    await page.waitForTimeout(3000);

    // Login click
    await page.locator('//button[text()="Log in"]').click();

    await page.waitForTimeout(3000);

});/*

/*
page.getByRole()       to locate by explicit and implicit accessibility attributes.
page.getByText()       to locate by text content.
page.getByLabel()      to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText()    to locate an element, usually image, by its text alternative.
page.getByTitle()      to locate an element by its title attribute.
page.getByTestId()     to locate an element based on its data-testid attribute (other attributes can be configured).
*/

/*test("In-built locators", async ({ page }) => {
    // Code continues...
});

test("In-built locators", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // getByPlaceholder
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");

    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(1000);

    // PIM
    await page.locator('//span[text()="PIM"]').click();

    // getByLabel
    await page.getByLabel('Employee Name').fill("Hello");

    // getByAltText
    await expect(page.getByAltText("client brand banner")).toBeVisible();

    // getByText
    await expect(page.getByText("PIM")).toBeVisible();

    // getByTitle
    await expect(page.getByTitle("OrangeHRM")).toHaveText("OrangeHRM");

});*/

//Task 
/*import { test, expect } from '@playwright/test';
test("Login Page", async ({ page }) => {

    //URL
    await page.goto("https://www.demoblaze.com/index.html");

    //Login Click
     await page.locator("a[id='login2']").click();
}*/

//Task 


test("In-built locators", async ({ page }) => {

    await page.goto("https://www.demoblaze.com/index.html");

    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(1000);

    // getByPlaceholder   (Cant able to use place holder for this website as it dont have place holder)
    //await page.getByPlaceholder("Username").fill("Admin");
    //await page.getByPlaceholder("Password").fill("admin123");

// getByLabel
    await page.getByText("//h5[text() = 'Log in']").click();

    // PIM
    //await page.locator('//span[text()="PIM"]').click();

    // getByLabel
    //await page.getByLabel('Employee Name').fill("Hello");

    // getByAltText
    //await expect(page.getByAltText("client brand banner")).toBeVisible();

    // getByText
    //await expect(page.getByText("PIM")).toBeVisible();

    // getByTitle
    //await expect(page.getByTitle("OrangeHRM")).toHaveText("OrangeHRM");

});
