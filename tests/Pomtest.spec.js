import { test, expect } from "@playwright/test"

import { LoginPage } from "../pages/LoginPage"
import { HomePage } from "../pages/HomePage"


test("test", async ({page}) => {
    //Login
    const login = new LoginPage(page)
    await login.openLoginPage()
    await login.login("pavan01", "test@123")
    await page.waitForTimeout(4000)
    await login.verifyLogin()

    //HomePage
    const home = new HomePage(page)
    await home.addProductToCart("Iphone 6 32gb")
    await home.gotoCart()

    //CartPage

})

///
import { test, expect } from "@playwright/test"

import { Login } from "../pages/login"
import { HmePage } from "../pages/HmePage"


test("test", async ({page}) => {
    //Login
    const login = new LoginPage(page)
    await login.openLoginPage()
    await login.login("pavan01", "test@123")
    await page.waitForTimeout(4000)
    await login.verifyLogin()

    //HomePage
    const home = new HomePage(page)
    await home.addProductToCart("Iphone 6 32gb")
    await home.gotoCart()

    //CartPage

})