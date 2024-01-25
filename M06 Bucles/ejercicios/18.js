function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (Number.isInteger(a) && Number.isInteger(b) && b >= a) {
    // Inicializa el producto
    let producto = 1;

    // Utiliza un bucle for para calcular el producto de los números entre a y b
    for (let i = a; i <= b; i++) {
      producto *= i;
    }

    // Convierte -0 a 0
    if (Object.is(producto, -0)) {
      return 0;
    }

    return producto;
  } else {
    // Si a o b no son enteros o b es menor que a, retorna undefined
    return undefined;
  }
}

module.exports = productoEntreNúmeros;
