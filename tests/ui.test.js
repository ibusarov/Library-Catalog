const { expect, test } = require("@playwright/test")
const pageUrl = "http://localhost:3000"

test('Verify "All Books" link is visible', async ({page}) => {
    await page.goto(pageUrl)
    await page.waitForSelector('nav.navbar')

    const allBooksLink = await page.$('a[href="/catalog"]')
    const isLinkVisible = await allBooksLink.isVisible()

    expect(isLinkVisible).toBe(true)
})

test('Verify Login button is visible', async ({page}) => {
    await page.goto(pageUrl)
    await page.waitForSelector('nav.navbar')

    const loginButton = await page.$('a[href="/login"]')
    const isButtonVisible = await loginButton.isVisible()

    expect(isButtonVisible).toBe(true)
})

test('Verify Regisgter button is visible', async ({page}) => {
    await page.goto(pageUrl)
    await page.waitForSelector('nav.navbar')

    const registerButton = await page.$('a[href="/register"]')
    const isButtonVisible = await registerButton.isVisible()

    expect(isButtonVisible).toBe(true)
})