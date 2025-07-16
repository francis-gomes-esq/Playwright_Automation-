import { test, expect } from '@playwright/test';

// Define a test named 'record demo test'
test('record demo test', async ({ page }) => {
  // Navigate to the SauceDemo login page
  await page.goto('https://www.saucedemo.com/');

  // Click and fill the username field
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');

  // Click and fill the password field
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Click the login button (note: selector corrected if necessary)
  await page.locator('[data-test="login-button123"]').click();

  // Verify that the URL is now the inventory page after login
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Add the Sauce Labs Backpack product to the cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Click on the first item's image link to view its details
  await page.locator('[data-test="item-1-img-link"]').click();

  // Add the item to the cart from the details page
  await page.locator('[data-test="add-to-cart"]').click();

  // Open the sidebar menu by clicking the 'Open Menu' button
  await page.getByRole('button', { name: 'Open Menu' }).click();

  // Click the logout link in the sidebar to log out
  await page.locator('[data-test="logout-sidebar-link"]').click();

  // Verify that the URL is back to the login page after logout
  await expect(page).toHaveURL('https://saucedemo.com/');
});
