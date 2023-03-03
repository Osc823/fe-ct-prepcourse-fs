/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
   if( x > y || x === y){
      console.log("Numero mas grande :" + x);
      return x;
   }else if (y > x || y === x) 
      console.log("Numero mas grande :" + y);
      return y;
   
}
obtenerMayor(8,7);

function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   if (edad >= 18) {
      console.log("Allowed");
      return "Allowed";
   }else if (edad < 18) 
      console.log("Not allowed");
      return "Not allowed"; 
}
mayoriaDeEdad(19);

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   if (status === 1) {
      console.log("Online");
      return "Online";
   }else if (status === 2) {
      console.log("Away");
      return "Away";
   }else
      console.log("Offline");
      return "Offline";
}
conection(3);

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   switch (idioma) {
      case 'aleman':
         console.log("Guten Tag!");
         return "Guten Tag!";
         break;
      case 'mandarin':
         console.log("Ni Hao!");
         return "Ni Hao!";
         break;
      case 'ingles':
         console.log("Hello!");
         return "Hello!";
         break;
      default:
         console.log("Hola!");
         return "Hola!";
         break;
   };
}
saludo('español');

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
   switch (color) {
      case 'blue':
         console.log("This is blue");
         return "This is blue";
         break;
      case 'red':
         console.log("This is red");
         return "This is red";
         break;
      case 'green':
         console.log("This is green");
         return "This is green";
         break;
      case 'orange':
         console.log("This is orange");
         return "This is orange";
         break;
      default:
         console.log("Color not found");
         return "Color not found";
         break;
   };
}
colors('red');

function esDiezOCinco(num) {
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código:
   if( num === 5 || num === 10){
      console.log("true");
      return true;
   }else{
   console.log("false");
   return false;
   };
}
esDiezOCinco(5);

function estaEnRango(num) {
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:
   if( num > 20 && num < 50){
      console.log("true");
      return true;
   }else{
   console.log("false");
   return false;
   };
}
estaEnRango(40);

function esEntero(num) {
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:
   if (Number.isInteger(num) ) {
      console.log("Entero");
      return true;
   }else
      console.log("No es entero");
      return false;
   
}
esEntero(0);

function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 3 == 0 && num % 5 == 0) {
      console.log("fizzbuzz");
      return "fizzbuzz";
   }else if (num % 3 == 0) {
      console.log("fizz");
      return "fizz";
   }else if (num % 5 == 0) {
      console.log("buzz");
      return "buzz";
   }else return false;
}
fizzBuzz(60);

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
   suma = 0;
   
   if (num1 < 0 || num2 < 0 ||  num3 < 0) {
      console.log("Hay negativos");
      return "Hay negativos";

   }else if (num1 > num2 && num1 > num3 && Number.isInteger(num1) ) {
         console.log("Numero 1 es mayor y positivo");
         return "Numero 1 es mayor y positivo";

   }else if (num3 > num1 || num3 > num2 && Number.isInteger(num3)) {
         suma = num3 +1 ;
         console.log(suma);
         return (num3 + 1);

   }else if (num1 === 0 &&  num2 === 0 &&  num3 === 0) {
      console.log("Error");
      return "Error";

   }else
   console.log("false"); 
   return false;
}
operadoresLogicos(0);

function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   //Mi ejemplo
   // if (num > 1 && Number.isInteger(num)) {
   //    if (num % num === 0 && num % 1 === 0) 
   //       console.log("Numero primo");
   //       return true;
      
   // } else
   //    console.log("Numero NO PRIMO");
   //    return false;

   if (num <= 0 || num == 1){
      console.log("Numero NO PRIMO"); 
      return false;
   } 
   for (i = 2 ; i < num ; i++) {
      if (num % i == 0) {
         console.log("Numero NO PRIMO");
         return false;
      }
   }
   console.log("Numero primo");
   return true;

}
esPrimo(2);

function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   if (valor == true) {
      console.log("Soy verdadero");
      return "Soy verdadero";
   }else
      console.log("Soy falso");
      return "Soy falso";
}
esVerdadero("FALSO");

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:
   let numString = num.toString();
   if (numString.length===3) {
      console.log("Verdadero");
      return true;
   }else{
      console.log("Falso");
      return false;
   }
}
tieneTresDigitos(125);

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
   let veces = 0;
   do {
      num += 5;
      veces++;
   } while (veces < 8);
   console.log(num);
   return num;
}
doWhile(5);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
