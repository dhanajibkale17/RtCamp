exports.LoginPage = 
 class LoginPage
{
    constructor(page){
        this.page=page;
        //this.LoginPage="";
        this.UserNameInput="#user-name"; 
        this.PasswordInput="#password";
        this.LoginButton="//input[@id='login-button']";
    }
   async goToLoginPage(){
    await this.page.goto("https://www.saucedemo.com/");
   }

   async login(username,password){
    await this.page.locator(this.UserNameInput).fill(username);
    await this.page.locator(this.PasswordInput).fill(password);
    await this.page.locator(this.LoginButton).click();
   }
}

