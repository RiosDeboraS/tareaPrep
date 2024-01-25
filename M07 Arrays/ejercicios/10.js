function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  // if (array.length === 0) {
  //   return 0;
  // }

  // var indiceMayor = 0;

  // for (let i = 1; i < array.length; i++) {
  //   if (array[i] > array[indiceMayor]) {
  //     indiceMayor = i;
  //   }
  // }

  // return indiceMayor;

  if (array.length === 0) {
    // 1
    return 0;
  }

  let indice = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[indice]) {
      indice = i;
    }
  }
  //return [min,max];
  return indice;
}

module.exports = encontrarIndiceMayor;
