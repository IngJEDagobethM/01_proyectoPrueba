const Piedra = "piedra";
const Papel = "papel";
const Tijeras = "tijeras";

let eleccion = Papel;
let eleccion_maq = Tijeras;

if (eleccion == Piedra) {
    if (eleccion_maq == Papel){
        console.log(eleccion+" pierde contra "+eleccion_maq);
    }else if (eleccion_maq == Tijeras){
        console.log(eleccion+" gana contra "+eleccion_maq);
    }else{
        console.log("empate");
    }
}else if (eleccion == Papel){
    if (eleccion_maq == Tijeras){
        console.log(eleccion+" pierde contra "+eleccion_maq);
    }else if (eleccion_maq == Piedra){
        console.log(eleccion+" gana contra "+eleccion_maq);
    }else{
        console.log("empate");
    }
}else if (eleccion == Tijeras){
    if (eleccion_maq == Piedra){
        console.log(eleccion+" pierde contra "+eleccion_maq);
    }else if (eleccion_maq == Papel){
        console.log(eleccion+" gana contra "+eleccion_maq);
    }else{
        console.log("empate");
    }
}