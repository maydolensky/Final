/* alert */
alert ("hola desde la consola")

alert('saludos')

/* prompt     */

let nombre = prompt ('cual es tu nombre?');
alert ('El nombre que escribiste es: ' + nombre) 
/* console.log(nombre); */



/* confirm */

/* let confirmacion = confirm ('hola ' + nombre + 'quieres continuar?') */

let confirmacion = confirm ("hola ${nombre}, quieres continuar?")


alert ('su respuesta fue ' + confirmacion)

