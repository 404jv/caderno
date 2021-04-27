from draw_vectors import *

def translate(translation, vectors):
  return [(xy[0] + translation[0], xy[1] + translation[1]) for xy in vectors]

print(translate((1,1), [(0,0), (0,1,), (-3,-3)]))
