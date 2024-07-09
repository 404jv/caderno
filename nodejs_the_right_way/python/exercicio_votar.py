idade_str = input("Digite sua idade: ")

if idade_str.isdigit():
  idade = int(idade_str)
  if idade >= 16:
    print("Você pode votar.")
  else:
    print("Você não pode votar.")
else:
  print("Entrada inválida. Por favor, digite um número inteiro!")
