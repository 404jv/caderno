#include <stdio.h>
#include <stdlib.h>

void trocar(int* a, int* b);

int main(void) {
  int a = 2;
  int b = 3;

  trocar(&a, &b);
  printf("A vale %d - B vale %d", a, b);
}

void trocar(int* a, int* b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}
