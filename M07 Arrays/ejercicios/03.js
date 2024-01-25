function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
  // return array.indexOf(elemento);
  //return array.findIndex((e) => e === elemento);

  for (let i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return i;
    }
  }
  return -1;
}

module.exports = encontrarElemento;
