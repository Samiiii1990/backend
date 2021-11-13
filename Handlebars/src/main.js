const Contenedor = require("/home/samanta/Curso Backend/index.js");

const stock = new Contenedor("productos");
const express = require("express");
const app = express();

const exphbs = require("express-handlebars");
var cors = require("cors");

app.use(cors());

app.listen(8080, function () {
  console.log("CORS-enabled web server listening on port 8080");
});

app.engine(
  "hbs",
  exphbs({
    extname: ".hbs",
    defaultLayout: "index.hbs",
  })
);

app.set("views", "../views");

app.get("/", async (req, res) => {
  const productos = await stock.getAll();

      res.render("datos.hbs", { productsList: productos });
    
  
});
