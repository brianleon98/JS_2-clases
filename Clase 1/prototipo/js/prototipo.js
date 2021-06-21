function Animal(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Animal.prototype.decirEdadNombre = function() {
    console.log(`Mi nombre es ${this.nombre} y mi edad ${this.edad} años`)
}
var perro = new Animal("Toshi", 5);
perro.decirEdadNombre();