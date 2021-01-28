# 📂 Recursão
Recursividade dá a possibilidade de uma função chamar ela mesma.

como nesse exemplo:
```C
int ateZero(int num) {
  if (num == 0) return 0;

  return ateZero(num -1);
}
```

## 🐾 Passo a passo da função:
  - Verificar se num é igual a 0, se for retorne 0;
  - caso não for retorne ateZero(num -1);

`Identificar` o objetivo da função é muito importante para entender ela, no caso dessa o objetivo é diminuir uma variável num até 0.

---

## 📏 Regras

As funções recursivas possuem regras, são elas:
  - **Tenha sempre** ao menos um caso base;
  - Tenha um local aonde a recursividade vai acontecer (a função vai se chamar);
  - Altere o estado para que fique mais próximo do caso base á cada chamada da função;

`caso base` é a cadição onde vai parar o loop de chamadas, no exemplo anterio era:
```C
if (num == 0) return 0;
```

`Onde a recursividade acontece?` </br>
Vai depender do tipo de recursividade, normalmente no final que são as `funções recursivas diretas`
porém com tudo toda via, a recursão pode acontecer no meio que são as `funções recursivas indiretas`.

`Altere o estado` </br>
No nosso exemplo anterior alteramos o estado da num nessa linha:

```C
return ateZero(num -1);
```
Repare que pode existir muitas funções ateZero e muitas variáveis num então nessa linha acima é alterando o valor da num da próxima função, se eu passar 3 nessa função vai ser mais ou menos essa lógica:

```C
ateZero(3);
```
O compilador vai vê que não é 0, então chama ela de novo, só que passando n - 1, como n vale 3 então  3 - 1 é 2.

```C
ateZero(2);
```
Mesma coisa 2 não é, então n - 1, 2 - 1 é 1.

```C
ateZero(1);
```
Mesma coisa 1 não é 0, então chama ela mesma passando 1 - 1.

```C
ateZero(0);
```

Quando iniciar essa função, o valor vai cair no caso base que é:

```C
if (num == 0) return 0;
```

Basicamente o compilador vai retornar 0 para a função de cima, que por sua vez retornar para a de cima e assim por diante... Até chegar na primeira função que foi executada e retornar 0 para onde a função foi chamada tipo lá na main().

---
## 🎯 Recursão direta

É a recursão que a função chama ela mesma.

---
## 👉👈 Recursão indireta 

É a recursão que a função X chama uma função Y que chama a função X...

---
## 🐕 Recursão TAIL (com calda)

A função onde a `recursão está no final da função`, ou seja, função tail.

**Estrutura:**
```C
int ateZero(int num) {
  // CASO BASE
  if (num == 0) return 0;

  // RECURSÃO
  return ateZero(num -1);
}
```
---
## 🐑 Recursão NON-TAIL (sem calda)
Aqui a `recursão não está no final`, a **estrutura** é essa:

```C
void ateZero(int x) {
  // CASO BASE
  if (x == 0) return;

  // RECURSÃO
  ateZero(x -1);

  // FINAL
  printf("%d ", x);
}
```
