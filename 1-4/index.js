const sharp = require("sharp");

const convertToJPEG = async (path) => {
  sharp(path)
    .resize(500, 500)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile("output.jpeg", (err, info) => {
      if (err) throw err;
      console.log("Image converted successfully");
    });
};
convertToJPEG("png.png");
