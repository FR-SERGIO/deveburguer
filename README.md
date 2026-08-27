# DevBurger

Landing page responsiva para uma hamburgueria artesanal, criada a partir de uma referência visual no Figma e implementada com React e Vite.

## Visão geral

O DevBurger apresenta o cardápio de forma visual e direta, com navegação por páginas, filtros de categoria e pedidos encaminhados para o WhatsApp.

## Preview

### Desktop

![DevBurger em uma tela de computador](docs/devburger-desktop.png)

### Mobile

![DevBurger em uma tela de celular](docs/devburger-mobile.png)

## Recursos

- Página inicial com destaque do combo principal
- Cardápio com filtros por categoria
- Cards de produtos com preço, descrição e imagem
- Pedido individual pelo WhatsApp
- Páginas de Home, Menu, Sobre e Contato
- Menu lateral responsivo para dispositivos móveis
- Botões de contato por WhatsApp e telefone
- Layout adaptado para desktop, tablet e celular
- Roteamento com `HashRouter`, compatível com GitHub Pages
- Workflow de deploy automático pelo GitHub Actions

## Tecnologias

- React 18
- React Router DOM
- Vite
- JavaScript
- CSS3
- GitHub Pages
- GitHub Actions

## Executar localmente

Pré-requisitos:

- Node.js 18 ou superior
- npm

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível no endereço informado pelo Vite, normalmente `http://localhost:5173`.

## Build de produção

Para gerar os arquivos otimizados:

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

O resultado da compilação é criado na pasta `dist/`.

## Deploy no GitHub Pages

O projeto possui um workflow em `.github/workflows/deploy.yml`.

A cada push na branch `main`, o GitHub Actions irá:

1. Instalar as dependências com `npm ci`.
2. Gerar o build de produção.
3. Publicar a pasta `dist/` no GitHub Pages.

Para ativar o recurso no repositório:

1. Abra **Settings** no GitHub.
2. Acesse **Pages**.
3. Em **Build and deployment**, selecione **GitHub Actions**.
4. Faça um novo push na branch `main` ou execute o workflow manualmente.

## Estrutura do projeto

```text
.
├── .github/workflows/deploy.yml
├── src/
│   ├── components/
│   │   └── Layout.jsx
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── HomePage.jsx
│   │   └── MenuPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── README.md
├── package.json
├── vite.config.js
├── script.js
└── styles.css
```

## Personalização

Os produtos e preços podem ser editados diretamente em `src/pages/MenuPage.jsx`.

Os links de WhatsApp e telefone estão disponíveis em:

- `src/pages/HomePage.jsx`
- `src/pages/MenuPage.jsx`
- `src/pages/ContactPage.jsx`

As cores, tipografia, espaçamentos e regras responsivas ficam em `src/styles.css`.

## Status

Projeto funcional e pronto para deploy estático.

## Autor

FR-SERGIO
