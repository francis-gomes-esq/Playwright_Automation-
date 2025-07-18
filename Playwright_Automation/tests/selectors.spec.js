import {test, expect} from '@playwright/test'

test('Selectors Demo', async ({page}) => {
	await page.goto('https://saucedemo.com/')

	await page.pause()
	//using any object property
	await page.click('id=user-name')
	await page.locator('id=user-name').fill('Jeremy')
	await page.locator('[id="user-name"]').fill('Penelope')
	// using css selector
	// #login-button
	await page.locator('#login-button').click()
	// using Xpath
	// input[@name="password"]
	await page.locator('xpath=//input[@id="user-name"]').fill('Gabriela')
	await page.locator('//input[@id="user-name"]').fill('Brenda')
	// using text
	await page.locator('text=LOGIN').click()
	await page.locator('input:has-text("LOGIN")').click()
	
})
