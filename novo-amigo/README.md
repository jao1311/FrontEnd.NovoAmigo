# Novo Amigo

Este projeto é uma aplicação web desenvolvida em React, destinada a facilitar a adoção de animais. Abaixo estão as principais características e estrutura do projeto.

## Estrutura do Projeto

```
novo-amigo/
├── src/
│   ├── components/                # Componentes reutilizáveis
│   │   ├── ui/                    # Componentes de interface
│   │   ├── layout/                # Componentes de layout
│   │   └── shared/                # Componentes compartilhados
│   ├── features/                  # Funcionalidades organizadas por domínio
│   │   ├── adoption/              # Funcionalidade de adoção
│   │   └── auth/                  # Funcionalidade de autenticação
│   ├── hooks/                     # Hooks personalizados
│   ├── contexts/                  # Contextos para gerenciamento de estado
│   ├── services/                  # Configuração de APIs
│   ├── lib/                       # Funções utilitárias
│   ├── styles/                    # Estilos globais
│   ├── routes/                    # Configuração de rotas
│   ├── App.jsx                    # Componente principal
│   └── main.jsx                   # Ponto de entrada da aplicação
├── package.json                    # Dependências e scripts
├── vite.config.js                  # Configuração do Vite
└── README.md                       # Documentação do projeto
```

## Funcionalidades

- **Adoção de Animais**: Páginas para visualizar e adotar animais.
- **Autenticação**: Sistema de login e registro de usuários.
- **Componentes Reutilizáveis**: Botões, inputs, cards e outros componentes que podem ser utilizados em diferentes partes da aplicação.
- **Gerenciamento de Estado**: Contextos para autenticação e tema, permitindo uma experiência de usuário mais fluida.

## Como Executar o Projeto

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```
   cd novo-amigo
   ```
3. Instale as dependências:
   ```
   npm install
   ```
4. Inicie a aplicação:
   ```
   npm run dev
   ```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.