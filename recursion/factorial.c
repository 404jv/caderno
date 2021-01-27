#include <stdio.h>
#include <stdlib.h>

int fac(int n);

int main(void) {
  printf("%d", fac(4));
}

// direta x tail
int fac(int n) {
  if (n == 0) return 1;

  return n * fac(n -1);
}
