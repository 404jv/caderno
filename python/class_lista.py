# brinquedos = ["Bola", "Boneca", "Urso", "Dinossauro"]

## Com index
# print(brinquedos[0])
# print(brinquedos[1])
# print(brinquedos[0:2])
# print(brinquedos[-1])

## Com for in
# for c in brinquedos:
#   print(c)

## Len
# print(len(brinquedos))

## Com for range
# for c in range(0, len(brinquedos)):
#   print(f'{brinquedos[c]} está na posição {c}')

## For com enumerate
# for pos, brinquedo in enumerate(brinquedos):
#   print(f'Eu vou brincar com {brinquedo} na posição {pos}')


brinquedos = ["Bola", "Boneca", "Urso", "Dinossauro"]

brinquedos[0] = "Bola de Futebol"
brinquedos.append("Bola")
brinquedos.sort(reverse=True)
brinquedos.insert(3, "Power Rangers")
print(brinquedos)
brinquedos.pop()
if "Bola" in brinquedos:
  brinquedos.remove("Bola")
else:
  print("Não achei uma bola")
print(f'Essa lista tem {len(brinquedos)} brinquedos.')