> 💡 Pergunta: O que é o Node.js e quais as suas características (`Event Loop`)?

Responda Aqui<br/>

Node é uma plataforma que permite rodar JavaScript na server side, através da V8 e da Libuv.<br/>

Event loop é um loop single-thread, responsável por receber eventos (requisições, funções) e **delegar um por um em uma thread que está fazia**, ou seja, o Node **escuta um evento por vez que acontece no event loop**, e esse **event loop delega esse evento para uma thread**, depois ele pega outro evento e delega para uma outra thread e assim por diante.

## ❓ Pra Que Node

O Node veio para resolver um problema simples, que é a de se trabalhar bem com processos I/O (input/output) assíncrono, ou seja, as tecnologias antes do Node não lidavam muito bem com trabalhos assíncronos que exigem que o servidor continue o seu trabalho enquanto uma determinada tarefa ainda está em processo.

## 🕵️‍♀️ Caracteríscas do Node

- Event loop
    - Call Stack
- Single thread
- NON-Blocking I/O <br/>
    Isso é que uma **função não precisa finalizar para outra função começar**. No Node podemos ter duas funções rodando ao mesmo tempo.

- Módulos já nativos
    - HTTP
    - Buffer
    - FS
    - Outros...