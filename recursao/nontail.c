#include <stdio.h>
#include <stdlib.h>

void ateZero(int x) {
  // caso base
  if (x == 0) return;

  // recursão
  ateZero(x -1);
  // final
  printf("%d ", x);
}

int main(void) {
  ateZero(3);
}

// 120 x 24 x 6 x 2 x 1 x 1