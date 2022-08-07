const express = require("express");

const mongoose = require("mongoose");

const hbs = require("hbs");

const app = express();

const routes = require("./routes/main");
const Detail = require("./models/Detail");
const Slider = require("./models/slider");
const Service = require("./models/Service")
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

  // Service code

  // Service.create(
  //   [
  //     {
  //       icon: "fa-brands fa-accusoft service_icon",
  //       title: "Provide Best Courses",
  //       description: "we provide best courcess that helps student in placement and learning coding. ",
  //       linkText: "Check",
  //       link: "Support"
  //     }
  //   ]
  // );
  // Service code end




// slider images

// Slider.create([
//   {
//     title: "Learn java in very easy manner",
//     sub_title:"Java is one of the most populer programming language now a day's.",
//     image_url: "/static/images/img2.jpg"
   
//   },
//   {
//     title: "Learn Node js in very easy manner",
//     sub_title:"NodeJs is one of the most populer programming language now a day's.",
//     image_url: "/static/images/img2.jpg"
//   },
//   {
//     title: "Learn JavaScript in very easy manner",
//     sub_title:"JavaScript is one of the most populer programming language now a day's.",
//     image_url: "/static/images/img5.jpg"
//   }
// ]);



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
