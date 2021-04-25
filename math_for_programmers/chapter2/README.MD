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

Podemos usar o teorema de Pitaguras, pois caso temos 3 vetores e o tamanho de um deles está faltando, então conseguimos saber o valor do que está faltando, por exemplo:
![](https://ik.imagekit.io/dwei78ukbe/math_for_programmers/Screenshot_2021-04-24_213527_4mckcapWc.png)

