import { expect, test, Page } from '@playwright/test';

async function homeLoads(page: Page): Promise<void> {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Timeless spaces');
}

async function portfolioLoads(page: Page): Promise<void> {
  await page.goto('/portfolio');
  await expect(page.locator('img').first()).toBeVisible();
}

async function contactValidation(page: Page): Promise<void> {
  await page.goto('/contact');
  await page.getByRole('button', { name: 'Send Inquiry' }).click();
  await expect(page.getByText('Valid email required')).toBeVisible();
}

test('home loads', homeLoads);
test('portfolio loads and renders sample image', portfolioLoads);
test('contact form validation works', contactValidation);
