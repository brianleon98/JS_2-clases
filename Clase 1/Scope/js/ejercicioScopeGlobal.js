var nombre = "Juan",
    apellido = "Torres";

function presentacion() {
    console.log(`Hola soy ${nombre} ${apellido}`);
}
presentacion();
//======================= 2

var numero = 20;

function incremento() {
    numero += 20; //incrementa por medio de una suma 20
    console.log("incremento", numero)
}
incremento();
/// ======================= 3
var juan = { // creacion de onjeto
    nombre: "Juan",
    apellido: "Perez",
    edad: 24
}
console.log("El obleto creado es:", juan)
    /// =========== 4

function EsMayor(objeto) {
    if (objeto.edad >= 18) {
        console.log(`${objeto.nombre} es Mayor`);
    } else {
        console.log(`${objeto.nombre} es Menor`)
    }
}
EsMayor(juan); // esta funcion esta utilizando un objeto ya creado anteriormente
//======= 5

var numeroAleatorio = parseInt((Math.random() * 10)); //genera un numero aleatorio del 1 al 10
function EsPar() {
    if ((numeroAleatorio % 2) == 0) { // si es 0 es par sino impar
        return ("Es par");
    } else {
        return ("NO es par");
    }
}
console.log(`el numero ${numeroAleatorio} es ${EsPar()}`)
    // ==== 6
var resultadoDobleN;

function DobleNumeroAleatorio() {
    resultadoDobleN = numeroAleatorio * 2; // utiliza la variable ya creada anteriormente en la linea 36
}
DobleNumeroAleatorio();
console.log("numero doble de " + numeroAleatorio + " es " + resultadoDobleN);
//===== 7
console.log("Nombre Mayusculas", nombre.toUpperCase(), apellido.toUpperCase());
////==============8

console.log("primera letra del nombre ", juan.nombre.charAt(0));
///================ 9
var lista = ["Arroz", "Limon", "Papa", "tomate"];

for (var producto of lista) {
    console.log(producto);
}
///// ===== 10
var ladoTamañoCuadrado = 5;

function perimetroCuatrodo(lado) {
    console.log(`El perimetro del cuadrado es: ${lado *4} cm`)
}
perimetroCuatrodo(ladoTamañoCuadrado);