const Contenedor = require("./index");

const stock = new Contenedor("productos");

const test = async () => {
    console.log(await stock.getAll());
  //   console.log(
  //     await stock.save({
  //       title: "Remera",
  //       price: "500",
  //       thumbnail:
  //         "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.teesfactory.com.ar%2Fproductos%2Fremera-mujer-manga-corta%2F&psig=AOvVaw1AJbpU16B3gC_rIK9fllqe&ust=1633876239658000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJi8mrrFvfMCFQAAAAAdAAAAABAD",
  //     })
  //   );
  //   console.log(await stock.getAll());
  //   console.log(await stock.getById(1))
  //   console.log(await stock.deleteById(1));
  //   console.log(await stock.getAll());
    // console.log(await stock.deleteAll());
  //   console.log(await stock.getAll());
};

test();
