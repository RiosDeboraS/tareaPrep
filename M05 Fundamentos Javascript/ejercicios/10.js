function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:

  // Verificamos que el argumento sea un objeto Date válido.
  if (!(fecha instanceof Date)) {
    return false;
  }

  // Intentamos obtener los componentes de la fecha.
  const ano = fecha.getFullYear();
  const mes = fecha.getMonth() + 1; // Los meses van de 0 a 11
  const dia = fecha.getDate();

  // Verificamos que los componentes sean válidos.
  if (isNaN(ano) || isNaN(mes) || isNaN(dia)) {
    return false;
  }

  // Verificamos que el año sea un número entre 1 y 3000.
  if (ano < 1 || ano > 3000) {
    return false;
  }

  // Verificamos que el mes sea un número entre 1 y 12.
  if (mes < 1 || mes > 12) {
    return false;
  }

  // Verificamos que el día sea un número válido para el mes y el año.

  const diasEnMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // aplica para años bisiestos
  if (mes === 2 && ano % 4 === 0 && ano % 100 !== 0) {
    diasEnMes[1] = 29;
  }
  if (dia < 1 || dia > diasEnMes[mes - 1]) {
    return false;
  }

  // La fecha es válida.
  return true;
}

module.exports = esFechaValida;
