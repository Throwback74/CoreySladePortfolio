require("dotenv").config();
var db = require("../models");
const nodemailer = require('nodemailer');

module.exports = function(app) {


app.post("/api/email", function(req, res) {
    console.log(req.body);
    var email = req.body; 
    db.Message.create({
      name: email.name,
      email: email.email,
      website: email.website,
      subject: email.subject,
      message: email.message
    }).then(function(dbMessage) {
      console.log(dbMessage);
      res.redirect("/contact");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.USER,
        pass: process.env.PASS
      }
    });
    var subject;
    if(email.subject === null){
      subject = "Email from Portfolio Form";
    }else {
      subject = email.subject;
    }
    var mailOptions = {
      from: 'no_reply@journey_on-admin.com',
      to: 'corey.slade@gmail.com',
      subject: subject,
      html: `<h1>Message Sent from Email form on your Portfolio</h1>
      <p>Email sent by ${email.name}, their return email address is ${email.email}, their website is ${email.website}</p>
      <br><hr><br>
      <p>Message: ${email.message}</p>`
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        res.send(error);
      } else {
        res.send('Email sent: ' + info.response);
        console.log("success!");
      }
    });
});
}