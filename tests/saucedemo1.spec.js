//const { chromium } = require('playwright');
const { test, expect } = require('@playwright/test');

test('test',async ({page}) => {

  //const browser = await chromium.launch({ headless: false });
  //const context = await browser.newContext();
  //const page = await context.newPage();

  // Visit the application
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.fill('input[data-test="username"]', 'standard_user');
  await page.fill('input[data-test="password"]', 'secret_sauce');
  await page.click('input[data-test="login-button"]');
  
  // Wait for page to load
  await page.waitForSelector('.inventory_list');
/*
  // Scenario 1: Verify sorting order displayed for Z-A on the “All Items” page.
  // Click on the sorting dropdown and choose Z-A
  await page.click('.product_sort_container');
  await page.selectOption('.product_sort_container', 'za');

  // Collect the names of the items and validate the Z-A order
  const productNamesZA = await page.$$eval('.inventory_item_name', items => items.map(item => item.textContent));
  const isSortedZA = [...productNamesZA].sort((a, b) => b.localeCompare(a)).every((val, index) => val === productNamesZA[index]);

  console.log("Is Z-A order correct:", isSortedZA ? "Yes" : "No");

  // Scenario 2: Verify the price order (high-low) displayed on the “All Items” page.
  // Click on the sorting dropdown and choose high to low prices
  await page.click('.product_sort_container');
  await page.selectOption('.product_sort_container', 'hilo');

  // Collect the prices and validate the High-Low order
  const productPricesHighLow = await page.$$eval('.inventory_item_price', items => items.map(item => parseFloat(item.textContent.replace('$', ''))));
  const isSortedHighLow = [...productPricesHighLow].sort((a, b) => b - a).every((val, index) => val === productPricesHighLow[index]);

  console.log("Is High-Low price order correct:", isSortedHighLow ? "Yes" : "No");

  // Scenario 3: Add multiple items to the cart and validate the checkout journey.
  // Add first two items to the cart
  const addToCartButtons = await page.$$('.btn_inventory');
  await addToCartButtons[0].click();
  await addToCartButtons[1].click();

  // Click on cart icon
  await page.click('.shopping_cart_link');

  // Validate that the items were added to the cart
  const cartItemCount = await page.$$eval('.cart_item', items => items.length);
  console.log(`Number of items in cart: ${cartItemCount}`);

  // Proceed to Checkout
  await page.click('button[data-test="checkout"]');
  await page.fill('input[data-test="firstName"]', 'John');
  await page.fill('input[data-test="lastName"]', 'Doe');
  await page.fill('input[data-test="postalCode"]', '12345');
  await page.click('input[data-test="continue"]');

  // Finish the checkout process
  await page.click('button[data-test="finish"]');
  const checkoutComplete = await page.isVisible('.complete-header');
  console.log("Checkout Completed:", checkoutComplete ? "Yes" : "No");

  // Close the browser
  await browser.close();

  */
});
