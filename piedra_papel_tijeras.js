const Piedra = "piedra";
const Papel = "papel";
const Tijeras = "tijeras";

function valida_eleccion(eleccion, eleccion_maq){
    let resultado = "";
    switch (eleccion) {
        case Piedra:
            switch (eleccion_maq){
                case Papel:
                    resultado = eleccion+" pierde contra "+eleccion_maq;
                    break;
                case Tijeras:
                    resultado = eleccion+" gana contra "+eleccion_maq;
                    break;
                default:
                    resultado = "empate";
            }
            break;
        case Papel:
            switch (eleccion_maq) {
                case Tijeras:
                    resultado = eleccion+" pierde contra "+eleccion_maq;
                    break;
                case Piedra:
                    resultado = eleccion+" gana contra "+eleccion_maq;
                    break;
                default:
                    resultado = "empate";
            }
            break;
        case Tijeras:
            switch (eleccion_maq){
                case Piedra:
                    resultado = eleccion+" pierde contra "+eleccion_maq;
                    break;
                case Papel:
                    resultado = eleccion+" gana contra "+eleccion_maq;
                    break;
                default:
                    resultado = "empate";
            }
            break;
        default:
            resultado = eleccion+" no es una elección valida.";
    }
    return resultado;
}

console.log(valida_eleccion(Papel,Tijeras));
console.log(valida_eleccion(Piedra,Tijeras));
console.log(valida_eleccion(Piedra,Papel));
console.log(valida_eleccion(Tijeras,Tijeras));