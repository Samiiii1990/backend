const express = require("express");

const app = express();

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
function randomProduct(min, max) {
  const number = Math.floor(Math.random() * (max - min + 1) + min);

  return number;
}

const Contenedor = require("./index");

const stock = new Contenedor("productos");

app.get("/productos", async (req, res) => {
  const productos = await stock.getAll();
  res.send(productos);
});

app.get("/productoRandom", async (req, res) => {
  const productos = await stock.getAll();
  const random = randomProduct(1, productos.length);
  const productRandom = await stock.getById(random);
  res.send(productRandom);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));
