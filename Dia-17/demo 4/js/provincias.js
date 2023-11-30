/* El ENDPOINT de la API */
let provincias = 'https://apis.datos.gob.ar/georef/api/provincias';

/* Caputando elementos del DOM */

let listaProvincia = document.querySelector(".listaProvincia");


fetch('https://apis.datos.gob.ar/georef/api/provincias')
.then(function(miRespuesta){
    return miRespuesta.json();
})
.then(function(miRespuesta){
    console.log(miRespuesta.provincias);
    let prov = miRespuesta.provincias;
    let contenido = "";
    
    for (let i = 0; i < prov.length; i++) {
        contenido+=`<li><a href="./detalleProvincia.html"> ${prov[i].nombre} </a></li> `
    }
    listaProvincia.innerHTML = contenido;
})
.catch(function(miError){
    console.log();
});
