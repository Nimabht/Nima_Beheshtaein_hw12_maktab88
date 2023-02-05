const docxConverter = require("docx-pdf");

const convertPdfToWord = async (path) => {
  docxConverter(path, "./pdf.pdf", (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
};

convertPdfToWord("./word.docx");
