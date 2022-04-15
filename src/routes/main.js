const express = require("express");
const async = require("hbs/lib/async");

const routes = express.Router();
const Detail = require("../models/Detail");

routes.get("/", async (req, res) => {
  // res.send("This is message from routes");

  const details = await Detail.findOne({"_id":"625969b5b989961029589519" })
  console.log(details);
  res.render("index");
});

//second routes

routes.get("/gallary", (req, res) => {
  // res.send("Gallary");
  res.render("gallary");
});

module.exports = routes;
