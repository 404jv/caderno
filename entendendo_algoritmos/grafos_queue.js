const grafo = {
  voce: ["alice", "bob", "claire"],
  bob: ["anuj", "peggy"],
  alice: ["peggy"],
  claire: ["thom", "jonny"],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: [],
};

function eVendedora(nome) {
  if (nome.at(-1) === "m") return true;
  return false;
}

function pesquisa(nome) {
  let filaPesquisa = grafo[nome];
  const verificadas = [];

  while (filaPesquisa.length > 0) {
    const pessoa = filaPesquisa.shift();

    if (!verificadas.includes(pessoa)) {
      if (eVendedora(pessoa)) {
        console.log(`${pessoa} é um vendedor(a) de manga!`);
        return true;
      }
      filaPesquisa = [...filaPesquisa, ...grafo[pessoa]];
      verificadas.push(pessoa);
    }
  }
}

pesquisa("voce");
