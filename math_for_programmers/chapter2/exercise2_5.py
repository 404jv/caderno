from draw_vectors import *

draw (
  Points(*[(x, x**2) for x in range(-10, 11)]),
  grid=(1, 10),
  nice_aspect_ratio=False
)
