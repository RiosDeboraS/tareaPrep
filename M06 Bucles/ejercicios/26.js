function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let str1SinEspacios = "";
  let str2SinEspacios = "";

  // Eliminamos los espacios
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== " ") {
      str1SinEspacios += str1[i];
    }
  }

  // Eliminamos los espacios
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] !== " ") {
      str2SinEspacios += str2[i];
    }
  }

  if (str1SinEspacios.length !== str2SinEspacios.length) {
    return false;
  }

  // Creamos un objeto para contar las ocurrencias de cada letra en str1SinEspacios.
  let contador = {};
  for (let i = 0; i < str1SinEspacios.length; i++) {
    let letra = str1SinEspacios[i];
    contador[letra] = (contador[letra] || 0) + 1;
  }

  // Recorremos str2SinEspacios y restamos 1 a la cuenta de cada letra en el objeto contador.
  // Si encontramos una letra que no está en el objeto contador o su cuenta es 0, los strings no son anagramas.
  for (let i = 0; i < str2SinEspacios.length; i++) {
    let letra = str2SinEspacios[i];
    if (!contador[letra]) {
      return false;
    }
    contador[letra]--;
  }

  // Si hemos llegado hasta aquí, los strings son anagramas.
  return true;
}

module.exports = esAnagrama;
