#include <stdio.h>

int main(void) {
  int variavel_int = 2;
  char variavel_char = "c";
  float variavel_float = 3.4;

  // TIPO* PONTEIRO_NOME = &VARIAVEL_NOME;
  int* ponteiro_int = &variavel_int;
  char* ponteiro_char = &variavel_char;
  float* ponteiro_float = &variavel_char;
}