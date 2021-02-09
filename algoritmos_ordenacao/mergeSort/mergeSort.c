#include <stdio.h>
#include <stdlib.h>


void printArray(int arr[], int size);
void merge(int arr[], int l, int m, int r);

int main(void) {
  int arr[] = {12, 11, 13, 5, 6, 7};
  int n = sizeof(arr) / sizeof(arr[0]);

  printArray(arr, n);
}

void printArray(int arr[], int size) {
  for (int i = 0; i < size; i++) {
    printf("%d ", arr[i]); 
  }

  printf("\n");
}

void merge(int arr[], int l, int m, int r) {
  
}
