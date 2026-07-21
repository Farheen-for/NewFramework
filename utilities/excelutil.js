
import ExcelJS from "exceljs";
import path from "path";

export class ExcelUtils {
    static workbook = new ExcelJS.Workbook();

    static async loadExcel() {
        const filePath = path.resolve("./testdata/data.xlsx");

        console.log("Excel Path:", filePath);

        await this.workbook.xlsx.readFile(filePath);

        console.log("Worksheets:");
        console.log(this.workbook.worksheets.map(ws => ws.name));
    }

    static getCellData(sheetName, cellAddress) {
        const sheet = this.workbook.getWorksheet(sheetName);

        if (!sheet) {
            throw new Error(`Worksheet '${sheetName}' not found`);
        }

        return sheet.getCell(cellAddress).value;
    }
}