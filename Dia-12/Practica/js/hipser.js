let nacionalidad= prompt("ingrese su nacionalidad")
let profesion = prompt("cual es su profesion?")
let caminata = prompt ('cuantos km camina por dia')


function filosofohipser (nacionalidad,profesion, kmsrecorridos){
    if (nacionalidad==argentino && profesion==musico && caminata==2){
        return 'soy un filosofo hipser'
    } else{
        return 'aun no soy filoso hipser'
    }
    

}
console.log(filosofohipser);