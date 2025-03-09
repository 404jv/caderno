function contaRecursiva(array, cont) {
  if (array.length === 0) {
    return cont;
  }
  return contaRecursiva(array.slice(1), cont + 1);
}

console.log(contaRecursiva([1, 2, 3, 4, 5, 2], 0));
