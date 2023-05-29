//Declaramos una variable en el ámbito global
var variable = "Mi nombre es Sebastian Global";
//Definimos una función que tiene una variable con el mismo nombre
function mostrarVariables() {
//Declaramos una variable en el ámbito de la función con el mismo nombre
  var variable = "Mi nombre es Sebastian Local";
//Mostramos el valor de la variable local dentro de la función
  console.log("Valor de la variable local dentro de la función: " + variable);
}
//Mostramos el valor de la variable global
console.log("Valor de la variable global: " + variable);
//Llamamos a la función
mostrarVariables();
