// @ts-check
/**
 * My first Playwright test
 * This spec demonstrates a basic end-to-end check using Playwright Test.
 * It navigates to Google and validates the page title.
 */
const { test, expect } = require('@playwright/test');

test('My first test', async ({ page }) => {
  // Go to Google's homepage
  await page.goto('https://google.com');

  // Assert that the page title includes 'Google'
  await expect(page).toHaveTitle('Google');
});
