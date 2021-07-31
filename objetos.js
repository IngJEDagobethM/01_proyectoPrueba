function Auto (marca, modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
}

function indice_aleatorio (tope) {
    return Math.floor(Math.random()*(tope+1))
}

const marcas = [
    "Toyota",
    "Chevrolet",
    "Renault",
    "Kia",
    "Dodge",
    "Hyundai"
];

const modelos = [
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
    2021
];

const colores = [
    "Rojo",
    "Blanco",
    "Negro",
    "Amarillo",
    "Azul",
    "Plateado",
    "Gris"
];

let num_autos_a_generar = 30;
let array_autos = [];
let i;
for (i = 0; i < num_autos_a_generar; i++) {
    array_autos[i] = new Auto(marcas[indice_aleatorio(marcas.length-1)],modelos[indice_aleatorio(modelos.length-1)],colores[indice_aleatorio(colores.length-1)]);
}

for (i = 0; i < array_autos.length; i++) {
    console.log("Auto #"+(i+1)+": Marca "+array_autos[i].marca+", Modelo "+array_autos[i].modelo+", Color "+array_autos[i].color);
}