# Lista de listas com dados dos produtos
produtos = [
    ["Maçã", "10", "0.50"],s
    ["Banana", "5", "0.30"],
    ["Laranja", "8", "0.40"]
]

for linha in range(len(produtos)):
	nome = produtos[linha][0]
	quantidade = int(produtos[linha][1])
	preco = float(produtos[linha][2])
	valor_total = quantidade * preco
	print(f"Produto: {nome}, Quantidade: {quantidade}, Preço: {preco}, Valor Total: {valor_total:.2f}")


for linha in produtos:
	nome = linha[0]
	quantidade = int(linha[1])
	preco = float(linha[2])
	valor_total = quantidade * preco
	print(f"Produto: {nome}, Quantidade: {quantidade}, Preço: {preco}, Valor Total: {valor_total:.2f}")
