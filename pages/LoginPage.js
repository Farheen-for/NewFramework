export class Login{
    constructor(page){
        this.page= page;
        this.userTf = page.locator("//input[@placeholder='Username']")
        this.pswdtTf = page.locator("//input[@placeholder='Password']")
        this.loginbtn = page.locator("//button[text()='Login']")
    }
    async logintoapp(username,passward){
        this.page.once("dialog", async (dialog) => {
        console.log(dialog.message());
        await dialog.accept();
    });
        await this.userTf.fill(username)
        await this.pswdtTf.fill(passward)
        await this.loginbtn.click();
    }
}