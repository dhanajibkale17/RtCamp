const { test,expect } = require("@playwright/test");
import { log } from "console";
import { LoginPage } from "../pages/LoginPage";
import { SortPage } from "../pages/SortPage";


test('first',async({page})=>
{
    const login=new LoginPage(page);
    await login.goToLoginPage();

    await login.login('standard_user','secret_sauce')
    await page.waitForTimeout(3000); 
    //await page.close();

    const PSortContainer=new SortPage(page);
    await PSortContainer.productsortcontainer();
    await page.close();   

});

test('second',async({page})=>
    {
        const PSortContainer=new SortPage(page);
        await PSortContainer.productsortcontainer();
    
        await page.close();    
});