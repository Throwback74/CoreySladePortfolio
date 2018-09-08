//Placeholder
var db = require("../models");

module.exports = function(app) {


app.post("/api/contact/create", function(req, res) {
  if (!req.user) {
    res.json("/loggedin");
  }
  else {
    console.log(req.body);
    var contactNum = parseInt(req.body.phone_number);
    db.Phonebook.create({
      contact_name: req.body.contact_name,
      phone_number: contactNum,
      notes: req.body.notes,
      UserId: req.user.id
    }).then(function(dbPhonebook) {
      console.log(dbPhonebook);
      // res.json("/create_contact");
      res.redirect("/create_contact");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  }
});
}