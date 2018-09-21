const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const nodeMailer = require("nodemailer");

router.post("/", function(req, res) {
  nodeMailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Number: ${req.body.phone}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;

    const transporter = nodeMailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "nik.art.vov.lor@gmail.com",
        pass: "deleanu3/1ap43"
      }
    });

    let mailOptions = {
      from: req.body.email,
      to: "nik.art.vov.lor@gmail.com",
      replyTo: `${req.body.email}`,
      subject: "New Message",
      text: req.body.message,
      html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log("Message sent: %s", info.message);
      console.log("Message URL: %s", nodeMailer.getTestMessageUrl(info));
    });
  });
});

module.exports = router;
