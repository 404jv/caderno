#include <stdio.h>
#include <stdlib.h>

int fac(int x);

int main(void) {
  printf("%d", fac(5));
}

int fac(int x) {
  if (x == 0) return 1;

  return x * fac(x - 1);
}


// é a multiplicação de todos os inteiros positivos menores ou iguais a x

// 1 2 3 4

// 4! = 4 * 3 * 2 * 1

/*
  fac(5)
  5 * fac(4)
  5 * fac(4 * fac(3))
  5 * fac(4 * fac(3 * fac(2)))
  5 * fac(4 * fac(3 * fac(2 * fac(1))))
  5 * fac(4 * fac(3 * fac(2 * fac(1 * 1))))
  5 * fac(4 * fac(3 * fac(2 * 1)))
  5 * fac(4 * fac(3 * 2))
  5 * fac(4 * 6)
  5 * 24
  120
*/
