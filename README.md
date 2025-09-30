# Star Wars Planets Wiki

Uma aplicação web simples e responsiva para pesquisar e aprender sobre os planetas do universo de Star Wars.

## Sobre o Projeto

Este projeto é uma aplicação web construída com Next.js que permite aos usuários pesquisar por planetas da saga Star Wars. Ele exibe informações detalhadas de cada planeta, incluindo população, clima, terreno e os filmes em que apareceu.

O objetivo principal é fornecer uma interface rápida, moderna e amigável, utilizando uma arquitetura robusta e escalável.

https://star-wars-planets-wiki.vercel.app/
(O projeto está na Vercel, mas está com um bug de redirecionamento que ainda não consegui ajustar! Em local está funcionando normalmente)

## Tecnologias Utilizadas

Aqui estão as principais tecnologias e bibliotecas usadas no projeto:

*   **[Next.js](https://nextjs.org/)** - Framework React para renderização no servidor e geração de sites estáticos.
*   **[React](https://reactjs.org/)** - Biblioteca JavaScript para construir interfaces de usuário.
*   **[TypeScript](https://www.typescriptlang.org/)** - Superset de JavaScript que adiciona tipagem estática.
*   **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first para desenvolvimento rápido de UI.
*   **[TanStack Query](https://tanstack.com/query/latest)** - Biblioteca para data fetching, cache e gerenciamento de estado.
*   **[InversifyJS](https://inversify.io/)** - Um contêiner de inversão de controle (IoC) leve e poderoso para TypeScript.
*   **[Axios](https://axios-http.com/)** - Cliente HTTP baseado em Promises para o navegador e Node.js.
*   **[ESLint](https://eslint.org/)** - Ferramenta de linting para identificar e relatar padrões em JavaScript.
*   **[Prettier](https://prettier.io/)** - Formatador de código opinativo.

## Como Rodar o Projeto

Para obter uma cópia local e executá-la, siga estes passos.

### Pré-requisitos

Certifique-se de ter o seguinte instalado:

*   Node.js (v20 ou superior)
*   Yarn (v1.22 ou superior)

### Instalação e Execução

1.  Clone o repositório (substitua pela URL do seu repositório):
    ```sh
    git clone https://github.com/seu-usuario/star-wars-planets-wiki.git
    ```
2.  Navegue até o diretório do projeto:
    ```sh
    cd star-wars-planets-wiki
    ```
3.  Instale as dependências:
    ```sh
    yarn install
    ```
4.  Execute o servidor de desenvolvimento:
    ```sh
    yarn dev
    ```
5.  Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Padrões de Projeto

Este projeto foi desenvolvido com foco em separação de responsabilidades, escalabilidade e manutenibilidade, seguindo princípios de **Arquitetura Limpa (Clean Architecture)**.

*   **Domain-Driven Design (DDD):** O núcleo da aplicação (`@core/domain`) é modelado em torno do domínio de negócio, com entidades como `Planet`, `Film` e `People`.
*   **Arquitetura Hexagonal (Ports and Adapters):** A aplicação é estruturada para isolar a lógica de negócio de fatores externos.
    *   **Ports:** As interfaces (gateways) são definidas na camada de domínio (ex: `PlanetGateway`).
    *   **Adapters:** As implementações concretas das portas ficam na camada de infraestrutura (`@core/infra`), como o `PlanetHttpGateway`, que se comunica com a API externa.
*   **Use Cases (Interactors):** As operações de negócio são encapsuladas em casos de uso na camada de aplicação (`@core/application`), como o `GetPlanetUseCase`. Isso define claramente todas as interações possíveis com o sistema.
*   **Injeção de Dependência (DI):** Utilizamos o **InversifyJS** como um contêiner de Inversão de Controle (IoC) para gerenciar as dependências entre as camadas. Isso promove o baixo acoplamento e facilita os testes e a manutenção. A configuração do contêiner está em `@core/infra/container-registry.ts`.
*   **Princípios de Atomic Design:** Os componentes de UI em `src/shared/components/ui` são construídos como pequenos "átomos" reutilizáveis (ex: `Button`, `Card`, `Input`), que são compostos para formar organismos e páginas mais complexas.

## Arquitetura e Organização de Pastas

O projeto é estruturado para refletir os princípios da Arquitetura Limpa, separando o código em camadas independentes para garantir um sistema desacoplado, testável e de fácil manutenção.

Abaixo está uma visão geral da organização das pastas principais:

```
/src
├── @core/
│   ├── application/  # Camada de Casos de Uso
│   ├── domain/       # Camada de Domínio
│   └── infra/        # Camada de Infraestrutura
├── app/              # Camada de Apresentação (Next.js App Router)
└── shared/           # Módulos e componentes compartilhados
```

### `@core`

Esta é a pasta mais importante, contendo toda a lógica de negócio da aplicação, completamente independente do framework (Next.js) e de qualquer agente externo (APIs, etc.).

*   `@core/domain`: Contém as entidades de negócio (`Planet`, `Film`) e as interfaces (Ports) que definem os contratos para a camada de infraestrutura, como os `gateways`. Esta camada não tem dependências externas.

*   `@core/application`: Orquestra o fluxo de dados e executa as regras de negócio. Contém os Casos de Uso (Use Cases/Interactors), como `GetPlanetUseCase`, que são chamados pela camada de apresentação.

*   `@core/infra`: Implementa os detalhes técnicos e as adaptações para o mundo exterior. Aqui ficam as implementações concretas dos `gateways` (Adapters), como o `PlanetHttpGateway` que busca dados de uma API externa, e a configuração do contêiner de injeção de dependência.

### `app`

Esta é a camada de apresentação, responsável pela interface do usuário. Utiliza o App Router do Next.js. As páginas e componentes nesta camada consomem os casos de uso definidos em `@core/application` para exibir dados e interagir com o sistema.

### `shared`

Esta pasta contém código que é reutilizado em diferentes partes da aplicação, mas que não faz parte da lógica de negócio principal.

*   `components/ui`: Componentes de UI reutilizáveis e de baixo nível (ex: `Button`, `Card`), seguindo princípios de Atomic Design.
*   `hooks`: Hooks customizados do React (ex: `useMediaQuery`).
*   `utils`: Funções utilitárias genéricas.
*   `flows`: Componentes mais complexos que representam fluxos de usuário ou páginas inteiras (ex: `Home`, `Planet`).
