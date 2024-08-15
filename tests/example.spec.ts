import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://react-cicd-5veb0kd9h-lilivins-projects.vercel.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Login – Vercel/);
});
