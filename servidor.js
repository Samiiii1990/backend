const express = require("express");
const bp = require("body-parser");

const app = express();
var cors = require("cors");
const PORT = 8080;

const { Router } = express;

const router = new Router();
app.use(cors());

app.listen(8080, function () {
  console.log("CORS-enabled web server listening on port 80");
});

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

const Contenedor = require("./index");

const stock = new Contenedor("productos");

//Tercer Desafío

// app.get("/api/productos", async (req, res) => {
//   const productos = await stock.getAll();
//   res.send(productos);
// });

// app.get("/productoRandom", async (req, res) => {
//   const productos = await stock.getAll();
//   const random = randomProduct(1, productos.length);
//   const productRandom = await stock.getById(random);
//   res.send(productRandom);
// });

//Cuarto Desafío

router.get("/api/productos", async (req, res) => {
  const productos = await stock.getAll();
  const error = "producto no encontrado";

  if (!productos) return error;

  res.send(productos);
});

router.get("/api/productos/:id", async (req, res) => {
  const error = "producto no encontrado";
  const { id } = req.params;
  try {
    const productById = await stock.getById(parseInt(id));
    res.send(productById);
    if (!productById) return error;
  } catch (err) {
    console.log(err);
  }
});

router.put("/api/productos/:id", async (req, res) => {
  const { id } = req.params;
  const editedProduct = req.body;

  try {
    let productToEdit = await stock.getById(parseInt(id));

    productToEdit = await stock.save(editedProduct);
    res.send(productToEdit);
  } catch (err) {
    console.log(err);
  }
});

router.post("/api/productos", async (req, res) => {
  const newProduct = req.body;
  try {
    const productToAdd = await stock.save(newProduct);
    res.send(productToAdd);
  } catch (err) {
    console.log(err);
  }
});
router.delete("/api/productos/:id", async (req, res) => {
  const { id } = req.params;
  const error = "producto no encontrado";
  try {
    const productToDelete = await stock.deleteById(parseInt(id));

    if (!productToDelete) return error;

    res.send(productToDelete);
  } catch (err) {
    console.log(err);
  }
});

app.use("/", router);

server.on("error", (error) => console.log(`Error en servidor ${error}`));
