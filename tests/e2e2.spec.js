import { test,expect } from "../customefixture/pagefixture.js"
import { ExcelUtils } from "../utilities/excelutil.js";  
import { RandomUtil } from "../utilities/randomutil.js";
test("Cp", async ({page, managerpage }) => {
  await page.goto(process.env.BASEURL);
  await managerpage.loginpage.logintoapp(process.env.USN, process.env.PSWD)
    await ExcelUtils.loadExcel();
    const first = ExcelUtils.getCellData("Sheet1","L3")
     const last = ExcelUtils.getCellData("Sheet1","M3")
    const random = RandomUtil.getRandomNumber();
    const firstName = `${first}${random}`;
    const lastName = `${last}${random}`;
    const customer = `${firstName} ${lastName}`;
    const productName = ExcelUtils.getCellData("Sheet1", "B2");
      const phone = ExcelUtils.getCellData("Sheet1","N2").toString();
       const cash = ExcelUtils.getCellData("Sheet1", "F2").toString();
      console.log(first,last)
     await managerpage.pospage.openPOS();
    await managerpage.pospage.addcustomer(firstName,lastName,phone)
    await managerpage.pospage.selectCustomer(customer,cash);
    await managerpage.pospage.completePayment();
     await page.goto(process.env.BASEURL);
    await managerpage.transactionpage.openTransaction();
    await managerpage.transactionpage.searchTransaction(customer);
    await managerpage.transactionpage.verifyTransactionPage();
    await managerpage.transactionpage.verifyCustomer(customer);
    await managerpage.transactionpage.verifyProduct(productName);
});