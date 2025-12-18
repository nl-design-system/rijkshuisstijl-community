import { test, expect } from '@playwright/test';

test('verify example app', async ({ page }) => {
  await page.goto('');
  
  await expect(page.getByRole('heading', { name: 'Rijkshuisstijl Community Design System' })).toBeVisible();

});


