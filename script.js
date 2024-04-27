//Arreglo que contiene las respestas correctas
let correctas = [1,2,3,1,2,3,1];

let opcionElegida = [];
let cantidadCorrectas = 0;

function respuesta(numPregunta, sellecionada){
    opcionElegida[numPregunta] = sellecionada.value;

    id = "p" + numPregunta;

    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor + "white";
    labels[1].style.backgroundColor + "white";

    sellecionada.parentNode.style.backgroundColor = "#cec0fc";   
}

function corregir(){
    cantidadCorrectas = 0;
    
    for(i=0; i<correctas.length;i++){
        if(correctas[i] == opcionElegida[i]){
            cantidadCorrectas++;
        }
    }

    document.getElementById("resultado").innerHTML = cantidadCorrectas;
}
