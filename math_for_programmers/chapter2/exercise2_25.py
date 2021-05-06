from draw_vectors import *
from exercise2_24 import subtract

def length(vector): return sqrt(vector[0]**2 + vector[1]**2)

def distance(v1, v2): return length(subtract(v1, v2))

def perimeter(vectors):
  distances = [
    distance(vectors[i], vectors[(i + 1) % len(vectors)])
    for i in range(0, len(vectors))
  ]
  return sum(distances)


dino_vectors = [
 (6,4), (3,1), (1,2), (-1,5), (-2,5), (-3,4), (-4,4), 
 (-5,3), (-5,2), (-2,2), (-5,1), (-4,0), (-2,1), (-1,0), (0,-3), 
 (-1,-4), (1,-4), (2,-3), (1,-2), (3,-1), (5,1) 
] 

print(perimeter(dino_vectors)) 
