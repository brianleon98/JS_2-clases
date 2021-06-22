function Sumador(x) {
    return function(y) {
        return x + y;
    };
}

var suma5 = Sumador(5); //sele da un valor para almacenar 
var suma10 = Sumador(10);
console.log(suma5(2)); // sele da segunso valor a sumae
console.log(suma10(2)); // muestra 12
//==== 2
function mensaje(nombre) {
    var msg = 'hola';
    var respuesta = function() { alert(msg + ' ' + nombre); }
    respuesta()
}

function ejemplo() { mensaje('Juan'); }
ejemplo();
//==== 3
function CrearContador() {
    var contador = 0;
    return function incrementar() {
        contador = contador + 1;
        return contador;
    };
}
var contador = CrearContador();
console.log(contador());

//===== 4

function operaciones(a, b) {
    var suma = function() {
        return a + b;
    }
    var resta = function() {
        return a - b;
    }
    var multiplicacion = function() {
        return a + b;
    }
    var division = function() {
        return a + b;
    }
    return suma() + resta() + multiplicacion() + division(); // el resultado de las demas operaciones sera una suma de cada una
}
console.log("Resultado Operaciones suma", operaciones(2, 5));
//====== 5
var persona = {
    nombre: "andres",
    edad: 21,
    pais: "mexico"
}

function mostrarTexto({ nombre, edad, pais }) { //parametros obtenidos por medio, destructuracion de objetos 
    var texto = function() {
        return `${nombre} tiene una edad de ${edad} años y es de ${pais}`;
    }
    return texto();
}
document.write(mostrarTexto(persona));
// === 6

function separarPalabrasLetras() {
    var palabra = "BARRANQUILLA";
    var letras = function() {

        return palabra.split("");
    }
    return letras();
}
console.log("Separación", separarPalabrasLetras());
//============= 7
function PrimeraLetraNombre(name) {
    var nombre = function() {
        return name.charAt(); //parametro vacio toma por fecto la posicion 0
    };
    console.log("Primer letra de la palabra " + name + " es " + nombre());
}
PrimeraLetraNombre("Pablo");
//============== 8
function RemplazarT(nuevoT) { //palabra a cambiar por parametro
    var contenido = "La vaca Lola"; //ctexto antiguo
    var nuevoContenido = function() {
        return contenido.replace("vaca", nuevoT); //recibe palabra a cambiar y nueva palabra
    };
    console.log(`Contenido antiguo: ${contenido}`, `Nuevo contenido: ${nuevoContenido()}`)
}
RemplazarT("Perro");
//==================== 9