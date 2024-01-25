function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  const elementosMayores = array.filter((elemento) => elemento > 10); // [...]

  return elementosMayores.length; // cuantos hay
}

module.exports = contarElementosMayoresA10;
