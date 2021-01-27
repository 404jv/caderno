#include <stdio.h>
#include <stdlib.h>

int n = 0;

void sucessor();
void antecessor();

int main(void) {
  antecessor();
}

void antecessor() {
  if (n > 10) return;

  printf("O antecessor de %d = %d\n", n, n-1);
  sucessor();
}

void sucessor() {
  // caso básico
  if (n > 10) return;

  printf("O sucessor de %d = %d\n", n, n+1);
  n++;
  // recursão
  antecessor();
}
