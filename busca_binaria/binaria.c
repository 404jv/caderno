#include <stdio.h>

int buscaBinaria(int lista[], int esquerda, int direita, int elemento) {
  if (direita < esquerda) return -1;
 
  int meio = esquerda + (direita - esquerda) / 2;

  if (elemento == lista[meio]) return meio;

  if (elemento < lista[meio]) 
    return buscaBinaria(lista, esquerda,  meio -1, elemento);

  return buscaBinaria(lista, meio +1, direita, elemento);
}

int main(void) {
  int lista[] = { 2, 3, 4, 10, 40 };
  int tamanho = sizeof(lista) / sizeof(lista[0]); 
  int elemento = 5; 

  printf("%d", buscaBinaria(lista, 0, tamanho - 1, elemento)); 
}
