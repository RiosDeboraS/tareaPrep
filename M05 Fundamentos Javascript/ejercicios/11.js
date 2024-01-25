function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:

  // Obtén el año actual
  var añoActual = new Date().getFullYear();

  // Obtén el año de nacimiento
  var añoNacimiento = fechaNacimiento.getFullYear();

  // Calcula la edad restando el año de nacimiento del año actual
  var edad = añoActual - añoNacimiento;

  // Verifica si la edad es mayor o igual a 18
  return edad >= 18;
}

module.exports = esMayorDeEdad;
