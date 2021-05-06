from draw_vectors import *
from exercise2_25 import distance

for n in range(-12, 15):
  for m in range(-14, 13):
    if distance((n, m), (1, -1)) == 13 and n > m > 0:
      print((n, m))
