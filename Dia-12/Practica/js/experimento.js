let nombre = prompt ("ingrese su nombre")
console.log(nombre);

let edad = prompt('engrese su edad')
console.log(edad);

let fanDeportes = confirm ("te gustan los deportes?")
console.log(fanDeportes);

alert ("Muchas gracias " + nombre + " por responder nuestras preguntas")

let usuario = {
    nombre : 
    edad: 
    fanDeportes: 
    deportistaProfesional : function (datos) {
        if (fanDeportes==true){
            return "si, soy fan de los deportes "
        } else {
            return 'no soy tan fan aun de los deportes'
        }

    }

};