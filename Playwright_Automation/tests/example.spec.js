// @ts-check
import {test, expect} from '@playwright/test'

let context
let page
test.beforeAll(async ({browser}) => {
	context = await browser.newContext()
	await context.tracing.start({
		snapshots: true,
		screenshots: true,
	})
	page = await context.newPage()
})

test.afterAll(async () => {
	await context.tracing.stop({path: 'test2_trace.zip'})
})

test('homepage has Playwright', async ({}) => {
	// await context.tracing.start({snapshots: true, screenshots: true})

	await page.goto('https://playwright.dev/')

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Playwright/)

	// create locator
	const getStarted = page.locator('text=Get Started')

	// Expect an attribute "to be strictly equal" to the value
	await expect(getStarted).toHaveAttribute('href', '/docs/intro')

	// click the get started link
	await getStarted.click()

	// Expects the URL to contain intro
	await expect(page).toHaveURL(/.*intro/)

	// await context.tracing.stop({path: 'test1_trace.zip'})
})

test('get started link', async () => {
	await page.goto('https://playwright.dev/')

	// Click the get started link.
	await page.getByRole('link', {name: 'Get started'}).click()

	// Expects page to have a heading with the name of Installation.
	await expect(
		page.getByRole('heading', {name: 'Installation'})
	).toBeVisible()
})
