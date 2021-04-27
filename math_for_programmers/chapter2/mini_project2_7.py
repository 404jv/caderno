from draw_vectors import *

def add(*vectors): 
  return (sum(x[0] for x in vectors), sum(y[1] for y in vectors))

print(add((1, 2), (2, 4), (3, 6), (4, 8)))
