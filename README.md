# Projeto de Automação de Teste com Cypress e JavaScript

## Descrição
Este projeto é uma suíte de testes automatizados utilizando [Cypress](https://www.cypress.io/) para testar a aplicação web do desafio tech. Ele inclui testes end-to-end (E2E) escritos em JavaScript para garantir que a aplicação funcione conforme o esperado.

## Sumário
- [Descrição](#descrição)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e Execução](#instalação-e-execução)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Boas Práticas](#boas-práticas)

## Pré-requisitos
- Node.js (>= 18.x)
- npm ou yarn


## Instalação e Execução
- Baixe este repositório ou faça um git clone;
- Abra o diretório do projeto e execute o comando:
    - `npm install`
- Para abrir a interface de execução do Cypress, execute no diretório do projeto:
    - `npx cypress open`

## Estrutura do Projeto
DESAFIO-TECH/
├── cypress/
│   ├── e2e/                # Testes end-to-end
│   │   └── login.cy.js     # Testes da página de login
│   │   └── myInfo.cy.js    # Testes da página de informações do usuário
│   ├── fixtures/           # Arquivos de dados fixos
│   ├── support/            # Arquivos de suporte e comandos personalizados
│   │   ├── commands.js     # Comandos personalizados
│   │   └── e2e.js          # Configuração global
│   └── cypress.config.js   # Configurações do Cypress
├── node_modules/           # Dependências do projeto
├── .gitignore              # Pastas e arquivos que não são enviados para o repositório
├── package-lock.json       # Gerado automaticamente com as instalações e atualizações de pacotes;
├── package.json            # Dependências e scripts npm
└── README.md               # Este arquivo

## Boas Práticas
- Organização dos Testes: Mantenha os testes organizados em subpastas conforme necessário.
- Comandos Reutilizáveis: Utilize comandos personalizados para evitar duplicação de código.
- Dados Fixos: Utilize a pasta fixtures para armazenar dados fixos que serão usados nos testes.
