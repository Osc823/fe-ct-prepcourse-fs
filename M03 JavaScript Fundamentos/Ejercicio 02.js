/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   console.log(string);
   return string;
}
devolverString("Oscar");
// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   resultadoSuma = x + y;
   console.log(resultadoSuma);
   return resultadoSuma;
}
suma(4,5);

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   resultadoResta = x - y;
   console.log(resultadoResta);
   return resultadoResta;
}
resta(5,4);

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   resultadoDivision = x / y;
   console.log(resultadoDivision);
   return resultadoDivision;
}
divide(10,2);

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   resultadoMultiplicacion = x * y;
   console.log(resultadoMultiplicacion);
   return resultadoMultiplicacion;
}
multiplica(5,2);

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   resultadoResto = x % y;
   console.log(resultadoResto);
   return resultadoResto;
}
obtenerResto(21,3)

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
