let persona = {
    nombre: "Lila",
    apellido: "Yasuff",
    edad: 18,
    saludar: function(otronombre){
        return "Hola " + ", mi nombre es Lila" + this.nombre + " " + this.apellido; 
         
    },
};

let respuesta = persona.saludar("Mili"); 

console.log(respuesta);