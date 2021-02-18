#include <stdio.h>
#include <stdlib.h>


void printLista(int arr[], int tamanho);
void merge(int arr[], int esquerda, int meio, int direita);
void mergeSort(int arr[], int esquerda, int direita);

int main(void) {
  int arr[] = {7, 4, 10, 8, 5, 7, 3};
  int n = sizeof(arr) / sizeof(arr[0]);

  mergeSort(arr, 0, n -1);
  printLista(arr, n);
}

void printLista(int arr[], int tamanho) {
  for (int i = 0; i < tamanho; i++)
    printf("%d ", arr[i]); 
  printf("\n");
}

void merge(int arr[], int esquerda, int meio, int direita) {
  int fim_esquerda = meio - esquerda +1;
  int fim_direita = direita - meio;
  int esq, dir, lis;

  int subEsq[fim_esquerda], subDir[fim_direita];

  for (esq = 0; esq < fim_esquerda; esq++)
    subEsq[esq] = arr[esquerda + esq];
  for (dir = 0; dir < fim_direita; dir++)
    subDir[dir] = arr[meio + 1 + dir];

  printLista(subEsq, fim_esquerda);
  printLista(subDir, fim_direita);

  esq = dir = 0; 
  lis = esquerda;

  while (esq < fim_esquerda && dir < fim_direita) {
    if (subEsq[esq] <= subDir[dir]) {
      arr[lis] = subEsq[esq];
      esq++;
    } else {
      arr[lis] = subDir[dir];
      dir++;
    } 
    lis++;
    printLista(arr, 7);
  }

  while (esq < fim_esquerda) {
    arr[lis] = subEsq[esq];
    esq++;
    lis++;
    printLista(arr, 7);
  }

  while (dir < fim_direita) {
    arr[lis] = subDir[dir];
    dir++;
    lis++;
    printLista(arr, 7);
  }
}

void mergeSort(int arr[], int esquerda, int direita) {
  if (esquerda >= direita) return;

  int meio = esquerda + (direita - esquerda) / 2;

  mergeSort(arr, esquerda, meio);
  mergeSort(arr, meio +1, direita);

  merge(arr, esquerda, meio, direita);
}
