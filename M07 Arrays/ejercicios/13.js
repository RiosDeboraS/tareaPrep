function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  if (resultadosTest.length === 0) {
    return 0;
  }

  const sumaNotas = resultadosTest.reduce(
    (acumulador, nota) => acumulador + nota,
    0
  );

  const promedio = sumaNotas / resultadosTest.length;

  return promedio;
}

module.exports = promedioResultadosTest;
