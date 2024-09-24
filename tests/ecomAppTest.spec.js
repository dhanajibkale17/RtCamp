import {test ,expect } from '@playwright/test';
import { LoginPage } from './flipkart/LoginPage';
import { SignUPPage } from './flipkart/SignUPPage';
import { HomePage } from './flipkart/HomePage';
import { CartPage } from './flipkart/CartPage';

test('test',async ({ page }) => {    
   
      

   //Login
   const login=new LoginPage(page);   
   await login.gotoLoginPage();    
   await login.login('dhanajikale1','9960007289')
   await page.waitForTimeout(3000)   

   
   /*
   //Sign UP
   const signup = new SignUPPage(page);
   //await signup.gotoSignUpPage();  
    await signup.signup('dhanajikale2','9604871717')
    await page.waitForTimeout(3000); 

    //const logout=new SignUPPage(page);
    //await logout.gotoLoginPage(); 
    //await page.waitForTimeout(3000)
   */  

    
  //Home
  const home=new HomePage(page)
  await home.addProductToCart("Nexus 6")
  await page.waitForTimeout(3000)
  await home.gotoCart();

   //Cart
 const cart=new CartPage(page)
 await page.waitForTimeout(5000)
 const status=await cart.checkProductInCart('Nexus 6')
 expect (await status).toBe(true);

});