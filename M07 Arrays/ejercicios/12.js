function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  const resultado = arrayOfNums.reduce(
    (acumulador, elemento) => acumulador + elemento,
    0
  );

  return resultado;
}

module.exports = agregarNumeros;
