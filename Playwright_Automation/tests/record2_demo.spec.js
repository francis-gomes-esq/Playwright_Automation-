// Import Playwright testing utilities
import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');

// Define a new test called "record demo 2"
test('record demo 2', async () => {
  // Launch a visible (non-headless) Chromium browser instance
  const browser = await chromium.launch({
    headless: false
  });

  // Create a new browser context (like a fresh profile)
  const context = await browser.newContext();

  // Open a new page/tab in that context
  const page = await context.newPage();

  // Navigate to the Sauce Demo login page
  await page.goto('https://www.saucedemo.com/');

  // Focus the username field and enter credentials
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');

  // Focus the password field and enter the initial (incorrect) password
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret-sauce');

  // Attempt to log in
  await page.locator('[data-test="login-button"]').click();

  // Realize the password was mistyped, so re-focus and correct it
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Click the login button again with the correct password
  await page.locator('[data-test="login-button"]').click();

  // Verify that we successfully landed on the inventory page
  await expect(page).toHaveURL(/inventory.html/);

  // Close the browser context and browser to clean up
  await context.close();
  await browser.close();
});
