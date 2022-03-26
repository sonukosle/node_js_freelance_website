const express = require("express");

const mongoose = require('mongoose');

const hbs = require('hbs')

const app = express();

const routes = require("./routes/main");

// app.get('/', (req,res)=>{

//     res.send("this data from server this is second line of server response");
// });

// this is basically called middileware

// we want to access static files - /static/css/style.css
app.use("/static", express.static("public"));
app.use("", routes);

//(template engine(hbs))
app.set("view engine", "hbs");
app.set("views", "views");

//using partials
hbs.registerPartials("views/partials")

//db connection 
mongoose.connect("mongodb://localhost/website_freelance",()=>{
    console.log("db conected");
});


app.listen(process.env.PORT | 5656, () => {
  console.log("Server started..");
});
