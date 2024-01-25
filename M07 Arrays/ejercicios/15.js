function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  if (array.length < 2) {
    return true;
  }

  var resultado = array.every((e) => e === array[0]);
  return resultado;
}

module.exports = todosIguales;
