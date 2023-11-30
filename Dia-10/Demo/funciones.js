/*funciones declaradas*/
function saludar (nombre,apellido,edad){
    let concatenar = "Hola,mi nombre es " + nombre + " " + apellido +" "+  "y tengo "  + edad + " " + "años"; 
    return concatenar ;
};
let imprimir = saludar( "lila", "yasuff", 18);
console.log(imprimir);


/*funciones expresadas*/
let despedirse = function(nombre){
    return "Chau " + nombre;
};

let imprimir2 = despedirse ( "Lila");
console.log(imprimir2);

console.log(concatenar);