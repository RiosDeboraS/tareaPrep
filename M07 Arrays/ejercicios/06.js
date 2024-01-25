function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  const duplicado = array.map((elemento) => elemento * 2);

  return duplicado;
}

module.exports = duplicarElementos;
