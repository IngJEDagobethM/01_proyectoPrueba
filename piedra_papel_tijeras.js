const Piedra = "piedra";
const Papel = "papel";
const Tijeras = "tijeras";

function valida_eleccion(eleccion, eleccion_maq){
    let resultado = "";
    if (eleccion == eleccion_maq){
        resultado = "empate";
    }else{
        switch (eleccion) {
            case Piedra:
                resultado = eleccion_maq == Tijeras ? eleccion+" gana contra "+eleccion_maq : eleccion+" pierde contra "+eleccion_maq;
                break;
            case Papel:
                resultado = eleccion_maq == Piedra ? eleccion+" gana contra "+eleccion_maq : eleccion+" pierde contra "+eleccion_maq;
                break;
            case Tijeras:
                resultado = eleccion_maq == Papel ? eleccion+" gana contra "+eleccion_maq : eleccion+" pierde contra "+eleccion_maq;
                break;
            default:
                resultado = eleccion+" no es una elección valida.";
        }
    }
    return resultado;
}

console.log(valida_eleccion(Papel,Tijeras));
console.log(valida_eleccion(Piedra,Tijeras));
console.log(valida_eleccion(Piedra,Papel));
console.log(valida_eleccion(Tijeras,Tijeras));