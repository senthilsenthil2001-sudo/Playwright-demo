
const { expect } = require('@playwright/test');
//import { expect } from '@playwright/test'

class LoginPage {

    constructor(page) {
        this.page = page;

        this.loginMenu = page.locator('#login2');
        this.username = page.locator('#loginusername');
        this.password = page.locator('#loginpassword');
        this.loginButton = page.locator('//button[text()="Log in"]');
        this.welcomeText = page.locator('#nameofuser');
    }

    async openLoginPage() {
        await this.page.goto('https://www.demoblaze.com/index.html')
        await this.loginMenu.click();
    }

    async login(user, pass) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginButton.click();
    }

    async verifyLogin() {
        await expect(this.welcomeText).toBeVisible();
    }
}

module.exports = { LoginPage };

//////

const { expect } = require('@playwright/test');

class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = page.getByPlaceholder("Username");
        this.password = page.getByPlaceholder("Password");
        this.loginButton = page.locator(' //button[text()=" Login "] ');
        this.welcomeText = page.locator('//p[text()="manda user"]');
    }

    async openLoginPage() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await this.loginMenu.click();
    }

    async login(Admin, admin123) {
        await this.username.fill(Admin);
        await this.password.fill(admin123);
        await this.loginButton.click();
    }

    async verifyLogin() {
        await expect(this.welcomeText).toBeVisible();
    }
}

module.exports = { LoginPage };
