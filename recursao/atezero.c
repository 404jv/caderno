#include <stdio.h>
#include <stdlib.h>

int ateZero(int num) {
  // caso base
	if (num == 0) return 0;

  // recursão e final
	return ateZero(num -1);
}

int main(void) {
	ateZero(3);
}


/*
  ateZero(3) 0
    ateZero(2) 0
      ateZero(1) 0
        ateZero(0) 0
*/
