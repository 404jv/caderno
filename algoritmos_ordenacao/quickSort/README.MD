# 🔢 Quick Sort
Esse algoritmo é muito comum na computação, basicamente oque define ele é “dividir e conquistar”. Esse algoritmo separa a lista no meio e começa a trocar os valores relativo ao pivot.

## 🐾 Passo a Passo com baralhos
Vamos imaginar eu e você está jogando um truco e simplesmente do nada eu tento te explicar como funciona o QuickSort, então aqui vai:

<img src="https://ik.imagekit.io/dwei78ukbe/quick_sort_original/separacao0_KLjciBcjl0.png" />

A primeira coisa a se fazer é pegar um **pivot**, e aqui é bom ficar atento pois existem algumas formas diferentes de se escolher o pivot.
  - Escolher o primeiro elemento da lista como  pivot.
  - Escolher o último elemento da lista como  pivot.
  - Escolher um elemento aleatório.
  - Escolher o elemento no meio da lista.

`Qual é o melhor?` </br>
Depende do caso, em algumas situações um vai ser melhor que o outro.

Nesse exemplo vamos escolher o último elemento como pivot que é o nosso 5.

<img src="https://ik.imagekit.io/dwei78ukbe/quick_sort_original/separacao1_Cs0_6jZxZs.png" />

Vamos então colocar todos os números menor ou igual a 5 na esquerda da lista, e todos os maiores na direita.
Na esquerda vai ficar o 4 e 3, já na direita vai ficar o 10, 9, 6 e 8.

<img src="https://ik.imagekit.io/dwei78ukbe/quick_sort_original/separacao2_m_mMJldNJh.png" />

Após isso vamos pegar a parte da esquerda e dessa vez escolhendo o 3 como pivot.
Aqui é bem simples vamos jogar o 4 na direita do 3, pois todos os maiores vão para a direita, e acabamos aqui com a esquerda pois já tá em ordem.

<img src="https://ik.imagekit.io/dwei78ukbe/quick_sort_original/separacao3_iUe2BeqJwU.png" />

E agora escolhemos o 8 como pivot, no lado esquerdo vai o 6 e já percebemos que a esquerda do nosso oita já tá em ordem e na direita tá 10 e 9.

<img src="https://ik.imagekit.io/dwei78ukbe/quick_sort_original/separacao4_bHYOfxb6C.png" />

Como a esquerda do oita já está organizada vamos então para a direita escolhendo o 9 como pivot e colocando o 10 na direita do 9 pois os maiores vão para a direita.

<img src="https://ik.imagekit.io/dwei78ukbe/quick_sort_original/separacao5_SvXOXblZw.png" />

Agora que jogamos todos os menores para a esquerda e os maiores na direita, vamos organiza-los, primeiro vamos pegar o 10 e 9 e jogar na direita do 8.

<img src="https://ik.imagekit.io/dwei78ukbe/quick_sort_original/organizacao1_RiHhXg3V0.png" />

E também colocando o 6 na esquerda do 8, fazendo com que subam até lá no 5.

<img src="https://ik.imagekit.io/dwei78ukbe/quick_sort_original/organizacao2_pYLU30IHf.png" />

Também o nosso 4 vai subir para a direita do 3.

<img src="https://ik.imagekit.io/dwei78ukbe/quick_sort_original/organizacao3_htZq8Z7ZA8.png" />

E por fim, vamos colocar a direita (6, 8, 9, 10) na direita do 5 e a esquerda (3, 4) na esquerda do 5.

<img src="https://ik.imagekit.io/dwei78ukbe/quick_sort_original/organizacao4_V7TjD9Wk17.png" />

🎉 E pronto nossa lista foi organizada com o QuickSort, lembrando que se você está com dificuldade saiba que esse algoritmo é realmente difícil (você percebeu kkkk) e precisa de tempo, prática e uma boa pausa é sempre bem-vinda para o seu cérebro assimilar tudo.

🧠 Você pode aprender qualquer coisa e até a próxima.

---
<p align="center">Feito com 💚 por João Victor Ramalho Alves</p>
