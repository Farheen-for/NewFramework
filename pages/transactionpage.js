import { expect } from "@playwright/test";
export class Transaction {
    constructor(page) {
        this.page = page;
        this.transactionMenu = page.getByRole("link", { name: "Transaction" })
        this.searchTf = page.locator("//input[@type='search']");
        this.transactionNo = page.locator("text=Transaction #");
        this.customerName = page.locator("//strong[contains(text(),'Farheen')]");
        this.productName = page.locator("//td[text()='mobile']");
        this.cashAmount = page.locator("//h2[contains(.,'Cash Amount')]");
        this.viewbtn = page.locator("(//a[contains(.,'View')])[1]")
    }
    async openTransaction() {
        await this.transactionMenu.click();
    }
    async searchTransaction(customerName) {
        await this.searchTf.fill(customerName);
        await this.viewbtn.click();
    }
    async verifyTransactionPage() {
        await expect(this.page).toHaveURL(/trans/);
    }
    async verifyTransactionNumber() {
        await expect(this.transactionNo).toBeVisible();
    }
    async verifyCustomer(customer) {
        await expect(this.page.getByText(customer)).toBeVisible();
    }
    async verifyProduct(product) {
        await expect(this.page.getByText(product)).toBeVisible();
    }
    async verifyCashAmount(amount) {
        await expect(this.cashAmount).toContainText(amount);
    }
}