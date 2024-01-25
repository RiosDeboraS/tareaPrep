function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  const pares = array.filter((numero) => numero % 2 === 0);

  return pares;
}

module.exports = filtrarNumerosPares;
