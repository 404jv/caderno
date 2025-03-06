function buscarMenor(arr) {
  let menor = arr[0];
  let menorIndice = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < menor) {
      menor = arr[i];
      menorIndice = i;
    }
  }
  return menorIndice;
}

function ordenarPorSelecao(arr) {
  novoArr = [];
  const t = arr.length;
  for (let i = 0; i < t; i++) {
    const indexMenor = buscarMenor(arr);
    novoArr.push(arr[indexMenor]);
    arr.splice(indexMenor, 1);
  }
  return novoArr;
}

console.log(ordenarPorSelecao([5, 3, 6, 2, 10]));
