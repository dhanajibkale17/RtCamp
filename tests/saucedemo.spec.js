const { test,expect } = require("@playwright/test");
import { log } from "console";
import { LoginPage } from "../pages/LoginPage";


test('test',async({page})=>
{
    const login=new LoginPage(page);
    await login.goToLoginPage();

    await login.login('standard_user','secret_sauce')
    await page.waitForTimeout(3000); 
    await page.close();

});