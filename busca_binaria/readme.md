# 🔍 Busca Binária
Um dos algoritmos de busca mais poderosos de todos!. A busca binária procura um elemento em uma lista ordenada através de uma "investigação" Que dura de 2 passos á 4 passos.

## 🕵️‍♂️ Investigação
Três simples passos que esse algoritmo vai seguir recursivamente, antes de explicar entenda que **X** é o elemento em que estamos buscando na lista.

- ➗ **Dividir** a lista e pegar o elemento do meio.
- 👨‍❤️‍👨 Caso o X e lista[meio] derem **match** (serem iguais), então retorna o meio.
- 🍺 **A fila anda**, caso o X for maior que o lista[meio], vamos retornar a direita da lista, caso o X seja menor que a lista[meio] retorna a esquerda da lista. 


➗ `Dividir` <br/>
Agora a parte mais técnica desse algoritmo. Para descobrir o meio da lista basta somar a **direita** e a **esquerda**, onde a direita é a última posição da lista e a esquerda é a primeira posição e depois dividir essa soma por 2 arredondando para baixo. Lembrando que nós sempre vamos colocar esses valores em variáveis pois **a cada recursão da nossa função o início eo fim da lista serão diferentes**. Então vamos pensar esse exemplo:

```C
lista[3, 6, 9, 10, 11, 20]; // "m" é o meio
            m
```
A esquerda aqui é 0 e a direita 5, (0 + 5) / 2 é 2.5 arredondando para baixo é 2.

👨‍❤️‍👨 `Match` <br/>
Então nós temos o meio da lista agora precisamos comparar se a lista na posição meio é igual ao X, se for então retornar o meio.

```C
if (lista[meio] == X) return meio;
``` 

🍺 `A fila anda` <br/>
Agora nós sabemos que o elemento do meio não é oque queremos, então partindo da ideia que essa lista está ordenada de forma crescente, nós precisamos verficar se o X é maior do que lista[meio] nesse caso passamos a direita dessa lista pois toda a esquerda vai ter apenas números menores, já a direita pode ter iguais ou maiores do que X.

```C
if (X > lista[meio]) 
  return buscaBinaria(lista, meio +1, direita, X);
```
Essa mesma ideia se aplica para caso o X for menor que a lista[meio] de uma olhada no exemplo anterior:

```C
lista[3, 6, 9, 10, 11, 20];
            m
```
Vamos imaginar que estamos procurando o 3, sabemos que 3 é menor do que 9 então vamos precisar ir para a esquerda da lista não para a direita pois só vai ter números maiores do que 3.

```C
lista[3, 6, 9, 10, 11, 20]; // "I" var do início, "F" var do fim
      I  F
```

Para pegar a metada da esquerda [3, 6] eu faço o `F = meio - 1`, já o I (o poteiro do início) continua a mesma coisa, pois meio vale 2 assim a nossa lista "começaria" em 0 e "acabaria" em 1. 
Caso eu fosse passar a direita da lista [10, 11, 20] eu passaria `I = meio + 1` e F ficaria a mesma coisa, então a lista "começaria" em 3 e "acabaria" em 5

```C
lista[3, 6, 9, 10, 11, 20]; // "I" var do início, "F" var do fim
               I       F
```
Ou seja, quando o `X == meio` retornamos o meio pois achamos oque queriamos, agora quando o `X < meio` passamos a esquerda da lista e para passar a esquerda precisamos diminuir o F (váriavel que criamos para armazenar o fim da lista) Por meio -1, agora se `X > meio` Precisamos passar a direita, ou seja, aumentar o I (váriavel que criamos para armazenar o início da lista) Por meio +1.

## 🐾 Passo a Passo com baralhos
Vamos imaginar que estamos na mesa de um bar 🍻, ae paramos de jogar truco para eu te explicar como funciona a busca binária, então vamos buscar o 3 nessa lista:

<img src="https://ik.imagekit.io/dwei78ukbe/busca_binaria/procura3-1_r9Fyp5yYc1.png"/>

Primeiro passo é descobrir o meio da lista para fazer isso é só fazer (início + fim) / 2, nesse caso fica (0 + 4) / 2 vai ser 2 e nessa posição está o 6.

<img src="https://ik.imagekit.io/dwei78ukbe/busca_binaria/procura3-2_CwrQNQKGU3.png"/>

Com o nosso 6 em mãos agora sabemos que o 3 vai estar no lado esquerdo da lista já que 3 é menor que 6. Para chegar no lado esquerdo precisamos diminuir o lado da direita para isso fazemos meio - 1, que nesse caso é 2 - 1, então a nossa direita agora vai ser 1.

<img src="https://ik.imagekit.io/dwei78ukbe/busca_binaria/procura3-3_T39jfb2I_0.png"/>

Agora a nossa lista "começa" em 0 e "termina" em 1, para descobrir o meio é só fazer a mesma coisa (início + fim) / 2, (0 + 1) / 2 então o meio vai ser 1 pois nesse caso arredondamos para cima, e o nosso 4 está na posição 1.
Sabemos que 3 é menor do que 4 então ele está no lado esquerdo da lista, ou seja, fazemos com que a direita receba meio - 1, meio vale 1 então agora a direita é 0.

<img src="https://ik.imagekit.io/dwei78ukbe/busca_binaria/procura3-4_4BnIq07_TN.png"/>

Quando chegarmos aqui vamos calcular de novo o meio, então (0 + 0) / 2 é 0 e nessa posição é o 3  que é o valor que estamos procurando 🎉.

### 🤔 Oque acontece se o X não existir na lista?
Vamos procurar o número 11. Aqui vai ser a mesma coisa (início + fim) / 2 é igual a 2.

<img src="https://ik.imagekit.io/dwei78ukbe/busca_binaria/procura3-2_CwrQNQKGU3.png"/>

Sabemos que 11 é maior que 6 então vamos para o lado direito da lista, para isso aumentamos a esquerda, então esquerda recebe meio + 1, meio vale 2 então esquerda vai ser 3.

<img src="https://ik.imagekit.io/dwei78ukbe/busca_binaria/procura11-1_nygeq-IA4L.png"/>

Agora calculamos o meio novamente (3 + 4) / 2 vai ser 4 arredondando para cima, sabemos que 11 é maior do que 10 então vamos passar a direita, para isso aumentamos a esquerda com meio + 1, meio vale 4 então a esquerda é 5.

<img src="https://ik.imagekit.io/dwei78ukbe/busca_binaria/procura11-2_7PAJbGtjl.png"/>

OPSS! Repara que nesse exato momento a esquerda está maior do que a direita é ae Dev que sabemos que essa valor não existe nessa lista então retornamos -1.

```C
if (direita < esquerda) return -1;
```

🎉 E pronto!! Assim fizemos duas buscas com um dos algoritmos de buscas mais fodas 😎 e se você ficou com dificuldades saiba que é normal com um pouco mais de tempo, prática e uma boa pausa para o seu cérebro assimilar tudo, VOCÊ chega lá.

🧠 Você pode aprender qualquer coisa e até a próxima.

---
<p align="center">Feito com 💚 por João Victor Ramalho Alves</p>