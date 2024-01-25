function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  const saludos = [
    { idioma: "aleman", saludo: "Guten Tag!" },
    { idioma: "mandarin", saludo: "Ni Hao!" },
    { idioma: "ingles", saludo: "Hello!" },
  ];
  for (let i = 0; i < saludos.length; i++) {
    if (idioma === saludos[i].idioma) {
      return saludos[i].saludo;
    }
  }
  return "Hola!";
}

module.exports = saludo;
