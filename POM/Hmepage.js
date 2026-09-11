const { expect } = require('@playwright/test');
exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page
        this.productList = '//div[@id="tbodyid"]/div/h4/a'
        this.addtoCartbutton = '//a[text()="Add to cart"]'
        this.cartbutton = '#cart'
    }

    async addProductToCart(productName) {
        const productList = await this.page.locator(this.productList)
        for (const product of productList) {
            if (productName === await product.textContent()) {
                await product.click()
                break
            }
        }

        const [dialog] = await Promise.all([
            this.page.waitForEvent('dialog'),
            this.page.locator(this.addtoCartbutton).click()
        ])

        expect(dialog.message()).toBe("Product added.")
        await dialog.accept()
    }

    async gotoCart() {
        await this.page.locator(this.cartbutton).click()
    }
}


////
const { expect } = require('@playwright/test');
exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page
        this.myinfolist = '//span[text()="My Info"]'
        this.addtoCartbutton = '//a[text()="Add to cart"]'
        this.cartbutton = '#cart'
    }

    async myinfolist(productName) {
        const myinfolist = await this.page.locator(this.myinfolist)
        for (const product of myinfolist) {
            if (productName === await product.textContent()) {
                await product.click()
                break
            }
        }

        const [dialog] = await Promise.all([
            this.page.waitForEvent('dialog'),
            this.page.locator(this.addtoCartbutton).click()
        ])

        expect(dialog.message()).toBe("Product added.")
        await dialog.accept()
    }

    async gotoCart() {
        await this.page.locator(this.cartbutton).click()
    }
}
