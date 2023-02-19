function calculoimc (cajatoraxica, medidapierna){

    return (((((cajatoraxica/0.7067) - medidapierna))/0.9156) - medidapierna)

}

function resultado (calculoimc) {
    if (calculoimc >= 30 && calculoimc < 60){
        return "Su felino tiene sobrepeso"
    }
    if(calculoimc >=20 && calculoimc < 30){
        return "Su felino tiene un peso normal"

    }

    if (calculoimc >=1 && calculoimc <20){
        return "Su felino está bajo de peso"
    }

    else {
        return "Revise los números ingresados"
    }
}


let rta ="";

while (rta != "ESC") {
    cajatoraxica = Number (prompt("Ingrese las medidas en cm de la caja toráxica de su felino"))
    medidapierna = Number (prompt("Ingrese la medida en cm de la pierna de su felino (LIM)"))

    let resultfinal = calculoimc (cajatoraxica, medidapierna)
    console.log(resultado(resultfinal))
    
    alert("El IMC de su gato es : " + resultfinal)
    
    
    rta = prompt ("Ingrese \"ESC\" para finalizar la operación o cualquier otro caracter para modificar sus datos.")
}

