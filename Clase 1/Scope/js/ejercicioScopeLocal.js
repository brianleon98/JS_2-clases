function Saludar() {
    var nombre = 'Juan';
    console.log(`Hola ${nombre} como estas`);
};
Saludar();
//================ 2
function votar() {
    var edad = 12;
    if (edad >= 18) { //evalua si es menor de edad o no para votar
        console.log('Puedes Votar');
    } else {
        console.log('No puedes Votar eres menor');
    }
}
votar();
//================ 3
function suma() {
    var a = 123;
    var b = 523;
    document.write("LA suma es: " + (a + b));
}
suma();
////============ 4
function clima() {

    pronostico = "El clima de hoy es nublado";
    document.write(pronostico);
}
clima();
/// tarea 10 ejemplo de scope local y 10 de global
//// ==== 5
function crearAuto(marca, modelo, año) {
    var auto = { // variable tipo objeto
        marca: marca,
        modelo: modelo,
        año: año
    }
    return auto; //retorna el objeto crado para ser mostrado o almacenado en una variable
}
console.log(crearAuto('Toyota', 'XTW12', 2021));
//====================== 6
function multiplosTres(cantidad) {
    var numero = 3;
    for (var i = 0; i < cantidad; i++) {
        console.log(numero);
        numero *= 3; //variable de acomulacion multiplicando por tres para optener sus multiplos
    }
}
multiplosTres(10);
//============== 7

function descripcion() {
    var nombre = "Pablo", // ejemplo de creación
        edad = 12,
        ciudad = "Medellin",
        estadoCivil = "Soltero";
    document.write(`<br>${nombre} tiene ${edad} años vive en ${ciudad} y es ${estadoCivil}`)
}
document.write(descripcion());
//======== 8
function Notas() {
    var estudiante = ["Juan", "Andres", "Anderson"];
    var notas = [4.5, 3.0, 2.1];

    for (var i = 0; i < estudiante.length; i++) {
        console.log(`${estudiante[i]} su nota es ${notas[i]}`);
    }
}
Notas();
//======== 9

(function numeroPar() {
    var numero = 93;
    var EsPar = numero % 2;
    EsPar == 0 ? console.log("Es par") : console.log("No es par");

}())
//====== 10
function NumeroRandom() {
    var numero = Math.random() * 100; //nomeros aleatorios del 0 al 100
    console.log(`El numero Aleatorio Es: ${parseInt(numero)}`);
}
NumeroRandom();