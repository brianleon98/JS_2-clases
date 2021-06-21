function makeColorPrinter(params) {
    let colorMessage = `El color es: ${params}`;
    return function() {
        console.log(colorMessage);
    }
}
let greenColorPrinter = makeColorPrinter("verde");
console.log(greenColorPrinter());