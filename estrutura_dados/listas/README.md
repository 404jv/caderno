# 🌌 Listas
A lista é uma estrutura de dados para armazenar valores e cada um desses valores são identificados com um index ou chave (são a mesma coisa), as listas também são chamadas de vetores ou variável indexada.

## ⚠ Artigo ainda em biulding...
---
## ❓ Porque usar Listas?
Imagine que você e eu precisamos fazer uma missão que é pegar as seguintes informações: tamanho, tem água e distância do sol do planeta Vênus, isso é bem simples, neh? É só criar 3 variaveis, mas agora imagina para mais 2 planetas além de Vênus, já são 9 variaveis, ou seja, variaveis acabam sendo dificeis para usar então precisamos recorrer as listas.


## ⚖ 5 Mandamentos da lista
Algumas leis que devem ser respeitadas ao manipular listas, partindo do fato que estamos entendendo lista com a linguagem C:
  - 🎯 Tenha sempre um tamanho exato de uma lista.
  - 🏹 Nunca altere o tamanho de uma lista.
  - 🥇 A primeira posição tem que ser 0.
  - ⚙ Todas as posições devem ser inteiras maior ou igual a 0.
  - ⚠ Ou seja sem letras, números negativos ou números quebrados em um index.

## 🗡 Declarando uma  lista em C
Em C a declaração de uma lista é bem simples, primeiro o tipo da lista, segundo o nome e depois a quantidade de posições, *TIPO* NOME_DA_LISTA [QUANTIDADE], por exemplo:
```C
int lista[3]; // TIPO NOME[POSIÇÕES]
```

```C
char lista[3]; // TIPO NOME[POSIÇÕES]
```

## 🤠 Inicializando uma lista
Existem algumas formas de incializar uma lista em C, eu vou apresentar as duas formas mais utilizadas: <br />

**1º** Nesse caso o compilador vai alocar 3 espaços na memória para essa determinada lista.
```C
int lista[3] // [2191, 499, 3125248];
```
Dentro de cada posição vai ter esses números muito loco, eles representam a memória em que essa posição foi alocada (não se preocupe com isso agora).<br />


**2º** Aqui inicializamos uma lista já com valores dentro dela.
```C
int lista[3] = { 1, 2, 3 }; // [1, 2, 3]

int lista[3] = {};       // [0, 0, 0]

int lista[3] = { 0 };    // [0, 0, 0]

int lista[3] = { 1 };    // [1, 0, 0]

int lista[3] = { 1, 2 }; // [1, 2, 0]
```
Não tem muito segredo as inicialização de listas, recomendo você ir testar alguns desses ou até fazer o seu próprio exemplo é só iniciar uma lista e dar um print em cada posição:

```C
int lista[3] = { 1, 2 };
printf("%d %d %d", lista[0], lista[1], lista[2]);
```

A mesma coisa acontece para **qualquer outro tipo**:
```C
char lista[3] = { 'J', 'a', 'o' }; // ['J', 'a', 'o']

char lista[3] = {};           // ['', '', '']

char lista[3] = { 'D', 'e' }; // ['D', 'e']

float lista[3] = { 0 };       // [0, 0, 0]

float lista[3] = { 1.2 };     // [1.2, 0, 0]
```

Se for fazer os testes não esqueça de alterar o **%d** para **%c** para char e **%f** para float.

```C
char lista[3] = { "J", "a", "o" };

printf("%c%c%c", lista[0], lista[1], lista[2]);
```

## 📭 Posições de uma lista
Nós exemplo anteriores eu tive acesso a uma posição da lista escrevendo **LISTA[posição]** ou exemplo lista[1] nesse caso eu tenho acesso ao valor da segunda posição, para melhor entendimento vamos de exemplos:


