/* El ENDPOINT de la API */
let url ='https://randomuser.me/api/';

/* Caputando elementos del DOM */
let telefono = document.querySelector(".telefono");
let fotoPerfil = document.querySelector(".fotoPerfil");
let fotoPerfil2 = document.querySelector(".fotoPerfil2")

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.results[0]);
    let persona = data.results[0]
    telefono.innerText= persona.cell;
    fotoPerfil.src = persona.picture.large;
    fotoPerfil2.src = perosna.picture.thumbnail;
        
   
})
.catch(function(errors){
    console.log(errors);
});


