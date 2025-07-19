import {test, expect, defineConfig, devices} from '@playwright/test'

test('Demo Login Test 1', async ({page}) => {
	await page.goto('https://demo.applitools.com/')
	// await page.pause()
	await page
		.getByRole('textbox', {name: 'Enter your username'})
		.fill('Francis')
	await page
		.getByRole('textbox', {name: 'Enter your password'})
		.fill('Password123')

		/* 
		Note: if the selector appears instantly, it may not wait! As demonstrated in the two examples below. 
		*/
	// await page.getByRole('link', { name: 'Sign in' }).waitFor({ state: 'visible', timeout: 5000 })
	await page.waitForSelector('text=Sign in', { timeout: 5000 })

	await page.getByRole('link', {name: 'Sign in'}).click()
})
