# Portfólio Pessoal - Leonardo Rodrigues

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

Este é o repositório do meu portfólio pessoal, desenvolvido para apresentar minhas habilidades, projetos e informações de contato de uma forma moderna e interativa. O projeto foi construído do zero com foco em design, performance, acessibilidade e SEO.

**Visite a versão online:** [**leosouza.dev.br**](https://leosouza.dev.br/)

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [✨ Principais Funcionalidades](#-principais-funcionalidades)
- [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [⚙️ Como Executar o Projeto](#️-como-executar-o-projeto)
- [📂 Estrutura de Pastas](#-estrutura-de-pastas)
- [📞 Contato](#-contato)

## 📖 Sobre o Projeto

O objetivo deste portfólio é ser meu cartão de visitas digital. Ele centraliza meus projetos mais relevantes, detalha as tecnologias com as quais trabalho e facilita o contato para oportunidades profissionais. O design foi pensado para ser limpo, moderno e totalmente responsivo, proporcionando uma ótima experiência em qualquer dispositivo.

## ✨ Principais Funcionalidades

- **Design Responsivo:** Interface adaptável para desktops, tablets e smartphones.
- **Componentização com React:** Estrutura organizada em componentes reutilizáveis para cada seção da página.
- **Estilização com Tailwind CSS:** Classes utilitárias para uma estilização rápida, consistente e customizável.
- **Carregamento Dinâmico de Projetos:** Os cards de projetos são gerados a partir de um array de objetos, facilitando a manutenção e adição de novos trabalhos.
  - As imagens são carregadas dinamicamente da pasta de assets.
  - Um fallback visual exibe o título do projeto caso uma imagem não seja fornecida.
- **Interatividade e Animações:**
  - Efeitos de _hover_ nos cards de projetos e habilidades.
  - Animações de entrada suaves ao rolar a página, implementadas com `Intersection Observer`.
  - Efeito de "digitação" na seção Hero.
- **Navegação Suave:** Scroll suave para navegação entre as seções através do menu e links do rodapé.
- **Otimização para SEO:**
  - Meta tags (`title`, `description`, `keywords`) e tags Open Graph para melhor indexação e compartilhamento em redes sociais.
- **Acessibilidade (A11y):**
  - Uso de HTML semântico.
  - Atributos `alt` em imagens e `aria-label` em botões e links icônicos para compatibilidade com leitores de tela.
  - Estado de foco (`focus-visible`) aprimorado para navegação via teclado.

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface de usuário.
- **Vite**: Ferramenta de build para um desenvolvimento frontend moderno e rápido.
- **Tailwind CSS**: Framework CSS utility-first para estilização.
- **Lucide React**: Biblioteca de ícones SVG.

## ⚙️ Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/Leonnardo21/portfolio.git
    ```

2.  **Navegue até o diretório do projeto:**

    ```bash
    cd portfolio
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

5.  Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no seu terminal).

## 📂 Estrutura de Pastas

O projeto está organizado da seguinte forma para facilitar a manutenção:

```
portfolio/
├── public/               # Arquivos estáticos (favicon, CV, etc.)
├── src/
│   ├── assets/           # Imagens, ícones e outros assets
│   │   └── projects/     # Imagens específicas dos projetos
│   ├── components/       # Componentes React reutilizáveis
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx           # Componente principal que une as seções
│   └── main.jsx          # Ponto de entrada da aplicação React
├── .gitignore
├── index.html            # Template HTML principal
├── package.json
├── README.md
└── tailwind.config.js    # Configurações do Tailwind CSS
```

## 📞 Contato

**Leonardo de Souza Rodrigues**

- **Email:** leosouza1392@hotmail.com
- **LinkedIn:** linkedin.com/in/leonardo-rodrigues-07a169172
- **GitHub:** @Leonnardo21

---

Feito com ❤️ por Leonardo Rodrigues.
