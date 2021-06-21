function Animal(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Animal.prototype.decirEdadNombre = function() {
    console.log(`Mi nombre es ${this.nombre} y mi edad ${this.edad} años`)
}
var perro = new Animal("Toshi", 5);
perro.decirEdadNombre();

function Gato(nombre, edad, raza) {
    Animal.call(this, nombre, edad);
    this.raza = raza;
}

Gato.prototype = Object.create(Animal.prototype);

Gato.prototype.constructor = Gato;
var minino = new Gato("kira", 3, "Persa");
console.log(minino);