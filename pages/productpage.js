import { expect } from "@playwright/test";
export class Product {
    constructor(page) {
        this.page = page;
        this.productmenu = page.locator("//span[contains(.,'Product')]")
        this.productAddBtn = page.locator("//i[@class='fas fa-fw fa-plus']");
        this.saveBtn = page.locator("(//button[contains(.,'Save')])[5]");
        this.resetBtn = page.locator("(//button[contains(.,'Reset')])[4]");
        this.searchTf = page.locator("//input[@class='form-control form-control-sm']");
        this.productCodeTf = page.getByPlaceholder("Product Code");
        this.productNameTf = page.locator("//input[@placeholder='Name']")
        this.descriptionTf = page.getByPlaceholder("Description");
        this.quantityTf = page.getByPlaceholder("Quantity");
        this.onHandTf = page.getByPlaceholder("On Hand");
        this.priceTf = page.getByPlaceholder("Price");
        this.categoryDd = page.locator("//select[@name='category']");
        this.supplierDd = page.locator("//select[@name='supplier']");
        this.tf = page.locator("//input[@class='form-control' and @placeholder='Date Stock In']")
        this.fil = page.locator("//input[@class='form-control' and @placeholder='Date Stock In']")
        this.dateTextbox = page.getByRole("textbox", { name: "Date Stock In" });
        this.dateTf = page.getByPlaceholder("Date Stock In");
        this.successMsg = page.locator(".alert-success,.toast");
        this.productTable = page.locator("//table/tbody");
        this.detailsbtn = page.locator("(//a[@class='btn btn-primary bg-gradient-primary dropdown no-arrow'])[1]")
        this.editbtn = page.locator("(//a[contains(.,'Edit')])[1]")
        this.entriesdd = page.locator("//select[@class='custom-select custom-select-sm form-control form-control-sm']")
    
    }
    async enterDate(date) {
        await this.tf.click();
        await this.fil.fill(date);
    }

    async clickAddProduct() {
        await this.productAddBtn.click();
    }
    async enterProductCode(productCode) {
        await this.productCodeTf.fill(productCode);
    }
    async enterProductName(productName) {
        await this.productNameTf.fill(productName);
    }
    async enterDescription(description) {
        await this.descriptionTf.fill(description);
    }
    async enterQuantity(quantity) {
        await this.quantityTf.fill(quantity.toString());
    }
    async enterOnHand(onHand) {
        await this.onHandTf.fill(onHand.toString());
    }
    async enterPrice(price) {
        await this.priceTf.fill(price.toString());
    }
    async selectCategory(category) {
        await this.categoryDd.selectOption({ label: category });
    }
    async selectSupplier(supplier) {
        await this.supplierDd.selectOption({ label: supplier });
    }
    // async enterDate(date) {
    //     await this.dateTf.fill(date);
    // }
    async clickSave() {
        await this.saveBtn.click();
    }
    async clickReset() {
        await this.resetBtn.click();
    }
    async searchProduct(productName) {
        await this.searchTf.fill(productName);
    }
    async verifyProductPresent(productName) {
        await expect(this.page.locator(`//td[text()='${productName}']`)).toBeVisible();
    }
    async addProduct(productCode, productName, description, quantity, onHand, price, category, supplier, date) {
        await this.productmenu.click();
        await this.clickAddProduct();
        await this.enterProductCode(productCode);
        await this.enterProductName(productName);
        await this.enterDescription(description);
        await this.enterQuantity(quantity);
        await this.enterOnHand(onHand);
        await this.enterPrice(price);
        await this.selectCategory(category);
        await this.selectSupplier(supplier);
        await this.enterDate(date);
        await this.clickSave();
        await this.entriesdd.selectOption("100")
    }
    async searchProduct(productName) {
        await this.searchTf.fill(productName);
    }
}