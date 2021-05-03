# Creating and manipulating 2D drawings as collections of vectors
• Thinking of 2D vectors as arrows, locations, and ordered pairs of coordinates<br />
• Using vector arithmetic to transform shapes in the plane<br />
• Using trigonometry to measure distances and angles in the plane<br />

Na física é comum considerar o tempo como uma quarta dimensão.<br />

Um vetor 2D é como uma pedaço de papel ou a tela do seu computador, em matemática nós chamamos esse vetor 2D como algo plano com as posições vertical e a horizontal. Para descrever posições no plano, nós precisamos marcar um ponto, esse ponto é chamado de origem (we call that special reference point the origin).<br />

![]()

Como tem vários pontos e todos eles podem ser o de origem, mas só podemos escolher um e para diferenciar o de origem dos outros, é preciso marcar um X que nem na foto acima e para mostrar a  localização de um ponto para o outro, é só usar uma seta.

Um vetor com duas dimensões (2D) é representado com um ponto relativo a origem, ou seja, a seta vai iniciar na origem e ir até outro lugar todo entre esses dois pontos serão parte do nosso vetor 2D.<br />

![]()

Nesse exemplo ligamos um dinossauro, aqui representamos a linha horizontal como o X, e a  vertical como Y, para se referir a elas usamos (X, Y) Por exemplo (6, 4) que é o ponto exato onde a calda do Dinossauro acaba.<br />

Existem algumas maneiras de descrever essa mesma posição, no exemplo acima vimos pelo plano cartesiano e vimos também em coordenadas X e Y, outra maneira é o os vetores:<br />

![]()

## 2.2 Plane vector arithmetic
Para calcular vetores com setas precisamos usar uma regra, chamada "tip-to-tail"
Basicamente se inicarmos uma seta no incio de uma das setas e no final da outra seta, obtemos
a soma dela:

![imagem](https://ik.imagekit.io/dwei78ukbe/math_for_programmers/Screenshot_2021-04-24_210043_qMtDmqOzA.png)


Nós usamos essa soma de vetores para mover objetos ou coleções de pontos, por exemplo:
```py
from chapter2.draw_vectors import *

def add(xy, v): return (xy[0] + v[0], xy[1] + v[1])

dino_vectors = [(6,4), (3,1), (1,2), (-1,5), (-2,5), (-3,4), (-4,4), 
 (-5,3), (-5,2), (-2,2), (-5,1), (-4,0), (-2,1), (-1,0), (0,-3), 
 (-1,-4), (1,-4), (2,-3), (1,-2), (3,-1), (5,1) 
] 

dino_vectors2 = [add((-1.5,-2.5), v) for v in dino_vectors]

draw(
  Points(*dino_vectors, color=blue),
  Polygon(*dino_vectors, color=blue),

  Points(*dino_vectors2, color=red),
  Polygon(*dino_vectors2, color=red)
)
```
Aqui nós pegamos o dinossauro azul e adicionamos (-1.5, -2.5) para cada ponto em um novo 
dinossauro vermelho:
![](https://ik.imagekit.io/dwei78ukbe/math_for_programmers/Screenshot_2021-04-24_211533_p6sSMsKnq.png)

## 2.2.1 Vector components and lengths
O tamanho de um vetor é o tamanho da seta que representa o mesmo, ou seja, a seta começa no ponto de origem (0, 0) e vai até o final desse vetor, todo esse espaço percorrido entre esse dois pontos é o tamanho do vetor assim como é o tamanho dessa seta.

Então se eu tenho vetor (-6, -6), os componentes desse vetor é (-6, 0) e (0, -6), ambos tem o tamaho de 6.

Podemos usar o teorema de Pitaguras, pois caso temos 3 vetores e o tamanho de um deles está faltando, então conseguimos saber o valor do que está faltando, por exemplo: <br />
![](https://ik.imagekit.io/dwei78ukbe/math_for_programmers/Screenshot_2021-04-24_213527_4mckcapWc.png)

Pegando o mesmo exemplo do vetor (-6, -6) o tamanho vai ser a raiz de 6**2 + 6**2 = 36 + 36 = 72, colocando esse resultado na raiz, obtemos aproximadamente 8,485213 que é o tamanho do vetor.

## 2.2.2 multiplying vectors by numbers
Nos podemos multiplicar vetores, se eu tiver um vetor **W = (3, -1)** e precisamos multiplicar o mesmo por 5: <br />
`5 * W = 5 * (3, - 1) = (5 * 3, 5 * -1) = (15, -5)` <br />


## 2.2.3 subtraction, displacement, and distance
Para subtrair um W de um vetor V nós precisamos somar -w com y, ficando **y + (-w)**, ou seja, caso o vetor V seja V = (-1, 3) e W seja W = (2, 2), a soma deles ficariam: v + (-w) = (-1 -2, 3 - 2) = (-3, 1), olhe o resultado no plano:

![](https://ik.imagekit.io/dwei78ukbe/math_for_programmers/Screenshot_2021-04-26_191446_q_IBSgz7C.png)

podemos interpretar as coordenadas de V - W, como a diferença entre as coordenadas de V e W isoladamente. Então utilizamos essa subtração de vetores para saber o quão longe um ponto está do outro, se rodarmos esse código:
```py
from draw_vectors import *

draw ( 
 Points((2,2), (-1,3)), 
 Segment((2,2), (-1,3), color=red) 
) 
```
A subtração entre esse dois vetores V - W = (-3, 1) nos mostra que se começarmos no ponto W, vamos precisar ir 3 pontos a esquerda (x = -3) e um ponto para cima (y = 1), olha no plano: <br />

![](https://ik.imagekit.io/dwei78ukbe/math_for_programmers/Screenshot_2021-04-26_192713_idLSIAZpd.png)

O tamanho de um vetor um número e não um outro vetor que nem o resultado de uma subtração entre vetores, portanto se eu quiser descobrir o tamanho do vetor (-3, 1), precisamos usar o teorema de Pitagoras:<br />
`sqrt((-3)**2 + 1**2) = sqrt(9 + 1) = 3.162...`

### Mini project 2.9:
`Any sum of vectors v + w gives the same result as w + v. Explain why this is true using the definition of 
the vector sum on coordinates. Also, draw a picture to show why it is true geometrically.` <br />
A ordem dos fatores não altera o resultado, pois na soma de vetores precisamos somar o
x de V com o x do W que vai ser o mesmo resultado pois -1 + 2 = 1 e 2 + (-1) = 1, e assim
vale para o y.
```py
from draw_vectors import *

draw (
  Points((-1, 3), (2, 2), (1, 5)),
  
  Arrow((-1, 3), (0, 0), color=blue),
  Arrow((2, 2), (0, 0), color=red),

  Segment((0, 0), (1, 5), color=purple),

  Arrow((1, 5), (2, 2), color=green),
  Arrow((1, 5), (-1, 3), color=green),
) 
```
Na geometria essa soma de W + V e V + W,  forma um paralelogramo e o seu tamanho (representado pela linha roxa) é o valor da soma: <br />

![](https://ik.imagekit.io/dwei78ukbe/math_for_programmers/Figure_1_LI_RgOB3LlTt.jpg)

### Exercise 2.12
Se a soma de (3, -2) + (1, 1) + (-2, -2) é (2, -3), ou seja, o x vale (2, 0) e o y vale (0, -3) isso diz que o 2 "anda" dois pontos a direta e o y anda três pontos para baixo, então y acaba sendo maior do que o x, pois seu comprimento é maior.


### Exercise 2.13
Então se eu tenho vetor (-6, -6), os componentes desse vetor é (-6, 0) e (0, -6), ambos tem o tamaho de 6. (-6, -6) o tamanho vai ser a raiz de 6**2 + 6**2 = 36 + 36 = 72, colocando esse resultado na raiz, obtemos aproximadamente 8,485213 que é o tamanho do vetor. <br />

Já (5, -12) tem os componentes (5, 0) e (0, -12), o primeiro componente tem o tamanho de 5 e o outro de 12 e o tamanho do vetor (5, -12) é 5**2 + 12**2 = 25 + 144 = 169 colocando esse valor na raiz temos 13 que é o tamanho do vetor.

### Exercise 2.14
Podemos usar o teorema de Pitagoras para descobrir um dos catetos, já  que temos a hipotenusa que é 6**2 e um dos catetos que é 1**2. Colocando isso na formula 6**2 = 1**2 + x**2, então x**2 é 35 colocando isso na raiz temos aproximadamente 5,916. Porém essa formula não consegue dizer a direção, pois pode ser tanto (1, 5,916) quanto (1, -5,916).


# Exercise 2.23
for vectors u = (-2, 0), v = (1.5, 1.5), and w = (4, 1), what are the results of the vector subtractions v − w, u − v, and w − v?

u = (-2, 0)
v = (1.5, 1.5)
w = (4, 1)

v - w = (1.5 - 4, 1.5 - 1) = (2.5, 0.5)

u - v = (-2 - 1.5, 0 - 1.5) = (-0.5, -1.5)

w - v = (4 - 1.5, 1 - 1.5) =  (2.5, 0.5)
