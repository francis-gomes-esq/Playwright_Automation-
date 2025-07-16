// Basic functional test: Quick workflow verification with basic assertions. Not exhaustive, but more than just a smoke check.
import { test, expect } from '@playwright/test';

test('Quick functional test - workflow verification', async ({ page }) => {
  // Navigate to Mindful Chef homepage
  await page.goto('https://www.mindfulchef.com/');

  // Accept cookie banner and assert it disappears
  const acceptButton = page.getByTestId('cookie-banner-accept');
  await expect(acceptButton).toBeVisible();
  await acceptButton.click();
  await expect(acceptButton).toBeHidden();

  // Click on "Choose recipes" link and verify navigation
  await page.getByRole('link', { name: 'Choose recipes' }).click();
  await expect(page).toHaveURL(/choose-recipes/);

  // Add first recipe to cart and assert cart count increments to 1
  await page
    .getByRole('button', {
      name: 'Ready in 20: Speedy suppers, big on flavour High protein: Fuel your body with our range of high protein recipes 6 plants: This recipe contains 6 different plants Vietnamese-style British Beef Noodle Salad Vietnamese-style British Beef Noodle Salad 2 chilli icons Cooking time: 20 min 588 kcal 57g carbs 21g fat 44g protein ADD',
      exact: true,
    })
    .getByTestId('recipe-card-add-item')
    .click();
  await expect(page.getByTestId('cart-navigation-no-of-items')).toHaveText('1');

  // Add second recipe to cart and assert cart count increments to 2
  await page
    .getByRole('button', { name: 'Ready in 20: Speedy suppers, big on flavour 1/3 daily fibre: This recipes' })
    .getByTestId('recipe-card-add-item')
    .click();
  await expect(page.getByTestId('cart-navigation-no-of-items')).toHaveText('2');

  // Add third recipe to cart and assert cart count increments to 3
  await page
    .getByRole('button', { name: 'Ready in 20: Speedy suppers, big on flavour 4 of 5 a day: This recipe contains' })
    .getByTestId('recipe-card-add-item')
    .click();
  await expect(page.getByTestId('cart-navigation-no-of-items')).toHaveText('3');

  // Click continue to proceed and assert the button is no longer visible (navigated away)
  const continueButton = page.getByTestId('continue-cta');
  await expect(continueButton).toBeVisible();
  await continueButton.click();
  await expect(continueButton).toBeHidden();

  // Quick check: revisit the choose-recipes page directly and verify URL
  await page.goto('https://www.mindfulchef.com/choose-recipes');
  await expect(page).toHaveURL(/choose-recipes/);

  // Verify cart navigation still shows 3 items
  await expect(page.getByTestId('cart-navigation-no-of-items')).toHaveText('3');

  // Click on the footer button and assert it is visible after click
  const footerButton = page.getByTestId('footer-button');
  await footerButton.click();
  await expect(footerButton).toBeVisible();
});
