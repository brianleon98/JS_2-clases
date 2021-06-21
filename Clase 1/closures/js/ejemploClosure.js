(function OperacionSumaResta(a, b, c) {
    console.log(`valores a sumar ${a} ${b} y su resultado se restara con ${c}`)
    return function() {
        resultadoSuma = a + b;
        return function() {
            console.log(``);
        }
    }
}(4, 2, 6))