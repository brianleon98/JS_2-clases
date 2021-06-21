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
function makeSizer(size) {
    return function() {
        document.body.style.fontSize = size + 'px';
    };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);