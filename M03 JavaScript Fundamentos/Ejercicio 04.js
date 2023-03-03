/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   resultadoCuadrado = Math.pow(num,2);
   console.log(resultadoCuadrado);
   return resultadoCuadrado;
}
elevarAlCuadrado(5);

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   resultadoCubo = Math.pow(num,3);
   console.log(resultadoCubo);
   return resultadoCubo;
}
elevarAlCubo(3);

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   resultado = Math.pow(num,exponent);
   console.log(resultado);
   return resultado;
}
elevar(2,4);

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   resultadoRedondear = Math.round(num);
   console.log(resultadoRedondear);
   return resultadoRedondear;
}
redondearNumero(0.19);

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   resultadoRedondearArriba = Math.ceil(num);
   console.log(resultadoRedondearArriba);
   return resultadoRedondearArriba;
}
redondearHaciaArriba(3.27);

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   resultadoRandom = Math.random();
   console.log(resultadoRandom);
   return resultadoRandom;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
