// Importing libs
const express = require("express");
const bodyParser = require("body-parser");

// Ambient vars
const app = express();
const port = 3000;
const campgrounds = [
  { name: "Camping do Mazinho", image: "https://campingdomazinho.com.br/wp-content/uploads/2019/12/camping-mazinho-02.jpg" },
  { name: "Saltão Parque de Ecoturismo", image: "https://www.saltao.com.br/wp-content/uploads/2015/01/camping-saltao-2-876x357.jpg" }
];

// Tell express to use body parser
app.use(bodyParser.urlencoded({extended: true}));

// Set view engine
app.set("view engine", "ejs");

// Root path
app.get("/", function (req, res) {
  res.render("landing");
});

// Campgrounds path
app.get("/campgrounds", function (req, res) {
  res.render("campgrounds", { campgrounds: campgrounds });
});

// Post request to create new campground
app.post("/campgrounds", function (req, res) {
  // get data from form and add to campgrounds array
  let name = req.body.name;
  let image = req.body.image;
  let newCampground = { name: name, image: image };

  // redirect back to campgrounds page
  campgrounds.push(newCampground);

  res.redirect("/campgrounds");
});

// Form to create new campground
app.get("/campgrounds/new", function (req, res) {
  res.render("new");
});

// Start server
app.listen(port, function () {
  console.log(`Server started at http://localhost:${port}`);
});