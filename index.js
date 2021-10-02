class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    
    
    getFullName() {
        console.log(`Nombre Completo: ${this.nombre} ${this.apellido}`);
    }
    addMascota(mascota) {
        this.mascotas.push(mascota);
        console.log("Mascotas: ")
        this.mascotas.forEach(mascota => {
            console.log(`${mascota}`);
            
        });
    }
    countMascota() {
        this.mascotas.length;
        console.log(`Cantidad de Mascotas : ${this.mascotas.length}`);
    }
    addBook(nombre, autor) {
        this.libros.push({ nombre: nombre, autor: autor });
    }
    getBooksNames() {
        console.log("Libros: ")
        this.libros.forEach(libro => {
            console.log(` ${libro.nombre}`);
            
        });
        
        
    }
}

const yo = new Usuario(
    "Samanta",
    "Hermana",
    [
        { nombre: "Harry Potter", autor: "J. K. Rowling" },
        { nombre: "El señor de los Anillos", autor: "J. R. R. Tolkien" },
    ],
    ["Dogui", "Negro"]
    );
    

    yo.getFullName();
    yo.addMascota("Chiquito");
    yo.countMascota();
    yo.addBook("Mi Planta Naranja Lima", "José Mauro de Vasconcelos");
    yo.getBooksNames();
