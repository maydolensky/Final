function rectangulo(altura,ancho){
    let area = (ancho * altura)
    return area
};
let imprimir = rectangulo(10,5);
console.log(imprimir);

/*punto 2*/

function triangulo (base,altura){
    let area2= (base * altura)/2
    return area2
};
let tria = triangulo(5,10);
console.log(tria);

/*punto 3*/
function largodelArray (array){
    let cuento= array.length;
    return cuento
};
let lista = largodelArray( ["tucuman", "pera", "manzana"])
console.log(lista);

/*punto 4*/
function cantidadDeLetras (palabra){
    let cant= palabra.length
    return cant
};
let pala = cantidadDeLetras("hola");
console.log(pala);

/*punto 5 */

function dolarhoy (precio){
    let dolar= precio*890
    return dolar
};
let dol = dolarhoy(50);
console.log(dol);

/*punto 6*/
function preciofinal (precio1){
    let precioi = precio1 + (precio1*1.21 )
    return precioi
};
let pre = preciofinal(50);
console.log(pre);

/*punto 7*/
function mitad (numero){
    let miti= numero/2
    return miti
};
let total = mitad(15);
console.log(total);


