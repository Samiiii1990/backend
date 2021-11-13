const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());

app.listen(8080, function () {
  console.log("CORS-enabled web server listening on port 8080");
});



const handlebars = require("express-handlebars");
const Contenedor = require("/home/samanta/Curso Backend/index.js");

const stock = new Contenedor("productos");
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/views/layouts",
    layoutsDir: __dirname + "/views/partials/",
  })
);

app.set("view engine", "hbs");
app.set("views", "/views");
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const productos = await stock.getAll();
  res.render("main", { suggestedChamps: productos, listExists: true });
  res.send(productos);
});
