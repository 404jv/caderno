# Quick Sort

Esse algoritmo é muito comum e na computação, basicamente oque define ele é “dividir e conquistar”.  Esse algoritmo separa a lista no meio e começa a trocar os valores da ponta caso for maior ou menor relativo ao pivot.

## Passa a passo
- Encontrar um pivot para a comparação dos elementos;
- Colocar o ponteiro (da esquerda) no primeiro elemento da lista;
- Colocar o ponteiro (da direita) no último elemento da lista;
- Ir comparando o ponteiro da esquerda com o pivot, caso o ponteiro da esquerda for menor doque o pivot, então anda uma posição na lista, mas, caso o ponteiro da esquerda for maior ou igual, então não vá para a próxima posição pois precisaremos dá posição atual.
- Ir comparando o ponteiro da direita com o pivot, caso o ponteiro da direita for maior, então volte uma posição na lista, caso for menor ou igual, fique nessa pois precisaremos dessa posição.
- Se o ponteiro da esquerda for menor ou igual o ponteiro da direita troque os valores dessas posições, ou seja, o valor na posição da esquerda vai para a direita e da direita para a esquerda.
- Após isso vá com o ponteiro da esquerda para a próxima posição e com o da direita volte uma posição, na intenção de que os dois se encontre.
- Caso os ponteiros não encontrar então volte para o primeiro passo.



```C
if (low < high)
{
  pi = partition(arr, low, high);

  quickSort(arr, low, pi - 1); 
  quickSort(arr, pi + 1, high);
}
```

O pi já  está no local certo do array então agora vai ser divido o array no meio antes do pi e depois do pi para volta a organizar.
s
Então os últimos dois parâmetros do quicksort vai decidir se outra recursão vai acontecer.
Low e high

QuickSort(arr, 0, 0 – 1) nesse caso a função ia de 0 até -1 como o 

[0, 7, 8, 154, 61]
