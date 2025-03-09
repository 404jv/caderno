function maiorValor(array, maior = undefined) {
  if (array.length === 0) {
    return maior;
  }
  const primeiroNum = array[0];
  if (!maior || maior < primeiroNum) {
    return maiorValor(array.slice(1), primeiroNum);
  }
  return maiorValor(array.slice(1), maior);
}

console.log(maiorValor([1, 2, 3, 200, 5, 6, 7, 8]));
