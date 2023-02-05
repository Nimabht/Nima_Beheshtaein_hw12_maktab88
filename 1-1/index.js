//Using mailtrap service
const nodemailer = require("nodemailer");
require("dotenv").config();

//Using async code is essential when dealing with I/O operations
const sendMail = async (mailOption) => {
  const EMAIL_USER = process.env.EMAIL_USER;
  const EMAIL_PASS = process.env.EMAIL_PASS;
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });
  transport
    .sendMail(mailOption)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//example:
const mailOption = {
  from: "nimabeheshtaein99@gmail.com",
  to: "nima.maktab88@gmail.com",
  subject: "Test " + new Date().toUTCString(),
  text: "This is a testing email using Nodejs!",
};
sendMail(mailOption);
