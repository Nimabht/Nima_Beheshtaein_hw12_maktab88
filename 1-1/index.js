//Using mailtrap service
const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = async () => {
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
  const mailOption = {
    from: "nimabeheshtaein99@gmail.com",
    to: "nima.maktab88@gmail.com",
    subject: "Test " + new Date().toUTCString(),
    text: "This is a testing email using Nodejs!",
  };
  transport
    .sendMail(mailOption)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

sendMail();
