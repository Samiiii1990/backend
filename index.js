// class Usuario {
//     constructor(nombre, apellido, libros, mascotas) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.libros = libros;
//         this.mascotas = mascotas;
//     }

//     getFullName() {
//         return console.log(`Nombre Completo: ${this.nombre} ${this.apellido}`);
//     }
//     addMascota(mascota) {
//         this.mascotas.push(mascota);
//         console.log("Mascotas: ")
//         this.mascotas.forEach(mascota => {
//             console.log(`${mascota}`);

//         });
//     }
//     countMascota() {
//         this.mascotas.length;
//         console.log(`Cantidad de Mascotas : ${this.mascotas.length}`);
//     }
//     addBook(nombre, autor) {
//         this.libros.push({ nombre: nombre, autor: autor });
//     }
//     getBooksNames() {
//         console.log("Libros: ")
//         this.libros.forEach(libro => {
//             return console.log(` ${libro.nombre}`);

//         });

//     }
// }

// const yo = new Usuario(
//     "Samanta",
//     "Hermana",
//     [
//         { nombre: "Harry Potter", autor: "J. K. Rowling" },
//         { nombre: "El señor de los Anillos", autor: "J. R. R. Tolkien" },
//     ],
//     ["Dogui", "Negro"]
//     );

//     yo.getFullName();
//     yo.addMascota("Chiquito");
//     yo.countMascota();
//     yo.addBook("Mi Planta Naranja Lima", "José Mauro de Vasconcelos");
//     yo.getBooksNames();

// ----- Segundo Desafío -----

const fs = require("fs");
class Contenedor {
  constructor(path) {
    this.path = path;
  }

  async getAll() {
    try {
      const contenido = await fs.promises.readFile(this.path, "utf-8");

      return JSON.parse(contenido);
    } catch (error) {
      await fs.promises.writeFile(this.path, JSON.stringify([], null, 2));
      const contenido = await fs.promises.readFile(this.path, "utf-8");
      return JSON.parse(contenido);
    }
  }

  async save(object) {
    const productos = await this.getAll();
    productos.push(object);
    productos.forEach((item, i) => {
        item.id = i + 1;
      });
      
    try {
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(productos, null, 2)
      );
    } catch (err) {
      console.log("error >>", err);
    }
  }

  async getById(id) {
    const productos = await this.getAll();

    const productById = productos.find((p) => p.id === id);

    return productById;
  }
  async deleteById(id) {
    const productos = await this.getAll();

    for(var i = 0; i < productos.length; i++) {
        if(productos[i].id == id) {
            productos.splice(i, 1);
            break;
        }
    }
return productos;
  }

  async deleteAll() {
    return await fs.promises.writeFile(this.path, JSON.stringify([], null, 2));
  }
}

module.exports = Contenedor;
