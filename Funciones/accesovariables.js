//Definimos una función que tiene una variable local
function mostrarVariables() {
//Declaramos una variable local dentro de la función
var variableLocal = "Mi nombre es Sebastian Local";
  //Declaramos una variable global
var variableGlobal = "Mi nombre es Sebastian Global";
//Mostramos el valor de la variable local dentro de la función
  console.log("Valor de la variable local dentro de la función: " + variableLocal);  
//Mostramos el valor de la variable global dentro de la función
  console.log("Valor de la variable global dentro de la función: " + variableGlobal);
}
//Llamamos a la función
mostrarVariables();
//Mostramos el valor de la variable global fuera de la función
console.log("Valor de la variable global fuera de la función: " + variableGlobal);


