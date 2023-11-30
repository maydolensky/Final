const abracadabra = document.querySelector("#abracadabra")
const titular = document.querySelector ("#titular")
abracadabra.addEventListener("click",function(e){
   let nombre =  prompt ("ingrese su nombre")
    titular.innerText = "Hi I'm " + nombre
})


const get = document.querySelector ("#get")
const colore = document.querySelector (".parrafo-color")

get.addEventListener ("dblclick",function(e){
    colore.style.color = colorAlAzar();
})
function colorAlAzar (){
let colores = ["blue","red","green","black","white"];
let elemento= colores[Math.floor(Math.random()*4)];
return elemento 
}


const chat = document.querySelector ("#chat")
const chath3  = document.querySelector ("#chath3")
const camara  = document.querySelector ("#camara")
const camarah3  = document.querySelector ("#camarah3")
const like  = document.querySelector ("#like")
const likeh3 = document.querySelector ("#likeh3")



chat.addEventListener ("click", function(e){
    alert ("Clickeaste sobre " + chath3.innerText )
})

camara.addEventListener ("click", function(e){
    alert ("Clickeaste sobre " + camarah3.innerText )
})

like.addEventListener ("click", function(e){
    alert ("Clickeaste sobre " + likeh3.innerText )
})

const see = document.querySelector("#see")
const parrafosee = document.querySelector("#parrafosee")

see.addEventListener("mouseover",function(e){
   parrafosee.style.color  = colorAlAzar ()
})
see.addEventListener("mouseout",function(e){
    parrafosee.style.color = "#888"
})

const lechuza = document.querySelector ("#lechuza")
lechuza.addEventListener ("click", function(e){
    alert ("buh...buh..")
})

window.addEventListener("keydown",function(e){
   
    if (e.key == " ") {
        alert ("presionaste la barra espaciadora ")
    }
})

