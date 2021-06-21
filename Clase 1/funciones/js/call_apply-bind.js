this.lugar = "Contento Glabal";

function saludar(saludar, aquien) {
    console.log(`${saludar} ${aquien} desde el ${this.lugar}`);
}
saludar("Q mas pues", "german");
const obj = {
    lugar: "Contesto objeto"
}

saludar.call(obj, "hola carlos", "Manizales");
saludar.call(null, "hola carlos", "Manizales");
saludar.call(this, "hola carlos", "Manizales");
saludar.apply(obj, ["hola JUlian", "q le importa"]);
saludar.apply(null, ["hola JUlian", "q le importa"]);
saludar.apply(this, ["hola JUlian", "q le importa"]);
this.nombre = "Pedro";
const persona = {
    nombre: "Jon",
    saludar: function() {
        console.log(`Hola ${this.nombre}`);

    }
}
persona.saludar();
const otraPersona = {
    saludar: persona.saludar.bind(this)
}
otraPersona.saludar();