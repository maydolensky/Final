const peliculas = [
    {
        id: 1,
        titulo: "titanic",
        fecha: "1997",
        portada: " https://i.blogs.es/4a9cb1/titanic/840_560.jpeg",

    },


    {
        id: 2,
        titulo: "rapidos y furiosos",
        fecha: "2010",
        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS79qAYE6p0qXMrfIPAQSemZyoYjPoTc3P8YQ&usqp=CAU"
    },

    {   
        id: 3,
        titulo: "cars",
        fecha: "2015",
        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS79qAYE6p0qXMrfIPAQSemZyoYjPoTc3P8YQ&usqp=CAU"
    },

]
 /* RECUPERAR EL ELEMENTO DEL DOM */
const listaPelis = document.querySelector("#listaPelis");
/*CICLO FOR PARA RECORRER EL ARRAY D EPELIS*/
for (let i = 0; i < peliculas.length; i++){
    /*elemento del DOM => le inserto los datos */
    listaPelis.innerHTML +=`<li>
                                 <article>
                                    <img src="${peliculas[i].portada}" alt="" width="100px">
                                    <h2>${peliculas[i].titulo}</h2>
                                    <h4>${peliculas[i].fecha}</h4>
                                    <a href="idPeliculas=>${peliculas[i].id} ">ver mas</a>
                                </article>
                            </li>`

                            /* template string */
}

