import { test,expect } from "../customefixture/pagefixture.js"
import { ExcelUtils } from "../utilities/excelutil.js";
test("Create Product", async ({page, managerpage }) => {
    await page.goto(process.env.BASEURL);
     await managerpage.loginpage.logintoapp(process.env.USN, process.env.PSWD)
    await ExcelUtils.loadExcel();
    const productCode = ExcelUtils.getCellData("Sheet1", "A2");
    const productName = ExcelUtils.getCellData("Sheet1", "B2");
    const description = ExcelUtils.getCellData("Sheet1", "C2");
    const quantity = ExcelUtils.getCellData("Sheet1", "D2");
    const onHand = ExcelUtils.getCellData("Sheet1", "E2");
    const price = ExcelUtils.getCellData("Sheet1", "F2");
    const category = ExcelUtils.getCellData("Sheet1", "G2");
    const supplier = ExcelUtils.getCellData("Sheet1", "H2");
    const date = ExcelUtils.getCellData("Sheet1", "I2").toString();
    await managerpage.productpage.addProduct(
        productCode,
        productName,
        description,
        quantity,
        onHand,
        price,
        category,
        supplier,
        date
    );

//  await managerpage.productpage.verifyProductPresent(productName);

});