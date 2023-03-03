/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   if (num >= 1 ) {
      console.log("Es positivo");
      return "Es positivo";
   } else if (num <= -1 ) 
   {
      console.log("Es negativo");
      return"Es negativo";
   }
   else if (num === 0 )
   {
      console.log("false");
      return false;
   }
   
}
esPositivo(0);

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   resultado = str + "!";
   console.log(resultado);
   return resultado;
}
agregarSimboloExclamacion("Hola Oscar");

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
   resultadoNombres = nombre + " " + apellido;
   console.log(resultadoNombres);
   return resultadoNombres;
}
combinarNombres("Oscar","Sierra")

function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   resultadoSaludo = "Hola " + nombre + "!";
   console.log(resultadoSaludo); 
   return resultadoSaludo;
}
obtenerSaludo("Juan");

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   resultadoArea = alto * ancho;
   console.log("El resultado del area es: " + resultadoArea);
   return resultadoArea;
}
obtenerAreaRectangulo(4,5);

function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   resultadoPerimetro = lado * 4;
   console.log("El resultado del Perimetro es: " + resultadoPerimetro);
   return resultadoPerimetro;
}
retornarPerimetro(5);

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   area = (base * altura) / 2;
   console.log("El area del triangulo es "+ area);
   return area;
}
areaDelTriangulo(7,2);

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   conversor = euro * 1.20;
   console.log("Total dolares es : " + conversor);
   return conversor;
}
deEuroAdolar(4);

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
   const l = letra.toLowerCase();
   if ((l === 'a' || l === 'e' || l === 'i' || l === 'o' ||l === 'u') && (l.length === 1)) {
      console.log("Es vocal");
      return "Es vocal";
   } else {
      console.log("Dato incorrecto");
      return "Dato incorrecto";
   }
}
esVocal("A");

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
