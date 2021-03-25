#include <stdio.h>
#include <stdlib.h>

int main(void) {
  char a[3] = { 'J', 'a' };

  char* nome;
  nome = "Jao";
  printf("%s", nome);

  free(nome);
}