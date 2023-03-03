/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   var primerElemento = array[0];
   console.log("El primer elemento es: "+primerElemento);
   return primerElemento;
}
devolverPrimerElemento(['Gaona','Sierra','Ivan']);
devolverPrimerElemento([7,2,5]);

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var ultimoElemento = array[array.length - 1];
   console.log("El ultimo elemento es: " + ultimoElemento);
   return ultimoElemento;
}
devolverUltimoElemento([7,2,5]);

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   
   var largo = array.length;
   console.log("El largo del array es: " + largo); 
   return largo;
}
obtenerLargoDelArray([7,2,5]);

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   for(var i=0; i < array.length; i++){
      array[i] = array[i] +1;
   }
   console.log("Array incrementado en + 1: " + array);
   return array;
}
incrementarPorUno([4,5,6]);

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   // for(var i=0; i < array.length; i++){
   //    array[i] = array[i] + elemento;
   // }
   // console.log(array);
   array.push(elemento);
   console.log("Elemento agregado al final: " + array);
   return array;
   
}
agregarItemAlFinalDelArray(['Hola','Oscar'],['Ivan']);

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   console.log("Elemento agregado al inicio: " + array);
   return array;
}
agregarItemAlComienzoDelArray(['Hola','Oscar'],['Ivan']);

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var palabraUnidad;
   for(var i = 0; i < palabras.length; i++){
      if (i === 0) {
         palabraUnidad = palabras[i];
      }else{
         palabraUnidad = palabraUnidad + ' ' + palabras[i];
      }
   }
   console.log("La frase unidad es : "+ palabraUnidad);
   return palabraUnidad;

}
dePalabrasAFrase(['Hello', 'world!']);

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   if (array.includes(elemento)) {
      console.log("Verdadero");
      return true;
   }else{
      console.log("Falso");
      return false;
   } 
}
arrayContiene([2202],[2]);

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma  = 0;

   for (var i = 0 ; i < arrayOfNums.length ; i++ ) {
      suma = suma + arrayOfNums[i];
   }
   console.log("Numeros agregados "+ [i] +" y suma : "+ suma);
   return suma;
}
agregarNumeros([1,2,3]);



function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var promedio  = 0;

   for (var i = 0 ; i < resultadosTest.length ; i++ ) {
      promedio = promedio + resultadosTest[i];
      
   }
   resultadoP = promedio / resultadosTest.length
   console.log("El promedio es :" + resultadoP);
   return promedio / resultadosTest.length;
}
promedioResultadosTest([10,5,5]);

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var caja  = 0;

   for (var i = 0 ; i < arrayOfNums.length ; i++ ) {
         if(arrayOfNums[i] > caja)
            caja = arrayOfNums[i];
   }
   console.log("El numero mas grande es: "+ caja);
   return caja;
}
numeroMasGrande([23,5,66,7]);

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var multi  = 1;

   if (arguments.length === 0) {
      return 0;
   }else if (arguments.length === 1) {
      return arguments[0];
   }else{
      for (var i = 0 ; i < arguments.length ; i++ ) {
      multi = multi * arguments[i];
      }
   }
   console.log("La multiplicacion de argumentos es: "+ multi);
   return multi;
}
multiplicarArgumentos([0,5]);


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var acumulador = 0;

   for (var i = 0 ; i < array.length ; i++ ) {
      if (array[i] > 18 ) {
      acumulador += 1;
      }
   } 
   console.log("Cantidad de elementos mayor a 18: " + acumulador);
   return acumulador;  
}
cuentoElementos([5,78,11,45,19]);

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7) {
      console.log("Es fin de semana");
      return "Es fin de semana";
   }else if (numeroDeDia >1 && numeroDeDia <7) {
      console.log("Es dia laboral");
      return "Es dia laboral";
   }else {
      console.log("No dia");
      return "No dia";
   }
}
diaDeLaSemana(5);

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var numero = num.toString();
   for( let i = 0; i < numero.length; i++){
       if (numero[i] == '9') {
           console.log('Si contiene a el numero 9');
           return true;
       }else{
         console.log('No contiene a el numero 9');
         return false;
       }
   }
}
empiezaConNueve('98749459');

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   for (var i = 0; i < array.length -1; i++) {
      if (array[i] !== array[i+1]) {
         console.log("No son iguales");
         return false;
      }
   }
   console.log("Son iguales");
   return true;
}
todosIguales(["Hola","Hola","Ola"]);

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var arrayResultado = [];
   for (var i = 0; i < array.length; i++) {
      if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
         arrayResultado.push(array[i]);
      }
   }
   if (arrayResultado.includes("Enero") && arrayResultado.includes("Marzo") && arrayResultado.includes("Noviembre") ) {
      return arrayResultado;
   }else{
      return "No se encontraron los meses pedidos";
   }
  
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   const tabla = [];
   for(let i = 0; i <= 10; i++){
      n = 6 * i;
      tabla.push(n);
   }
   console.log("Tabla del 6 multiplicacion es: " + tabla)
   return tabla;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let acumulador = [];

   for (let i = 0 ; i < array.length ; i++ ) {
      if (array[i] > 100 ) {
         acumulador.push(array[i]);
      }
      
   } 
   console.log("Cantidad de elementos mayor a 100: " + acumulador);
   return acumulador;
}
mayorACien([105,178,11,145,419]);

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var acumulador = [];
   var suma = num;
   for (var i = 0; i < 10; i++) {
      suma = suma + 2;
      if (suma === i)  {
         break;
      }else{
         acumulador.push(suma);
      } 
   }
   if (acumulador.length < 10) {
      console.log("Se interrumpió la ejecución");
      return "Se interrumpió la ejecución";
   }else if (acumulador.length === 10) {
      console.log(acumulador);
      return acumulador;
   }
}
breakStatement(1);

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var acumulador = [];
   var suma = num;
   for (var i = 0; i < 10; i++) {
      
      if (i === 5)  {
         continue;
      }else{
         suma = suma + 2;
         acumulador.push(suma);
      } 
   }
   console.log(acumulador);
   return acumulador;
}
continueStatement(8);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
