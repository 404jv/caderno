function qsort(array) {
  if (array.length < 2) {
    return array;
  }
  const pivo = array[0];
  const menores = [];
  const maiores = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivo) {
      menores.push(array[i]);
    } else {
      maiores.push(array[i]);
    }
  }
  return [...qsort(menores), pivo, ...qsort(maiores)];
}

console.log(qsort([10, 2, 3, 1]));
