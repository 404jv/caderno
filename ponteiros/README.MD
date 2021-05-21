<h1 align="center">👉 Ponteiros</h1>
Ponteiros são locais onde podemos armazenar endereços de memória, então assim como em uma variável inteira eu posso colocar números inteiros, em um ponteiro eu posso colocar endereço que me leva até algum lugar da memória ram.

### ❓ Por quê usar?
Quando queremos ter acesso a variáveis criadas em outro escopo nós não podemos acessá-las diretamente e se tentarmos passar essas variáveis para um outro escopo através da chamada da função, o que vamos estar fazendo é criando cópias dessas variáveis, por exemplo:

```C
void trocar(int a, int b) {
  int temp = a;
  a = b;
  b = temp;
}
```
Aqui nós temos uma função que na teoria troca dois valores, A recebe B e B recebe A. Para fazer isso precisamos criar uma variável temporária (temp) que recebe o valor de A, para assim nós não perdermos esse valor quando executar a =  b, após isso b = temp, que está armazenando o valor antigo de A. E para não ficar muito abstrato vamos passar alguns valores e ver o que realmente acontece.
```C
int main(void) {
  int a = 2;
  int b = 3;
 
  trocar(a, b);
  printf("A vale %d - B vale %d", a, b);
}
```
Então lá na minha main, eu criei duas variáveis A e B e agora eu quero trocar as duas, porém o resultado é esse:
```bash
A vale 2 - B vale 3
```
😱 doidera, né? Basicamente o que está acontecendo aqui é que na hora de passar A e B a função trocar() vai criar outro A e B, ou seja, vai chegar em momento do nosso código que vai existir duas variáveis A e duas B, uma A da main( ) e outra A exatamente igual só que da troca() e a mesma coisa para B, como resolvemos isso? Com eles senhoras e senhores, os ponteiros… Nossos verdadeiros heróis 🦸‍♂️.

### 🏡 Aonde você mora?
Lembra quando você aprendeu sobre variáveis? Provavelmente você ouviu falar que variáveis são espaços na memória que eu posso guardar valores lá dentro, e esses espaços podem ser vistos como um quadradinho, ou seja, a memória ram do computador é composta por vários quadradinhos e quando eu crio uma variável basicamente eu estou pegando um quadradinho e dando um nome para ele e o mais legal é que cada um desses quadradinhos tem um endereço que me leva exatamente aonde fica esse quadradinho na memória ram. Eu quero que você entenda isso porque a variável não é a única forma de eu ter acesso a um valor que está em um quadradinho, eu posso usar o endereço dele também.

### 🌆 Endereços
Então, cada variável do nosso código tem um endereço e podemos ter acesso a ele dando um print, para isso precisamos utilizar o “&”, um operador que mostra para o compilador que queremos o endereço da variável e não o valor, por exemplo:
```C
int main(void) {
  int n;
 
  printf("Valor da variável n: %d", n);
}
```
Caso eu queira fazer outro print mostrando o endereço da variável N, eu vou o %p e eu preciso colocar “&” ao lado da variável N, então código ficaria assim:
```C
int main(void) {
  int n;
 
  printf("Valor da variável n: %d", n);
  printf("Endereço da variável n: %p", &n);
}
```
O segundo print vai mostrar algo parecido com isso “0061FF1C” esse código muito loco é caracteres em hexadecimal gerados aleatoriamente, e por motivos de segurança esses códigos ficam mudando a cada vez que um programa é iniciado.

### 👻 Pra que todo esse medo?
Ponteiros não passam de endereços! Uma das coisas que mais assustam na programação, mas é tranquilo… Então se pode ter reparado que um endereço não é nada amigável “0061FF1C” e como nós vamos guardar esses carinhas? Em uma variável? Nós poderíamos usar uma lista? 🤔, é aqui que vai entrar o ponteiro, que são essas variáveis com super poderes, ou seja, os endereços vão ficar dentro dos ponteiros e quando precisarmos, podemos ir direto na memória para pegar o valor que o endereço nos leva ou melhor o lugar onde o ponteiro aponta.

### 🕕 Declarando Ponteiros
A declaração de um ponteiro é bem parecida com a de uma variável, então já vamos com alguns exemplos:
```C
int main(void) {
  int variavel_int = 2;
  char variavel_char = "c";
  float variavel_float = 3.4;
 
  // TIPO* PONTEIRO_NOME = &VARIAVEL_NOME;
  int* ponteiro_int = &variavel_int;
  char* ponteiro_char = &variavel_char;
  float* ponteiro_float = &variavel_char;
}
```
Algo muito importante é usar o “*”, um operador que na declaração vai mostrar para compilador que isso é uma declaração de ponteiro e não de variável. Provavelmente você já declarou várias variáveis em uma única linha, certo? E você pode fazer isso com ponteiros e algo que precisamos ficar atento é nisso:
```C
int main(void) {
  int* a, b, c;
}
```
Aqui o compilador iria criar 1 ponteiro e mais duas variáveis, se o meu objetivo fosse criar três ponteiros eu precisaria usar um “*” para cada ponteiro, então:
```C
int main(void) {
  int* a, *b, *c;
}
```
Agora sim nós temos 3 ponteiros.

### 👈 Apontando para outro lugar
Podemos fazer um ponteiro apontar para outra variável, apenas fazendo isso:
```C
int main(void) {
  int variavel_int = 2;
  int outra_int = 3;

  int* ponteiro_int = &variavel_int;

  ponteiro_int = &outra_int;
}
```

### 🥇 Me diz pra onde tu apontas e eu direi quem tu és
Para mostrar o valor que um ponteiro está apontando basta colocar o "*":
```C
int main(void) {
  char variavel_char = "c";
  char* ponteiro_char = &variavel_char;

  printf("Valor: %c", *ponteiro_char); // output: c
}
```

### ☝ Pra onde tu apontas?
Agora caso tu queira ver o endereço que algum ponteiro guarda basta dar um print usando o "%p":
```C
int main(void) {
  float variavel_float = 3.12;
  float* ponteiro_float = &variavel_float;

  printf("Endereço que está dentro do ponteiro: %p", ponteiro_float);
}
```

### 😵 O endereço do endereço?
Como eu tinha dito lá em cima, tudo na memória tem um endereço e se os ponteiros estão na memória logo eles tem endereços, ou seja, um espaço na memória que guarda um endereço que também tem o seu próprio endereço único, para ver esse endereço:

```C
int main(void) {
  float variavel_float = 3.12;
  float* ponteiro = &variavel_float;

  printf("Endereço do ponteiro: %p", &ponteiro);
}
```
Repara que para ver o endereço que esse ponteiro guarda eu não uso o "&", mas para eu ver o próprio endereço desse ponteiro, eu preciso usar "&".


## 🥊 O Ultimato
Agora vamos resolver o problema que encontramos lá em cima, na função main(), temos:
```C
int main(void) {
  int a = 2;
  int b = 3;
 
  trocar(a, b);
  printf("A vale %d - B vale %d", a, b);
}
```
duas variáveis a e b, essas duas como qualquer outra tem um endereço único que podemos ter acesso com “&” então que tal passarmos eles nessa chamada da função trocar() 🤔, ficando assim:
```C
int main(void) {
  int a = 2;
  int b = 3;
 
  trocar(&a, &b);
  printf("A vale %d - B vale %d", a, b);
}
```
Nice! Agora precisamos receber esses endereços lá na nossa trocar():
```C
void trocar(int a, int b) {
  int temp = a;
  a = b;
  b = temp;
}
```

Lembra que endereços são meio espaçosos? Então não conseguimos colocar eles em variáveis comuns, só que podemos coloca-los em ponteiros, ou seja, vamos mudar esses parâmetros a e b com um “*”:
```C
void trocar(int* a, int* b) {
  int temp = a;
  a = b;
  b = temp;
}
```
Só isso não basta, nós precisamos mostrar para o compilador que nós não estamos falando do endereço deles e sim dos lugares onde esses endereços nos leva, ou seja, quando quisermos acesso ao valor que o ponteiro aponta nós vamos colocar “*” também:
```C
void trocar(int* a, int* b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}
```
Então *a vale 2, então temp vai ficar valendo 2, agora *a recebe *b, como o *b vale 3 então *a agora vale  3, e por fim *b recebe temp, temp vale 2 então *b fica valendo 2. Agora você pode testar os valores que quiser usando essa função ae!.</br>

🎉 Pronto! Espero que esse mini artigo sobre ponteiros tenha ajudado, saiba que esse é um dos topicos mais difíceis da programação e precisa de tempo, prática e uma boa pausa é sempre bem-vinda para o seu cérebro assimilar esse conceito.</br>

🧠 Você pode aprender qualquer coisa e tenha um ótimo dia.

---
<p align="center">Feito com 💚 por João Victor Ramalho Alves</p>
