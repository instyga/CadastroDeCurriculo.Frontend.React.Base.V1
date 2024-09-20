# Sistema de Cadastro de Currículo Instyga

Este é um sistema de cadastro de currículo com funcionalidades de:

- Dados básicos
- Experiências profissionais
- Escolaridade

## Tecnologias utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- [Node.js](https://nodejs.org/) (versão 20 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Passos para rodar o projeto

### Preparação

Recomendamos o uso do `yarn` para rodar a aplicação. Verifique a instalação com o comando abaixo:

```bash
yarn --version
# caso não esteja instalado, execute o comando abaixo
corepack enable
```

### 1. Clonar o repositório

Clone este repositório em sua máquina local:

```bash
git clone https://github.com/usuario/CadastroDeCurriculo.Frontend.React.Base.V1.git
```

### 2. Instalar as dependências

Após clonar o repositório, acesse o diretório do projeto e instale as dependências usando o npm ou yarn:

```bash
cd CadastroDeCurriculo.Frontend.React.Base.V1
yarn install
```

### 3. Executar a aplicação

Depois de instalar todas as dependências, você pode rodar a aplicação localmente com o seguinte comando:

```bash
yarn dev
```

Este comando vai iniciar a aplicação em modo de desenvolvimento. Geralmente, ela estará disponível no endereço `http://localhost:5173/` ou outro definido pelo Vite.

### 4. Build para produção

Se você quiser gerar a versão de produção, execute o seguinte comando:

```bash
yarn build
```

Os arquivos de produção estarão na pasta `dist`, prontos para serem hospedados em um servidor web.

### 5. Servir a versão de produção localmente (opcional)

Caso queira servir a versão de produção localmente para teste, use o comando:

```bash
yarn preview
```

## Estrutura do Projeto

A estrutura básica do projeto é a seguinte:

```
├── src/              # Código-fonte do projeto
│   ├── components/   # Componentes compartilhados
│   ├── forms/        # Componentes de formulários
│   ├── pages/        # Páginas da aplicação
│   ├── assets/       # Arquivos de mídia ou estilos
│   ├── helpers/      # Funções auxiliares utilizadas pelo app
│   ├── App.jsx       # Componente principal com a estrutura base
│   └── main.jsx      # Ponto de entrada do app
├── package.json      # Dependências e scripts
```
