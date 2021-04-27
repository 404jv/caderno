from draw_vectors import *

# V = (-1, 3) e W seja W = (2, 2)

# V + W = (-1 + 2, 3 + 2) = (1, 5)
# W + V = (2 + (-1), 2 + 3) = (1, 5)

# A ordem dos fatores não altera o resultado, pois na soma de vetores precisamos somar o
# x de V com o x do W que vai ser o mesmo resultado pois -1 + 2 = 1 e 2 + (-1) = 1, e assim
# vale para o y.

draw (
  Points((-1, 3), (2, 2), (1, 5)),
  
  Arrow((-1, 3), (0, 0), color=blue),
  Arrow((2, 2), (0, 0), color=red),

  Segment((0, 0), (1, 5), color=purple),

  Arrow((1, 5), (2, 2), color=green),
  Arrow((1, 5), (-1, 3), color=green),
) 
