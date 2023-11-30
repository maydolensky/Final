
/* inicio ; condicion ; */
for (let i = 0; i < 15; i++){
    /* lo que quiero que se ejecute */

   /* console.log('vuelta numero: ' + i); */
}

const listaProfes = document.querySelector('#listaProfes');

const arrayProfes = ["Luis", "Pedro", "Martin" ,"Facu", "lila"];

for (let i = 0; i < arrayProfes.length; i++ ){
    listaProfes.innerHTML += `<li> Profe: ${arrayProfes[i]} numero #${i + 1}</li>`


};



