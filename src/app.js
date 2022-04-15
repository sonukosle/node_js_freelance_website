const express = require("express");

const mongoose = require("mongoose");

const hbs = require("hbs");

const app = express();

const routes = require("./routes/main");
const Detail = require("./models/Detail");

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
hbs.registerPartials("views/partials");

//db connection
mongoose.connect("mongodb://localhost/website_freelance", () => {
  console.log("db conected");

  // Detail.create({
  //   brandName: "Info Technical Solution",
  //   brandIconUrl:
  //     "https://t4.ftcdn.net/jpg/03/28/54/21/360_F_328542178_YotgB5sGePl9SzsChnn66W4xVMCvC3hb.jpg",
  //   links: [
  //     {
  //       label: "Home",
  //       url: "/"
  //     },
  //     {
  //     label: "Servicess",
  //     url: "/services",
  //     },
  //     {
  //     label: "Gallary",
  //     url: "/gallary",
  //     },
  //     {
  //     label: "About",
  //     url: "/about",
  //     },
  //     {
  //     label: "Contact Us",
  //     url: "/contact-us",
  //     }
  //   ]
  // });
});

app.listen(process.env.PORT | 5656, () => {
  console.log("Server started..");
});
