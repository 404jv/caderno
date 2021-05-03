from draw_vectors import *
from exercise2_17 import scale
from random import uniform

def random_r(): return uniform(-3, 3)
def random_s(): return uniform(-1, 1)
def add(vector_x, vector_y): return (vector_x[0] + vector_y[0], vector_x[1] + vector_y[1])

u = (-1, 1)
v = (1, 1)

possibilities = [
  add(scale(random_r(), u), scale(random_s(), v)) 
  for i in range(0, 500)
]

draw (
  Points(*possibilities),
)
