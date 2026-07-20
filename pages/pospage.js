import { expect } from "@playwright/test";
 export class Pos{
    constructor(page) {
        this.page = page;
        this.posMenu = page.getByText("POS").first();
        this.searchTf = page.locator("//input[@placeholder='Search Product']");
        this.productCard = page.locator("//h6[text()='Laptop']");
        this.customerDd = page.locator("//select[@name='customer']");
        this.paymentBtn = page.locator("//button[text()='PROCEED TO PAYMENT']");
        this.submitPaymentBtn = page.locator("//button[text()='SUBMIT']");
        this.invoice = page.locator("text=Invoice");
        this.othersbtn = page.locator("//a[text()='Monitor']")
        this.addbtn = page.locator("(//input[@value='Add'])[8]")
        this.entercashTf = page.locator("//input[@placeholder='ENTER CASH']")
        this.cusaddbtn = page.locator("//i[@class='fas fa-fw fa-plus']")
        this.firstTF = page.locator("(//input[@placeholder='First Name'])[2]")
        this.lastTF = page.locator("(//input[@placeholder='Last Name'])[2]")
        this.phonenumTF = page.locator("(//input[@placeholder='Phone Number'])[2]")
        this.savebtn = page.locator("(//button[text()='Save'])[2]")

    }
    async openPOS() {
        await this.posMenu.click();
        await this.othersbtn.click();
        await this.addbtn.click();
    }
    async searchProduct(productName) {
        await this.searchTf.fill(productName);
    }
    async addProductToCart(productName) {
        await this.page.locator(`//h6[text()='${productName}']`).click();
    }
    async addcustomer(first,last,phone){
        await this.cusaddbtn.click();
        await this.firstTF.fill(first)
        await this.lastTF.fill(last)
        await this.phonenumTF.fill(phone)
        await this.savebtn.click();
    }
    async selectCustomer(customer, amount) {
    console.log("Customer:", customer);
    // const options = await this.customerDd.locator("option").allTextContents();
    // console.log("Available:", options);
    await this.customerDd.selectOption({ label: customer });
    await this.submitPaymentBtn.click();
    await this.entercashTf.fill(amount);
}
    // async selectCustomer(customer,amount) {
    //     await this.customerDd.click();
    //     await this.customerDd.selectOption(customer);
    //     // await this.page.locator(`//li[text()='${customer}']`).click();
    //     await this.submitPaymentBtn.click();
    //     await this.entercashTf.fill(amount)
    // }
    async completePayment() {
        await this.paymentBtn.click();
        // const dialogsPromise = this.page.waitForEvent("dialog");
        // const dialog1 = await dialogsPromise;
        // expect(dialog1.message()).toContain("Success"); 
        // console.log(dialog1.message());
        // await dialog1.accept();
        

    }
    async verifyInvoice() {
        
        await expect(this.invoice).toBeVisible();
    }
}
// export default Pos