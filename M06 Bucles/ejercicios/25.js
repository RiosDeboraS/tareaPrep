function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  string = string.toLowerCase();
  let stringSinEspacios = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      stringSinEspacios += string[i];
    }
  }
  let stringReverso = stringSinEspacios.split("").reverse().join("");
  return stringSinEspacios === stringReverso;
}
module.exports = esPalindromo;
