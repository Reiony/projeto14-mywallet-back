# MyWallet - Back-End

O Back-End do MyWallet é responsável por fornecer APIs para o gerenciador de gastos digital.

## Rotas da API
- POST /signup: Crie uma nova conta de usuário.
- POST /signin: Faça login com uma conta existente.
- GET /transactions: Obtenha todas as transações de um usuário autenticado.
- POST /transactions: Registre uma nova transação.
- PUT /transactions/:id: Atualize uma transação existente.
- DELETE /transactions/:id: Exclua uma transação existente.

O MyWallet foi criado com o intuito pessoal de gerenciar gastos sem precisar ficar recorrendo ao acesso a conta bancária sempre que quiser conferir.

Em breve:
- O usuário poderá excluir todo o histórico de uma só vez, assim podendo melhorar a performace do sistema de gerenciamento.

## Tecnologias utilizadas

  <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
  
## Como inciar a API

- Este projeto é o Back-End de um projeto completo. [Clique Aqui]([(https://github.com/Reiony/projeto14-mywallet-front)]) para acessar o repositório front-end e visualizar as instruções para executar este projeto.

1. Clone o repositório
2. Instale as dependências

``` shell
    npm install
```
3. Configure um arquivo .env com base no .env.example para definir as variáveis de ambiente, incluindo a conexão com o MongoDB.
4. Para rodar localmente use
```bash
    npm start
```

6. Para construir a aplicação use
```bash
    npm run build
```
7. Com isso a API está pronta a ser utilizada.
