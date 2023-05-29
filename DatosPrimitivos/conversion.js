// Para solicitar al usuario que ingrese el número que quiera, usando la funcion prompt() 
// que devuelve el valor ingresado por el usuario como una cadena de texto 
var numeroTexto = prompt("Ingrese un número:");
// Usando la funcion parseFloat() convertimos la cadena de texto a tipo de dato numérico
var numero = parseFloat(numeroTexto);
// Realizamos a operacion matematica que deseemos con el numero ingresado
var resultado = numero * 15;
// Mostrar el resultado
console.log("El resultado es: " + resultado);
