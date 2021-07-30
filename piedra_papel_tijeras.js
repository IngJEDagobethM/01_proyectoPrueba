const Piedra = "piedra";
const Papel = "papel";
const Tijeras = "tijeras";

function valida_eleccion(eleccion, eleccion_maq){
    let resultado = "";
    if (eleccion == Piedra) {
        if (eleccion_maq == Papel){
            resultado = eleccion+" pierde contra "+eleccion_maq;
        }else if (eleccion_maq == Tijeras){
            resultado = eleccion+" gana contra "+eleccion_maq;
        }else{
            resultado = "empate";
        }
    }else if (eleccion == Papel){
        if (eleccion_maq == Tijeras){
            resultado = eleccion+" pierde contra "+eleccion_maq;
        }else if (eleccion_maq == Piedra){
            resultado = eleccion+" gana contra "+eleccion_maq;
        }else{
            resultado = "empate";
        }
    }else if (eleccion == Tijeras){
        if (eleccion_maq == Piedra){
            resultado = eleccion+" pierde contra "+eleccion_maq;
        }else if (eleccion_maq == Papel){
            resultado = eleccion+" gana contra "+eleccion_maq;
        }else{
            resultado = "empate";
        }
    }else {
        resultado = eleccion+" no es una elección valida.";
    }
    return resultado;
}

console.log(valida_eleccion(Papel,Tijeras));