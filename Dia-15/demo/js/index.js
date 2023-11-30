const btn = document.querySelector(".btn")
const darkMode = document.querySelector(".btn-mode")
const body = document.querySelector ("body");

btn.addEventListener("click", function(e){
    this.style.background = 'white';
    this.style.color = 'black';
    this.innerText = 'Seguido';
});

darkMode.addEventListener("click",function(e){
    
    if (darkMode.innerText == 'modo oscuro') {
        /*pasarlo a oscuro*/
        body.style.backgroundColor = "#09174e";
        darkMode.innerText = 'Modo Claro'
    } else {
        /*pasarlo a claro*/
        body.style.backgroundColor = '#f7f8fc';
        darkMode.innerText = 'Modo Oscuro'
    }
})





/* claro #f7f8fc */
/* oscuro #09174e */