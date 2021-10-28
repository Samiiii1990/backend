const express = require("express");

const app = express();

const PORT = 8080;

const { Router } = express;

const router = new Router();

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

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

router.post("/api/productos", async (req, res) => {
  console.log("🚀 ~ file: servidor.js ~ line 57 ~ router.post ~ req", res)
  const error = "producto no encontrado";
  const newProduct = {
    title: "Lapiz",
    price: 110.5,
    thumbnail:
      "https://cdn4.iconfinder.com/data/icons/48-bubbles/48/15.Pencil-512.png",
  };
  try {
    const productToAdd = await stock.save(newProduct);

    if (!productToAdd) return error;

    res.send(productToAdd);
  } catch (err) {
    console.log(err);
  }
});
router.put("/api/productos/:id", async (req, res) => {
  const { id } = req.params;
  const error = "producto no encontrado";
  const editedProduct = {
    title: "Globo Terráqueo",
    price: 500,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
  };
  try {
    let productToEdit = await stock.getById(parseInt(id));

    productToEdit = await stock.save(editedProduct);

    if (!productToEdit) return error;

    res.send(productToEdit);
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

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

server.on("error", (error) => console.log(`Error en servidor ${error}`));
