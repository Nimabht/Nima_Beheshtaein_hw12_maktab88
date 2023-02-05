const axios = require("axios");
const excel = require("excel4node");
const convertToExel = async () => {
  axios
    .get("https://reqres.in/api/users?page=1")
    .then((res) => {
      const jsonData = res.data.data;
      const workbook = new excel.Workbook();
      const worksheet = workbook.addWorksheet("sheet 1");
      const headingColumnNames = ["ID", "Email", "First name", "Last name", "Avatar URL"];
      //adjust email and url column width
      worksheet.column(2).setWidth(21);
      worksheet.column(5).setWidth(35);
      //Write Column Title in Excel file
      let headingColumnIndex = 1;
      headingColumnNames.forEach((heading) => {
        worksheet.cell(1, headingColumnIndex++).string(heading);
      });
      //Write Data in Excel file
      let rowIndex = 2;
      jsonData.forEach((record) => {
        let columnIndex = 1;
        Object.keys(record).forEach((columnName) => {
          worksheet.cell(rowIndex, columnIndex++).string(String(record[columnName]));
        });
        rowIndex++;
      });
      workbook.write("./data.xlsx");
    })
    .catch((error) => {
      console.log(error);
    });
};
convertToExel();
