#include <stdio.h>

int main(void) {
  int n1 = 2;
  int* p = &n1;


  printf("p: %p\n", p);
  printf("p: %p\n", &p);
}