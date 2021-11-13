const Contenedor = require("/home/samanta/Curso Backend/index.js");

const stock = new Contenedor("productos");

const express = require("express");

const app = express();

app.set("views", "../views");
app.set("view engine", "pug");

app.get("/", async (req, res) => {
  const productos = await stock.getAll();
  res.render("contenido.pug", { productsList: productos });
});
const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
