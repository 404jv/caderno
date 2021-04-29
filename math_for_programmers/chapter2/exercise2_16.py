from draw_vectors import *
from math import sqrt, pi

# (√2, √3)
# π ∙ w?

draw (
  Points((sqrt(2), sqrt(3)), (pi * sqrt(2), pi * sqrt(3))),

  Arrow((sqrt(2), sqrt(3)), (0, 0), color=purple),

  Arrow((pi * sqrt(2), pi * sqrt(3)), (0, 0), color=black)
)
