const grafo = {
  a: {
    c: 1,
    b: 100,
  },
  b: {
    d: -1000,
  },
  c: {
    d: 1,
  },
  d: {},
};

const infinito = Infinity;
const custos = {
  a: 1,
  b: 100,
  d: infinito,
};

const pais = {
  b: "a",
  c: "a",
  d: null,
};
const processados = [];

function acharCustoMaisBaixo(custos) {
  let custoMaisBaixo = Infinity;
  let nodoCustoMaisBaixo = null;

  for (let nodo in custos) {
    const custo = custos[nodo];
    if (custo < custoMaisBaixo && !processados.includes(nodo)) {
      custoMaisBaixo = custo;
      nodoCustoMaisBaixo = nodo;
    }
  }
  return nodoCustoMaisBaixo;
}

nodo = acharCustoMaisBaixo(custos);

while (nodo !== null) {
  const custo = custos[nodo];
  const vizinhos = grafo[nodo];

  for (let n in vizinhos) {
    const novoCusto = custo + vizinhos[n];
    if (custos[n] > novoCusto) {
      custos[n] = novoCusto;
      pais[n] = nodo;
    }
  }
  processados.push(nodo);
  nodo = acharCustoMaisBaixo(custos);
}

console.log(custos);
console.log(pais);
