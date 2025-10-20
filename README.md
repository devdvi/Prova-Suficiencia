# Projeto de Aplicação Web - Gerenciador de Usuários

## 📜 Descrição do Projeto

Este projeto consiste na criação de uma aplicação web simples para a disciplina de `[Nome da Disciplina]`. O objetivo é demonstrar o uso de tecnologias front-end fundamentais — **HTML5**, **CSS3** e **JavaScript** puro (Vanilla JS) — para construir uma interface funcional e interativa.

A aplicação possui uma página principal (homepage) e uma página de administração onde é possível cadastrar, listar, pesquisar e excluir usuários. Todos os dados são manipulados dinamicamente e persistidos localmente no navegador do usuário através da **Web Storage API (localStorage)**.

## ✨ Funcionalidades

-   **Página Principal:** Uma landing page simples e estática, construída com HTML semântico.
-   **Página de Administração:**
    -   ✅ **Cadastro de Usuários:** Formulário com 5 campos (Nome, E-mail, Senha, Data de Nascimento e Telefone) para adicionar novos usuários.
    -   ✅ **Armazenamento Local:** Os dados dos usuários cadastrados são salvos no `localStorage` do navegador, garantindo que não sejam perdidos ao recarregar a página.
    -   ✅ **Listagem Dinâmica:** Os usuários cadastrados são exibidos em uma lista na tela em tempo real.
    -   ✅ **Pesquisa em Tempo Real:** Um campo de busca permite filtrar a lista de usuários por nome, e-mail ou telefone.
    -   ✅ **Exclusão Individual:** Cada item da lista possui um botão para remover o usuário específico.
    -   ✅ **Exclusão Total:** Um botão permite limpar completamente a lista, removendo todos os usuários do `localStorage`.
    -   ✅ **Limpeza de Formulário:** Um botão para limpar todos os campos do formulário de cadastro.

## 🛠️ Tecnologias Utilizadas

-   **HTML5:** Para a estruturação semântica do conteúdo.
-   **CSS3:** Para a estilização e o layout das páginas.
-   **JavaScript (Vanilla JS):** Para toda a lógica de interatividade, manipulação do DOM e gerenciamento de dados.
-   **APIs do Navegador:**
    -   `DOM (Document Object Model)`: Para criar e manipular os elementos da página dinamicamente.
    -   `Web Storage API (localStorage)`: Para a persistência dos dados no lado do cliente.

## 📁 Estrutura do Projeto

O projeto está organizado da seguinte forma para garantir a separação de responsabilidades:

```
/
├── index.html            # Página principal (homepage)
├── admin.html            # Página de administração
├── assets/               # Pasta para arquivos estáticos (imagens, fontes, etc.)
├── css/
│   └── style.css         # Folha de estilos principal
├── js/
│   └── admin.js          # Arquivo com toda a lógica JavaScript
└── README.md             # Este arquivo
```

## 🚀 Como Executar

Por ser um projeto front-end estático, não há necessidade de um servidor ou de processos de build complexos. Para executá-lo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://docs.github.com/pt/repositories/creating-and-managing-repositories/quickstart-for-repositories](https://docs.github.com/pt/repositories/creating-and-managing-repositories/quickstart-for-repositories)
    ```
2.  **Abra o arquivo `index.html`:**
    Navegue até a pasta do projeto e abra o arquivo `index.html` diretamente no seu navegador de preferência (Google Chrome, Firefox, etc.).
