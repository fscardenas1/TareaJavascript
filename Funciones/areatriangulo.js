//Utilizamos una función expresiva o función anónima para calcular el área de un triángulo
var calcularAreaTriangulo = function(base, altura) {
// Realizamos el cálculo del área del triángulo
    var area = (base * altura) / 2;  
// Devolvemos el resultado
    return area;
  };  
// Llamamos a la función y mostramos el resultado en la consola
  var baseTriangulo = 4.5;
  var alturaTriangulo = 9.7;
  var resultadoArea = calcularAreaTriangulo(baseTriangulo, alturaTriangulo);
  console.log("El área del triángulo es: " + resultadoArea);
  