#include <stdio.h>

void swap(int* a, int* b);
void quickSort(int lista[], int esquerda, int direita);
int particao(int lista[], int esquerda, int direita);

int main(void) {
    int lista[6] = {100, 99, 80, 70, 60, 80};
  
    int tamanho = sizeof(lista) / sizeof(lista[0]);
    quickSort(lista, 0, tamanho -1);

    for (int i = 0; i < tamanho; i++) {
        printf("%d ", lista[i]);
    }
}

int particao(int lista[], int esquerda, int direita) {
  int pivot = lista[direita];
  int i = esquerda -1;

  for (int j = esquerda; j <= direita -1; j++) {
    if (lista[j] < pivot) {
      i++;
      swap(&lista[i], &lista[j]);
    }
  }

  swap(&lista[i+1], &lista[direita]);
  return (i + 1);
}

void quickSort(int lista[], int esquerda, int direita) {
  if (esquerda >= direita) return;

  int meio = particao(lista, esquerda, direita);

  quickSort(lista, esquerda, meio -1);
  quickSort(lista, meio +1, direita);
}

void swap(int* a, int* b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}
