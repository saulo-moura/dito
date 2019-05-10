# Dito Autocomplete #

___
## Sobre ##

- Este projeto foi desenvolvido como parte do recrutamento da Dito
- A API foi feita utilizando o framework PHP Laravel na versão 5.8
- A camada de visualização foi feita utilizando Angular 7

## Pré requisitos ##

- PHP >= 7.1.3
- Composer (https://getcomposer.org).
- NodeJS >= 6.4.1 (https://nodejs.org/en)
- Git (https://git-scm.com)

## Componentes ##

> Componentes e frameworks utilizados no projeto

- [Laravel] (https://laravel.com/)

## Instalação ##

> Rode os comandos abaixo numa CLI

```sh
git clone git@github.com:saulo-moura/dito-autocomplete.git {app-name}
```

> Caminhe para o diretório criado

```sh
cd {app-name}
```

> Execute o comando abaixo para instalar as dependências da camada de visualização

```sh
npm install
```

> Após a instalação das dependências do front-end, execute os seguintes comandos para a instalação das dependências da API

```sh
cd api
composer install
```

> Após a instalação das dependências crie o arquivo .env copiando o conteúdo do .env.example e configure com os dados do seu SGDB

> Dentro do diretório api execute o comando abaixo para executar o servidor

```sh
php artisan serve
```

> Uma camada abaixo, no siretório raiz da aplicação, execute o seguinte comando para executar a camada de visão

```sh
ng serve -o
```

## Sobre a API ##
> Todas as funcionalidades retornam json contendo as informações requisitadas.
> Existem 3 endpoints com as seguintes funcionalidades 
- GET /v1/events -> retorna, com paginação, todos os eventos cadastrados
- GET /v1/events/{event} -> retorna, com paginação, os enventos cadastrados com o termo informado em {event}
- POST /v1/events -> recebe e armazena o evento do usuário com o seguinte corpo na requisição
{
    'user' : 'nome do usuário'
    'event' : 'evento',
    'timestamp' : 'data e hora do evento'
}