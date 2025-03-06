function pesquisa_binaria(lista, item) {
  let baixo = 0;
  let alto = lista.length;

  while (baixo < alto) {
    meio = Math.round((baixo + alto) / 2);
    let chute = lista[meio];

    if (chute === item) {
      return meio;
    }
    if (chute > item) {
      alto = meio - 1;
    } else {
      baixo = meio + 1;
    }
  }
  return null;
}

console.log(pesquisa_binaria([1, 2, 3, 4, 5], 4));
console.log(pesquisa_binaria([1, 2, 3, 4, 5], -1));
