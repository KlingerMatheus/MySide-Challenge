# MySide-Challenge

## Descrição

Este teste é uma iniciativa a partir de um teste técnico elaborado pela empresa MySide. O objetivo é avaliar as habilidade como desenvolvedor Frontend.

O projeto é sobre o desenvolvimento de uma loja digital fictícia, utilizando uma API com dados fictícios para simular produtos existentes e manipulá-los no app.

As funcionalidades incluem: visualização e filtragem de produtos por categoria ou nome, adição de produtos ao carrinho, acesso à página de detalhes do produto ao clicar na imagem, e gestão do carrinho com ajuste de quantidades, remoção de itens e visualização do valor total.

## Tecnologias:

- React
- Next
- Typescript
- CSS Modules
- Redux
- Redux persist - [Docs](https://github.com/rt2zz/redux-persist)
- Jest
- React Testing Library
- Heroicons - [Docs](https://heroicons.com/)

## Rodar o projeto

### Local

Para rodar localmente você precisar seguir o seguinte passo a passo:

1. Clone o repositório em sua máquina:

```
git clone https://github.com/KlingerMatheus/MySide-Challenge.git myside-challenge;
```

2. Acesse o projeto e instale as dependências:

```
cd myside-challenge;

npm install;
```

3. Crie um arquivo chamado `.env` e insira o seguinte:

```
NEXT_PUBLIC_API_BASE_URL=https://fakestoreapi.in/api/
```

4. Inicie o app:

```
npm run dev
```

### Produção

Você pode acessar a versão em produção gerada pelo Vercel no seguinte link: [MySide Challenge](https://my-side-challenge.vercel.app/)

Ou pode gerar uma versão de deploy e rodar em sua máquina escrevendo o seguinte comando:

```
npm run build;

npm run start;
```

## 🔨 Testes

Os testes unitários ainda não estão finalizados, ainda em progresso.
