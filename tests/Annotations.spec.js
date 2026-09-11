import { test, expect } from 'playwright/test'

only()

test.only('Test1', async ({page}) => {
    tag : ['@only']
    console.log("This is Test case 1.")
})

skip()

test('Test2', async ({page, browserName}) => {
    if (browserName == "firefox") {
        test.skip()
    }
    console.log("This is Test case 2.")
})

fixme()

test.fixme('Test3', async ({page}) => {
    console.log("This is Test case 3.")
})

fail()

test.fail('Test4', async ({page}) => {
    console.log("This is Test case 4.")
    expect(1).toBe(7)
})

slow()

test.slow('Test5', async ({page}) => {
    console.log("This is Test case 5.")
})