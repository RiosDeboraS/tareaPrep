function verificarPropiedad(objeto, propiedad) {
  // Verifica si el objeto posee la propiedad recibida.
  // Retorna true si la tiene, sino retorna false.
  // PISTA: Puedes usar el método hasOwnProperty().
  // Tu código:

  // Verificar si la propiedad es propia del objeto y es enumerable
  if (
    objeto.hasOwnProperty(propiedad) &&
    Object.getOwnPropertyDescriptor(objeto, propiedad).enumerable
  ) {
    return true;
  }

  // Verificar si la propiedad es heredada y es enumerable
  let proto = Object.getPrototypeOf(objeto);
  while (proto !== null) {
    if (
      proto.hasOwnProperty(propiedad) &&
      Object.getOwnPropertyDescriptor(proto, propiedad).enumerable
    ) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }

  // Si no se encontró la propiedad o no es enumerable, retorna false
  return false;
}

module.exports = verificarPropiedad;
