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

app.post("/api/productos", async (req, res) => {
  const newProduct = req.body;
  try {
    const productToAdd = await stock.save(newProduct);
    res.send(productToAdd);
  } catch (err) {
    console.log(err);
  }
});
app.get("/", async (req, res) => {
  console.log("sasasasasasasass")
  const productos = await stock.getAll();

      res.render("datos.hbs", { productsList: productos });
    
  
});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});