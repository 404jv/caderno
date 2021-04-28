from draw_vectors import *
from exercise2_8 import translate

dino_vectors = [(6,4), (3,1), (1,2), (-1,5), (-2,5), (-3,4), (-4,4), 
 (-5,3), (-5,2), (-2,2), (-5,1), (-4,0), (-2,1), (-1,0), (0,-3), 
 (-1,-4), (1,-4), (2,-3), (1,-2), (3,-1), (5,1) 
] 


def hundred_dinos():
  translations = [(12 * x, 10 * y) for x in range(-5, 5) for y in range(-5, 5)]

  dinos = [
    Polygon (
      *translate(dino_translate, dino_vectors), color=blue
    ) for dino_translate in translations
  ]

  draw(*dinos, grid=None, axes=None, origin=None)

hundred_dinos()
