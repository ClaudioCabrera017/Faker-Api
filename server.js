const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
const User = require("./class/User");
const Company = require("./class/Company");



// req is short for request
// res is short for response
app.get("/api/users/new", (req, res) => {
  res.json(new User());
});
app.get("/api/companies/new", (req, res) => {
  res.json(new Company());
});
app.get("/api/user/company", (req, res) => {
  res.json( { user: new User(), company: new Company() } );
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
