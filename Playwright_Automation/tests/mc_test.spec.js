// Rudimentary smoke test: quick sanity check with minimal validation. Not exhaustive.
import { test, expect } from '@playwright/test';

test('Rudimentary smoke test', async ({ page }) => {
  // Navigate to Mindful Chef homepage
  await page.goto('https://www.mindfulchef.com/');

  // Accept cookie banner and assert it disappears
  const acceptButton = page.getByTestId('cookie-banner-accept');
  await expect(acceptButton).toBeVisible();
  await acceptButton.click();
  await expect(acceptButton).toBeHidden();

  // Navigate to "Choose recipes"
  await page.getByRole('link', { name: 'Choose recipes' }).click();

  // Add a recipe to cart and assert cart count increments to 1
  await page
    .getByRole('button', {
      name: 'Ready in 20: Speedy suppers, big on flavour High protein: Fuel your body with our range of high protein recipes 6 plants: This recipe contains 6 different plants Vietnamese-style British Beef Noodle Salad Vietnamese-style British Beef Noodle Salad 2 chilli icons Cooking time: 20 min 588 kcal 57g carbs 21g fat 44g protein ADD',
      exact: true,
    })
    .getByTestId('recipe-card-add-item')
    .click();
  await expect(page.getByTestId('cart-navigation-no-of-items')).toHaveText('1');

  // Quick continue to next step
  await page.getByTestId('continue-cta').click();

  // Final sanity: click footer button
  await page.getByTestId('footer-button').click();
});
