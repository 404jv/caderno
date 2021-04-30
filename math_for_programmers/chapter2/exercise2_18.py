from draw_vectors import *

'''
Suponha que um vetor de comprimento 2.82842712475 tenha as coordenadas (2, 2). Mostre que, 
para qualquer número s, o comprimento de (s ∙ 2, s ∙ 2) é s ∙ 2.82842712475.
'''

'''
x = (2, 2)
c = 2.82
s = 2

(2 * 2, 2 * 2) = (4, 4)
hip = 5.65

s * c = 2 * 2.82 = 5.65
'''

'''
vetor = (2, 3)
vetor_comprimeto = 3.6
s = 3

(3 * 2, 3 * 3) = (6, 9)
hip = 10.8 (comprimeto do novo vetor (6, 9))

vetor_comprimeto * s = 3.6 * 3 = 10.8 (o mesmo valor)
'''

draw (
  Points((2, 2)),

  Segment((0, 0), (2, 2))
)
