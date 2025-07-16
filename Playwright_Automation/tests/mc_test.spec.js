import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.mindfulchef.com/');
  await page.getByTestId('cookie-banner-accept').click();
  await page.getByRole('link', { name: 'Choose recipes' }).click();
  await page.getByRole('button', { name: 'Ready in 20: Speedy suppers, big on flavour High protein: Fuel your body with our range of high protein recipes 6 plants: This recipe contains 6 different plants Vietnamese-style British Beef Noodle Salad Vietnamese-style British Beef Noodle Salad 2 chilli icons Cooking time: 20 min 588 kcal 57g carbs 21g fat 44g protein ADD', exact: true }).getByTestId('recipe-card-add-item').click();
  await page.getByRole('button', { name: 'Ready in 20: Speedy suppers, big on flavour 1/3 daily fibre: This recipes' }).getByTestId('recipe-card-add-item').click();
  await page.getByRole('button', { name: 'Ready in 20: Speedy suppers, big on flavour 4 of 5 a day: This recipe contains' }).getByTestId('recipe-card-add-item').click();
  await page.getByTestId('continue-cta').click();
  await page.goto('https://www.mindfulchef.com/choose-recipes');
  await page.getByTestId('cart-navigation-no-of-items').click();
  await page.getByTestId('footer-button').click();
});