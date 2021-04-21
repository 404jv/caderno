#include <stdio.h>

char status_aluno(float nota);

int main(void) {
  printf("%c", status_aluno(70));
}

char status_aluno(float nota) {
  if (nota >= 60) return 'A';
 
  if (nota < 60 && nota > 30) return 'O';
 
  return 'R';
}
