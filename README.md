SauceDemo Playwright Test Suite
This repository contains automated tests for the SauceDemo website, written in JavaScript using Playwright. 
These tests cover basic functionalities such as sorting, adding items to the cart, and validating the checkout process.

Table of Contents
1)Prerequisites
2)Installation
3)Running the Tests
4)Test Scenarios
5)Project Structure
6)Contributing

1)Prerequisites
Before you can run the tests, ensure that you have the following installed:

Node.js (version 12 or higher)
npm (comes with Node.js)

2)Installation
    a)Clone the repository to your local machine:
    Command:
       git clone https://github.com/dhanajibkale17/saucedemo-playwright.git
       cd saucedemo-playwright
    b)Install the dependencies:
    Command:
       npm install
    c)Install the Playwright browsers:
       npx playwright install
3)Running the Tests
  To execute the test suite, use the following command:
      npx playwright test
   This command will run all tests in the repository. You can also run specific tests or use the --headed option to see the browser in action.

   For example, to run tests with a visible browser:
      npx playwright test --headed
4)Test Scenarios
  This test suite automates the following scenarios for the SauceDemo application:
   1)Verify sorting Z-A order on the "All Items" page: Tests the alphabetical sorting (Z-A) of items on the products page.
   2)Verify price sorting High-Low on the "All Items" page: Verifies the product prices are sorted from highest to lowest.
   3)Add multiple items and validate checkout:  Adds items to the cart and checks that the checkout process completes successfully, with the correct total prices displayed.

5)Project Structure
    saucedemo.spec.js: Contains all test cases for SauceDemo functionalities.
    playwright.config.js: Optional configuration file to customize the Playwright setup (e.g., timeouts, browsers, retries).   
    
6)Contributing:
Contributions are welcome! If you'd like to improve this project:
  Fork the repository.
  Create a new branch for your feature/bugfix.
  Commit and push your changes.
  Create a pull request.
  Please ensure your code follows the best practices and write tests for any new features.

git Command:
or create a new repository on the command line
echo "# RtCamp_Assignment" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/dhanajibkale17/RtCamp_Assignment.git
git push -u origin main


  
