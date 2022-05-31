"use strict"

let cadena = 'hola';
let cadena2 = '123\'Asi se pueden usar comillas simples\'456';
let cadena3 =  `Hola 4 más 5 es = ${4+5}`;
let nombre = "Ignacio";

let saludo = `Hola ${nombre}`; // template-literals
let saludo2 = 'Hola ' + nombre;

console.log(cadena);
console.log(cadena2);
console.log(cadena3);
console.log(saludo);
console.log(saludo2);
console.log(cadena.length);
console.log(cadena[2]); // = console.log(cadena.charAt(2));
//  "H" "o" "l" "a"
//    0    1   2    3
console.log(cadena.charAt(2));
console.log(cadena.repeat(3));
console.log(cadena.indexOf("o"));
console.log(cadena[cadena.indexOf("l")])
console.log(cadena.slice(1,2)); // [1, 2) --> o
console.log(cadena.slice(1,3));

const csv = "Hola, chau, adios, arriverderci";

let array = csv.split(",");

console.log (array);

// array es una coleccion de objetos.

console.log(csv.slice(5,8));
console.log(csv.substring(5,8));

// Slice y substring: Cosas en comun
// start == stop devuelvee "" string vacio
console.log(csv.slice(1,1));
console.log(csv.substring(1,1));
// Si no tiene stop
console.log(csv.slice(1));
console.log(csv.substring(1));

const str2 = "Hola, Juan";

console.log(str2.search("Juan"));
console.log(str2.replace("," , ":"));

const spacedstring = "  Hola    tengo   espacios    ";
console.log(spacedstring.trim());

const src = "Primer String";
const dst = "Segundo String";

console.log(src.concat(dst));
console.log(src + dst);
