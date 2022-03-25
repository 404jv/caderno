# 🥊 GraphQL

### Problemas que o gql resolve

- Over Fetching
    - Retorna mais do que devia.
- Under Fetching
    - Retorna menos do que devia.

O GQL tem o objetivo de deixar o front end escolher quais dados ele quer.

Então, existe uma rota fixa:

```
http://localhost:3333/graphql
```

Nessa rota pode ser passado os dados que front vai querer em, assim:

```gql
query {
	users {
		id
		name
		age
		
		addresses {
			city
			state
			country
		}
	}
}
```

Na query acima, é pedido os usuários com seus devidos endereços e mais interessante ainda é que podemos escolher qual coluna queremos.

### Dificuldades

- Cache
    
    Como uma API GraphQL tem apenas uma rota os dados retornado pelo back será diferente há todo momento, diferente do REST que existe uma padronização e por conta disso os caches são até feitos pelo browser.
    
- Errors
    
    Uma API GraphQL sempre retorna status 200. Diferente de uma API REST, assim os códigos HTTP não são usados e sim outras formas de tratar erros. (que eu não sei).
    

### Padrões

- Code first
    - Conforme criamos o código, já é gerado automaticamente o Schema no `schema.gql`.
- Schema first

### Anotações

- `resolvers` são as nossas rotas.
- Query
    - Sempre que queremos buscar dados montamos uma query. Exemplo:
    
    ```gql
    @Query(() => [User])
      async hello() {
        return this.data;
    }
    ```
    
- Mutation
    - Sempre queremos fazer uma operação CREATE, DELETE, UPDATE fazemos uma mutation. Exemplo:
    
    ```gql
    @Mutation(() => User)
      async createUser(
        @Arg('name') name: string
      ) {
        const user = { id: randomUUID(), name };
    
        this.data.push(user);
    
        return user;
    }
    ```
