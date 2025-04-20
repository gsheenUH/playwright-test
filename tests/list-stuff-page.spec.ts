import { test, expect } from '@playwright/test';

test.use({
  storageState: 'john-auth.json',
});

test('List Stuff Page', async ({ page }) => {
  await page.goto('http://localhost:3000/list');
  await page.getByRole('cell', { name: 'Name' }).click();
  await page.getByRole('cell', { name: 'Quantity' }).click();
  await page.getByRole('cell', { name: 'Condition' }).click();
  await page.getByRole('cell', { name: 'Actions' }).click();
  await page.getByRole('cell', { name: 'Basket' }).click();
  await page.getByRole('cell', { name: '3' }).click();
  await page.getByRole('cell', { name: 'excellent' }).click();
  await page.getByRole('row', { name: 'Basket 3 excellent Edit' }).getByRole('link').click();
  await page.getByRole('textbox').click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('combobox').selectOption('good');
  await page.getByRole('combobox').selectOption('fair');
  await page.getByRole('combobox').selectOption('poor');
  await page.getByRole('link', { name: 'List Stuff' }).click();
  await page.getByRole('cell', { name: 'Bicycle' }).click();
  await page.getByRole('cell', { name: '2' }).click();
  await page.getByRole('cell', { name: 'poor' }).click();
  await page.getByRole('button', { name: 'john@foo.com' }).click();
});
