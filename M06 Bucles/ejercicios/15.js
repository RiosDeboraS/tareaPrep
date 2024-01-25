function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  if (numero >= 1 && numero <= 7) {
    // Array con los nombres de los días de la semana
    const diasSemana = [
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
      "Domingo",
    ];

    // Utiliza un bucle para encontrar el día correspondiente
    for (let i = 1; i <= 7; i++) {
      if (i === numero) {
        return diasSemana[i - 1]; //
      }
    }
  } else {
    // Si el número no está en el rango válido, retorna el mensaje correspondiente
    return "No es un dia de la semana";
  }
}

module.exports = obtenerDiaSemana;
