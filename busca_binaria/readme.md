# 🔍 Busca Binária
Um dos algoritmos de busca mais poderosos de todos!. A busca binária procura um elemento em uma lista ordenada através de uma "investigação" Que dura de 2 passos á 4 passos.

# ⚠ Ainda em building...

## 🚨 Investigação
Três simple passos que esse algoritmo vai seguir recursivamente, antes de explicar entenda que **X** é o elemento em que estamos buscando na lista.

- ➗ **Dividir** a lista e pegar o elemento do meio.
- 👨‍❤️‍👨 Caso o X e lista[meio] derem **match** (serem iguais), então retorna o meio.
- 🍺 **A fila anda**, caso o X for maior que o lista[meio], vamos retornar a direita da lista, caso o X seja menor que a lista[meio] retorna a esquerda da lista. 


➗ `Dividir` <br/>
Agora a parte mais técnica desse algoritmo. Para descobir o meio da lista basta somar a **direita** e a **esquerda**, onde a direita é o último elemento da lista e a esquerda é o primeiro elemento da lista e depois dividir essa soma por 2 arredondando para baixo. Lembrando que nós sempre vamos colocar esses valores em váriaveis pois **a cada recursão da nossa função o início eo fim da lista serão diferentes**. Então vamos pensar esse exemplo:

```C
lista[3, 6, 9, 10, 11, 20]; // "m" é o meio
            m
```
A esquerda aqui é 0 e a direita 5, (0 + 5) / 2 é 2.5 arredondando para baixo é 2.

👨‍❤️‍👨 `Match` <br/>
Então nós temos o meio da lista agora precisamos comparar se a lista na posição meio for igual ao X, é só retornar o meio.

```C
if (lista[meio] == X) return meio;
``` 

🍺 `A fila anda` <br/>
Agora nós sabemos que o elemento do meio não é oque queremos, então partindo da ideia que essa lista está ordenada de forma crescente, nós precisamos verficar se o X é maior a lista[meio] nesse caso passamos a direita dessa lista pois toda a esquerda vai ter apenas números menores já a direita pode ter iguais ou maiores ao X.

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
lista[3, 6, 9, 10, 11, 20]; // "e" esquerda, "d" direita
      e  d
```

Para pegar a metada da esquerda eu faço a direita receber meio -1, já a esquerda continua a mesma coisa, pois meio vale 2 assim a nossa lista "começaria" em 0 e "acabaria" em 1. 
Caso eu fosse passar a direita da lista eu passaria esquerda como meio +1 e direita ficaria a mesma coisa, então a lista "começaria" em 3 e "acabaria" em 5.

```C
lista[3, 6, 9, 10, 11, 20]; // "e" esquerda, "d" direita
               e       d
```

<img src="https://ik.imagekit.io/dwei78ukbe/busca_binaria/procura3-1_r9Fyp5yYc1.png"/>

<img src="https://ik.imagekit.io/dwei78ukbe/busca_binaria/procura3-2_CwrQNQKGU3.png"/>

<img src="https://ik.imagekit.io/dwei78ukbe/busca_binaria/procura3-3_T39jfb2I_0.png"/>

<img src="https://ik.imagekit.io/dwei78ukbe/busca_binaria/procura3-4_4BnIq07_TN.png"/>

---
<img src="https://ik.imagekit.io/dwei78ukbe/busca_binaria/procura3-2_CwrQNQKGU3.png"/>

<img src="https://ik.imagekit.io/dwei78ukbe/busca_binaria/procura11-1_nygeq-IA4L.png"/>

<img src="https://ik.imagekit.io/dwei78ukbe/busca_binaria/procura11-2_7PAJbGtjl.png"/>
