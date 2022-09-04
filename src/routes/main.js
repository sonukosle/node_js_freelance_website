const express = require("express");
const async = require("hbs/lib/async");

const routes = express.Router();
const Detail = require("../models/Detail");
const slider = require("../models/slider");
const Service = require("../models/Service");
const Contact = require("../models/Contact");
const { response } = require("express");

// first page route
routes.get("/", async (req, res) => {
  // res.send("This is message from routes");
  const details = await Detail.findOne({ _id: "625969b5b989961029589519" });
  const sliders = await slider.find();
  // console.log(details);
  // console.log(sliders);
  const services = await Service.find();
  res.render("index", {
    // we are rendring here model js file data
    details: details,
    sliders: sliders,
    services: services,
  });
});

//second routes
routes.get("/gallary", async (req, res) => {
  const details = await Detail.findOne({ _id: "625969b5b989961029589519" });
  // res.send("Gallary");
  res.render("gallary", {
    details: details,
  });
});

// third routes for contact process contact form
routes.post("/process-contact-from", async (req, res) => {
  console.log("form submited..");
  console.log(req.body);

  // save the data to db

  try {
    const data = await Contact.create(req.body);
    console.log(data);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = routes;
