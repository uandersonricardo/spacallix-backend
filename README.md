# spacallix-backend

## Sobre o repositório

O spacalliX é uma plataforma de informações sobre os lançamentos da SpaceX. Esse repositório contém o backend da aplicação, que é responsável por fazer a integração com a API da SpaceX e disponibilizar os dados para o frontend.

## Tecnologias utilizadas

- Node.js
- Express
- Axios
- SWC
- Node-cache

## Como executar

### Pré-requisitos

- Node.js
- Yarn

### Instalação

```bash
# Clone o repositório
$ git clone

# Acesse a pasta do projeto
$ cd spacallix-backend

# Instale as dependências
$ yarn

# Execute a aplicação
$ yarn dev
```

## Rotas

### GET /launches

Retorna os lançamentos de forma paginada. Aceita os seguintes parâmetros:

- `perPage`: quantidade de lançamentos por página (padrão: 10)
- `page`: número da página (padrão: 1)
- `upcoming`: se deve retornar os lançamentos futuros

### GET /launches/:id

Retorna um lançamento específico.

### GET /launches/next

Retorna o próximo lançamento.

### GET /launches/latest

Retorna o último lançamento.

## Estrutura de pastas

- `src`: código fonte da aplicação
  - `controllers`: controladores da aplicação
  - `config`: configurações da aplicação
  - `external`: integrações com APIs externas
  - `services`: serviços da aplicação
  - `types`: tipagens da aplicação
  - `utils`: utilitários da aplicação
  - `app.ts`: configuração do servidor
  - `index.ts`: inicialização do servidor
