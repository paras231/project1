const express = require("express");
const app = express();
const port = 80;
const hbs = require("hbs");
const path = require("path");

const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath  = path.join(__dirname,"../templates/partials");

app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath);

app.get("/",(req,res)=>{
    res.render("index.hbs");
});

app.get("/about",(req,res)=>{
    res.render("about.hbs");
});


app.get("/gallery",(req,res)=>{
    res.render("gallery.hbs");
});

app.use(express.static(staticPath));

app.listen(port,()=>{
    console.log("listening the port at")
});