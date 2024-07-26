lista = []

while True:
    num = int(input("digite um numero: "))
    if num not in lista: 
        print("oi")
        lista.append(num)
    r = input("quer continuar?")
    if r == "nao":
        break
listaordenada = lista.sort()
print(listaordenada)
print(lista)

