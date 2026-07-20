import { expect } from "@playwright/test";
export class EditProducts {
    constructor(page) {
        this.page = page;
        this.productNameTf = page.locator("//input[@name='name']");
        this.descriptionTf = page.locator("//textarea[@name='description']");
        this.priceTf = page.locator("//input[@name='price']");
        this.categoryDd = page.locator("//select[@name='category']");
        this.updateBtn = page.locator("(//button[@type='submit'])[1]");
        this.backBtn = page.getByRole("button", { name: "Back" });
        this.detailsbtn = page.locator("(//a[@class='btn btn-primary bg-gradient-primary dropdown no-arrow'])[1]")
        this.editbtn = page.locator("(//a[contains(.,'Edit')])[1]")
    }
    async editProduct(category) {
    await this.detailsbtn.click();
    await this.editbtn.click();
    await this.categoryDd.selectOption({ label: category });
     const dialogPromise = this.page.waitForEvent("dialog");
    await this.updateBtn.click();
    const dialog = await dialogPromise;
    console.log(dialog.message());
        await dialog.accept();
}
//     async editProduct(category) {
//         await this.detailsbtn.click();
//         await this.editbtn.click();
//         await this.categoryDd.selectOption({ label: category });
        
//         await this.updateBtn.click();
//         this.page.on("dialog", async (dialog1) => {
//         console.log(dialog1.message());
//         await dialog1.accept();
//     })
// }
    async verifyUpdateMessage() {
        await expect(this.page.locator("body"))
            .toContainText("Successfully Updated");
    }
}