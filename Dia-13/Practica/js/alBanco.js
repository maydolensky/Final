let dia = prompt("ingrese un dia de la semana")
let hora = prompt ("ingrese la hora")


if ((dia=="Lunes" || dia == "martes" || dia == "miercoles" ||dia == "jueves" || dia == "viernes") && hora >= 10 && hora <= 15) {
    respuesta.innerText = "Bien,todavia estamos a tiempo de llegar"
    
} else {
    respuesta.innerText = "Uf... No llegamos"
}