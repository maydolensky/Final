let num = prompt("ingrese un numero")

if (num>0) {
    respuesta.innerText = "El numero " + num + " es positivo"
} else if (num==0){
    respuesta.innerText = "El numero " + num + " es cero"
} else {
    respuesta.innerText = "El numero " + num + " es negativo"
}