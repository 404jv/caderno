#include <stdio.h>
#include <stdlib.h>

int fac(int x, int count);

int main(void) {
  printf("%d", fac(5, 1));
}

int fac(int x, int count) {
  if (x == 0) return count;

  return fac(x - 1, x * count);
}

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

/*
  fac(5)
  fac(4, 5)
  fac(3, 20)
  fac(2, 60)
  fac(1, 120)
  fac(0, 120)
*/
