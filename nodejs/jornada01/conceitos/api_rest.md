> 💡 Pergunta: O que é uma API REST e quais os seus conceitos?

Responda aqui:<br/>

Uma API Rest (Representation state transfer), é uma **API que segue o modelo de arquitetura Rest**.<br/>

Esse modelo Rest é composto por 6 regras, são elas:<br/>
- Cliente-server<br/>
    Essa regra diz que o **client deve ser separado do servidor**, ou seja, antigamente na Web a gente tinha uma aplicação que tinha o servidor (API, backend, regra de negócio) junto com o que nos chamamos hoje em dia de client (frontend, HTML, CSS). Então essa regra diz para separa esses dois. O client não pode saber o que acontece dentro do server, e vice e versa.<br/>
- Stateless<br/>
    Essa regra diz que o **API não deve armazenar as requests anteriores**, ou seja, se eu fizer uma request agora, e depois eu querer fazer outra, eu vou precisar mandar da mesma forma, com os mesmo dados, pois o server vai tratar essa request com uma nova sem relação com a anterior. E nenhum informação do usuário é recebida através de requests GET.

- Cache<br/>
    Essa regra diz que a API deve possuir o suporte para cache, pois **armazenar dados em cache para otimizações de futuras requests** entre o cliente e server. Caso não seja necessário o uso do cache, então não use, mas se em um futuro precisar a API deve seguir essa regra.

- Interface Uniforme <br/>
    Essa regra mostra que a API deve padronizar o formato do envio de dados,  para isso é preciso que:

    - Identificação dos recursos<br/>
        É preciso que os recursos sejam identificáveis, por exemplo: https://endereco.com.br/produtoX, nesse caso eu sei bem o que eu quero só de olhar a URL que é o produto X.

    - Representação dos recursos<br/>
        Os recursos que o cliente recebe podem ser manipulados e que contenha as informações para fazer essa manipulação, ou seja, o servidor pode usar resposta como o JSON, XML e entre outras respostas.

    - Mensagens auto descritivas<br/>
        As respostas que a API der devem ser bem claras, então se uma API der uma reposta de error, é preciso responder o tipo desse erro (foi do cliente ou do servidor), o que acontecer e etc...

    - HATEOAS<br/>
        HATEOAS é uma sigla para (Hypertext as the Engine of the application state), o cliente pode receber links como resposta ao acesso de um recurso.

- Camadas<br/>
    Essa regra diz que o server da API, precisa ser separado por camadas (camada da segurança, carregamentos e etc...) E que o cliente não precisa saber sobre elas.

- Código sob demanda<br/>
    Essa é uma regra opcional, e diz que o cliente pode receber do servidor um código executável, com o objetivo de maximizar possibilidades de funções dessa API.

## API

é um sigla para Application programming interface. A API basicamente é a forma em que uma aplicação vai se comunicar com a(s) outra(s).

## Documentação

Algo super importante para ter uma API saudavel e bem comunicativa são as documentações, são elas que deixam claro:

- O que o cliente precisa para consumir essa API
- O que essa API resolve
- As diferentes rotas que essa API tem
- As respostas dessa API