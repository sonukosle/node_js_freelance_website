const express = require("express");
const async = require("hbs/lib/async");

const routes = express.Router();
const Detail = require("../models/Detail");
const slider = require("../models/slider");

// first page route
routes.get("/", async (req, res) => {
  // res.send("This is message from routes");
  const details = await Detail.findOne({"_id":"625969b5b989961029589519" })
  const sliders=await slider.find();
  // console.log(details);
  // console.log(sliders);
  res.render("index",{
    // we are rendring here model js file data
    details: details,
    sliders: sliders
  },);
  
});

//second routes
routes.get("/gallary",async(req, res) => {
  const details = await Detail.findOne({"_id":"625969b5b989961029589519" })
  // res.send("Gallary");
  res.render("gallary",{
    details: details
  });
});

module.exports = routes;
