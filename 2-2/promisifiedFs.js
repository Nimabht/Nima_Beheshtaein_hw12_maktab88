const fs = require("fs");

const promisifiedReadFile = (file, encoding) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, encoding, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const promisifiedWriteFile = (file, data, encoding) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, encoding, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
module.exports = { promisifiedReadFile, promisifiedWriteFile };
