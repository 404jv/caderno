# Names
Criar nomes bons para variáveis, funções, diretórios e etc... Leva tempo e esforço, porém salva mais do que leva, então investir tempo em nomear vale a pena e caso pensarmos em nomes melhores mundamos o antigo. <br/>

O nome de uma variável, função ou classe deve dizer o porque da criação da mesma, o que ela faz, e como é usado. Caso precisa de um comentário é porque o nome não é bom.<br/>

## Não faça isso
Palavras como 'a', 'an' e 'the' são redundancias, na maioria das vezes não vão significar nada e não vai dar sentido a variável, classe ou função. A palavra "variável" não deve aparecer no nome de uma variável, o tipo não devira, usar nameString vai ser melhor do que name? Ou userData vai ser melhor do que user? Ou seja, usar essas palavras não dá significado a coisa. <br/>

O tamanho de um nome de uma variável tem que corresponder com o escopo em que ela se encontra, então se tratar de um escopo pequeno, as vezes faz sentido criar uma vairável "i".<br/>

Compara:
```java
for (int j=0; j<34; j++) {
s += (t[j]*4)/5;
}
```

com

```java
int realDaysPerIdealDay = 4;
const int WORK_DAYS_PER_WEEK = 5;
int sum = 0;
for (int j=0; j < NUMBER_OF_TASKS; j++) {
  int realTaskDays = taskEstimate[j] * realDaysPerIdealDay;
  int realTaskWeeks = (realdays / WORK_DAYS_PER_WEEK);
  sum += realTaskWeeks;
}
```

## Class names
Nomes de classes não podem ser um verbo, use nomes tipo: postPayment, deletePage or save, mas evite nomes tipo: Manager, Processor, Data or Info. No nome de uma classe coloque substantivos.

## Method names
nomes de metódos devem ser verbos, sempre com uma ação, por exemplo: deletePage, postPayment, getUser e etc...  

```java
string name = employee.getName();
customer.setName("mike");
if (paycheck.isPosted())...
```
