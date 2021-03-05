# 👽 Merge Sort
Esse algoritmo assim como o [Quick Sort](../quickSort) são algoritmos do tipo "Dividir e conquistar" Basicamente oque o Merge Sort faz é dividir a lista em pequenas listas que vão ser chamadas de sublistas e após a divisão ir ordendando as listas.

## 🪓 Dividir e Conquistar
Três passos simples que esse algoritmo vai seguir. </br>

- ➗ **Dividir** o problema em subproblemas
- 🪓 **Conquistar** resolver os subproblemas um por um `recursivamente`.
- 🤝 **Unir** os subproblemas que foram divididos e resolvidos.

➗ `Dividir` </br>
Agora explicando um pouco da parte mais técnica, oque vamos fazer nesse passo é descobrir o **meio** dessa lista, então para isso basta somar a **esquerda** e **direita** da nossa lista, onde esquerda é o índice do primeiro elemento da lista e direita o índice do último elemento da lista (precisamos colocar isso em variáveis pois nem sempre o primeiro elemento da lista é 0 já que vamos dividir a mesma) E após a soma da esquerda e a direita é só dividir por 2 arredondando para baixo.
Um exemplo disso seria:

```C
lista[10, 9, 4, 6, 5, 8, 3]
                m 
```
Aqui nós temos 7 elementos, então a esquerda vale 0 e direita vale 7, ou seja, o meio dessa lista seria o índice 3.

🪓 `Conquistar` </br>
Nesse passo é precisamos ordernar as duas sublistas criadas no passo da divisão, as listas são:

**Esquerda**
```C
lista[esquerda...meio] // lista[10, 9, 4, 6]
```
**Direita**
```C
lista[meio+1...direita] // lista[5, 8, 3]
```

🤝 `Unir` </br>
Agora temos que unir as duas sublistas ordenadas devolta para a lista completa.


## 🐾 Passo a Passo com baralhos
Vamos imaginar que eu e você está jogando um UNO e do nada eu tento explicar o merge sort para você, então vamos lá.

<img src="https://ik.imagekit.io/dwei78ukbe/quick_sort/separacao1_qMdcEiN53.png" />

Esses primeiros passos são bem simples é só dividir tudo recursivamente.

<img src="https://ik.imagekit.io/dwei78ukbe/quick_sort/separacao2_gyTZWabZJ.png" />

Ok dividimos uma lista em duas sublistas, agora essas sublistas também vão ter sublistas.

<img src="https://ik.imagekit.io/dwei78ukbe/quick_sort/separacao3_wRnkMT9Ip.png" />

Eta, tá começando a ficar mais interessante, repara que aqui existe uma lista que tem suas sublistas e essa mesma lista é sublista de outra.

<img src="https://ik.imagekit.io/dwei78ukbe/quick_sort/separacao4_T9FPLPRGu.png" />

Okay aqui nós terminamos de dividir tudo recursivamente, uma observação é que deixamos o 3 lá em cima pois ele já estava sozinho então não precisamos colocar ele em uma outra sublista. Oque nós vamos fazer agora é **conquistar**, vamos focar no 6 e 4 onde 6 é a esquerda e 4 é a direita. Comparando os dois nós vemos que a direita é menor que a esquerda, ou seja, vamos colocar o 4 em cima primeiro.

<img src="https://ik.imagekit.io/dwei78ukbe/quick_sort/uniao1_WMbtoOOWLU.png" />

A nossa direita não tem mais nenhum elemento então vamos apenas jogar o nosso 6 para cima.

<img src="https://ik.imagekit.io/dwei78ukbe/quick_sort/uniao2_IrPIXyiXf_.png" />

Massa demais! agora é só ir repetindo, conquistar e unir, conquistar e unir... Para todas as nossas sublistas. Nas duas sublistas que tem o 10 e 8 vai ser a mesma coisa, nossa direita é menor então joga o 8 primeiro depois o 10.

<img src="https://ik.imagekit.io/dwei78ukbe/quick_sort/uniao3_CigPRHQF6s.png" />

Está vendo que conforme vamos terminando de "conquistar e unir" Algumas sublistas vão sumindo? Esse é o poder da recursividade BB. Okay então 5 e 9 nesse caso a nossa esquerda é menor então joga o 5 primeiro depois o 9.

<img src="https://ik.imagekit.io/dwei78ukbe/quick_sort/uniao4_4iYX5j4AMa.png" />

Massa! Agora as nossas sublistas tem mais de um elemento, repara que todas as nossas sublistas já estão ordenadas 4 e 6, 8 e 10, 5 e 9, 3 e nada.
Aqui não vai ser diferente vamos pegar a esquerda [4, 6] e a direita [8, 10] e conquistar depois unir... Primeiro 4 é menor que oito então joga o 4, depois o 6 é menor que oito então joga o 6, nesse ponto a esquerda vai está vazia então é só jogar o 8 e depois o 10 sem precisar fazer comparações pois já sabemos que a direita já foi organizada assim como todas as outras sublistas.

Agora organizamos uma parte ficando [4, 6, 8, 10] agora precisamos focar nas duas sublistas [5, 9] que é a esquerda e [3] que é a direita. Vamos lá 5 não é menor que 3 então joga o 3 e logo após isso joga o 5 e o 9 pois a direita ficou vazia, assim ficando [3, 5, 9].

<img src="https://ik.imagekit.io/dwei78ukbe/quick_sort/uniao5_8qeEzYCKk.png" />

UAU! Que lindeza, para finalizar a nossa recursão vamos compara a esquerda [4, 6, 8, 10] e a direita [3, 5, 9], 4 não é menor que 3 então sobe o 3, 4 é menor que 5 então sobe o 4... e assim comparando 6 com 5, 6 com 9, 8 com 9, 10 com 9 e finalmente sobrando apenas o 10 como não tem nenhum elemento na direita então sobe o 10.

<img src="https://ik.imagekit.io/dwei78ukbe/quick_sort/finalizado_hz5Bk71SE.png" />

🍾 E pronto!! A lista foi organizada com o merge sort um dos algoritmos de oredenação mais poderosos 🦸‍♂️,  se você está com dificuldades saiba que para entender esse algoritmo complexo precisa de tempo, prática e uma boa pausa sempre vai ser bem-vinda para o seu cérebro assimilar tudo.

🧠 Você pode aprender qualquer coisa e até a próxima.

---
<p align="center">Feito com 💚 por João Victor Ramalho Alves</p>
