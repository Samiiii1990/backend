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
  console.log("🚀 ~ file: servidor.js ~ line 45 ~ router.get ~ req", req.params)
  const {id} = req.params.id;

  const productById = await stock.getById(id);

  const error = "producto no encontrado";

  if (!productById) return error;

  res.send(productById);
});

router.post("/api/productos", async (req, res) => {
  const newProduct = {
    title: "Lapiz",
    price: 110.5,
    thumbnail:
      "https://cdn4.iconfinder.com/data/icons/48-bubbles/48/15.Pencil-512.png",
  };
  const productToAdd = await stock.save(newProduct);

  const error = "producto no encontrado";

  if (!productToAdd) return error;

  res.send(productToAdd);
});
router.put("/api/productos/:id", async (req, res) => {
  const {id} = req.params.id;
  let productToEdit = await stock.getById(id);
  const editedProduct = {
    title: "Lapiz",
    price: 80,
    thumbnail:
      "https://cdn4.iconfinder.com/data/icons/48-bubbles/48/15.Pencil-512.png",
  };

  productToEdit = await stock.save(editedProduct);

  const error = "producto no encontrado";

  if (!productToEdit) return error;

  res.send(productToEdit);
});
router.delete("/api/productos/:id", async (req, res) => {
  const id = req.params.id;
  const productToDelete = await deleteById(id);

  const error = "producto no encontrado";

  if (!productToDelete) return error;

  res.send(productToDelete);
});


app.use("/", router);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

server.on("error", (error) => console.log(`Error en servidor ${error}`));
