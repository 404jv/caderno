celsius_str = input("Digite a temperatura em graus Celcius: ")

if celsius_str.isdigit():
  celsius = float(celsius_str)
  fahrenheit = celsius * 9/5 + 32
  print(f'A temperatura em Fahrenheit é: {fahrenheit:.2f}')
else:
  print("Entrada inválida. Por favor, digite um número.")
