function MayoriaEdad() {
    if (this.edad >= 18) {
        console.log(`${this.nombre} es mayor de Edad`);
    } else {
        console.log(`${this.nombre} es menor de Edad`);

    }
}
var andres = {
    nombre: "Andres",
    edad: 21,
    decir: function() {
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de Edad`);
        } else {
            console.log(`${this.nombre} es menor de Edad`);

        }
    }
}
var persona = {
    nombre: "Lucho",

}
MayoriaEdad.call(andres);
MayoriaEdad.apply(persona, [12]);

var juan = {
    nombre: "JUan",
    edad: 18,
    decir: andres.decir.bind(this)
}
juan.decir();