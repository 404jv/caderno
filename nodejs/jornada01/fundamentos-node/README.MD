> 💡 Pergunta: Como criar um projeto com Node.js e qual a principal ferramenta para trabalhar com rotas?

Responda aqui<br/>

Para iniciar um projeto com npm

```bash
npm init
```

Já para inciar um projeto com yarn

```bash
yarn init
```

A principal ferramenta é o Express.<br/><br/>


> 💡 Pergunta: Para que serve o Nodemon e como ele nos ajuda durante o desenvolvimento?

Responda aqui:<br/>

Nodemon é uma dev dependence, que são dependências usadas apenasa no desenvolvimento, geralmente para melhorar a produtividade dos dev's. O nodemon é uma dessas, ele faz esse restart na aplicação todo hora que é feito uma mudança do código.<br/><br/>

> 💡 Pergunta: Com o [Express](http://expressjs.com/), como podemos utilizar os métodos HTTP? (Exemplifique com código se achar necessário)

Responda aqui:<br/>

Primeiro é necessário a importação do express e a instância do mesmo, que pode ser feito assim:

```jsx
const express = require('express');

const app = express();
```

com a instância que eu chamei de **app**, podemos criar rotas que possuem o tipo HTTP, que é feito assim:

```jsx
app.TIPO_HTTP('/NOME_DA_ROTA');
```

Primeiro a instância, depois o método que pode ser o GET, POST, PATCH, PUT e entre outros... Independentemente do tipo eles terão o primeiro parâmetro que é um string que diz o nome da rota, alguns exemplos:

```jsx
app.get('/courses');
```

Nesse é uma rota courses do tipo GET.

```jsx
app.post('/v1/users');
```

Aqui é uma rota v1 e users, então a URL ficaria assim: [http://endereco.com/v1/users](http://endereco.com/v1/users).<br/><br/>

> 💡 Pergunta: Para que serve esse tipo de ferramenta? Em que ela nos ajuda durante o desenvolvimento?

Responda aqui:<br/>

Devido aos navegadores (Google Chrome, Edge, Opera, Fire Fox) Enviar apenas request do tipo GET, precisamos de ferramentas mais avançadas para testar as rotas da nossa API, então o insomnia  e Postman são navegadores com mais funcionalidades para desenvolvedores, ou seja, requests do tipo DEL, PUT, PATCH, POST e inclusive GET se tornam mais acessível para se fazerem.<br/><br/>

> 💡 Pergunta: Quais os tipos de parâmetros que podemos receber nas rotas e como acessá-los com o [Express](http://expressjs.com/)? (Exemplifique com código se achar necessário)

Responda aqui:<br/>

## 🪂 Parâmetros

- Route parameters ⇒ Identificar um produto (deletar, buscar, editar), obrigatório
- Query parameters ⇒ Paginação filtros, opcional
- Body parameters ⇒ Inserção, alteração (geralmente utilizam JSON)

Para pegar route parameters com o express já instanciado:

```jsx
app.put('/courses/:id', (req, res) => {
  return res.json({ message: `O id é ${id}` });
});
```

Sempre separado com / e com o nome depois do :, nesse caso é um parâmetro chamado id, lembrando que **parâmetros routes são obrigatórios**

```jsx
app.put('/courses/:id', (req, res) => {
  return res.json({ message: `O id é ${id}` });
});
```

Já no query parameters são:

```jsx
app.get('/courses', (req, res) => {
  const { page, filtro } = req.query;

  return res.json({ message: `A página é ${page} e o filtro ${filtro}`});
});
```

Aqui eu desestruturei e peguei apenas os queries que eu quero, porém eu poderia pegar todos apenas guardando o objeto que vem do req.query.<br/>

Agora para o body, é necessário que explicitar para o express que vamos utilizar o JSON, então antes das rotas, colocamos essa linha:

```jsx
app.use(express.json());
```

Após isso podemos ter acesso ao body do tipo JSON de uma request, assim:

```jsx
app.post('/courses', (req, res) => {
  const { name, age } = req.body;

  return res.json({ message: `O nome é ${name} e a idade ${age}`});
});
```
<br/><br/>