
# Projeto de Testes Automatizados com Cypress: Teste de Formulário

Este projeto tem como objetivo demonstrar conhecimentos em testes de automação com **Cypress**, incluindo a estruturação de testes E2E, uso de boas práticas, execução em diferentes ambientes e documentação clara.

## ✅ Sobre o Projeto

O teste automatizado acessa o site de exemplo do Cypress (https://example.cypress.io), navega até a página de ações e realiza o preenchimento de um campo de e-mail, validando seu valor.

---

## 🧰 Tecnologias e Ferramentas

- [Cypress](https://www.cypress.io/) - Para automação de testes
- JavaScript - Linguagem utilizada para escrever os testes
- Node.js - Ambiente de execução
- VS Code - Editor de código
- Git + GitHub - Controle de versão e repositório

---

## 🚀 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências:
   ```bash
   npm install
   npm install cypress --save-dev
   ```

## 🧪 Como rodar os testes

- **Rodar todos os testes:**
  ```bash
  npx cypress run
  ```

- **Rodar os testes em browsers específicos:**
  ```bash
  npx cypress run --browser chrome
  ```

  - **Abrir Cypress em modo interativo:**
  ```bash
  npx cypress open
  ```

  Opções disponíveis:
  - `chrome`
  - `edge`
  - `electron`

## 📁 Estrutura de Pastas

```bash
📂 cypress
┣ 📂 e2e             # Testes End-to-End (E2E)
┃ ┗ 📜 projeto1_input.cy.js  # Arquivo de teste para preenchimento de campo
┣ 📂 support          # Arquivos de suporte como comandos personalizados
┗ 📜 commands.js      # Comandos customizados do Cypress
📜 cypress.config.js  # Configurações do Cypress
📜 README.md          # Este arquivo

```

## 🔎 Cenário de Teste Automatizado


| Campo                  | Detalhes                                                                    |
| ---------------------- | --------------------------------------------------------------------------- |
| **ID do Caso**         | CT-001                                                                      |
| **Título**             | Verificar preenchimento de campo de e-mail                                  |
| **Projeto**            | Portfólio Cypress – Projeto 1                                               |
| **Pré-condição**       | Cypress instalado e ambiente configurado                                    |
| **Ambiente de Teste**  | Navegador (Chrome, Edge, etc)                                               |
| **URL de Teste**       | [https://example.cypress.io](https://example.cypress.io)                    |
| **Passos**             | 1. Acessar a URL  <br>2. Clicar em "type"  <br>3. Preencher campo de e-mail |
| **Dados de Entrada**   | [teste@example.com](mailto:teste@example.com)                               |
| **Resultado Esperado** | O campo deve conter exatamente o texto digitado                             |
| **Resultado Obtido**   |  [a preencher após o teste]                                                 |
| **Status**             |  [Passou / Falhou]                                                          |
| **Observações**        | Este teste simula uma interação básica com um formulário                    |


### Link para o Arquivo de Teste
O código do teste correspondente pode ser encontrado no arquivo [projeto1_input.cy.js](projeto1_input.cy.js).

---

✨ **Autor**

Feito com dedicação por **Marcela Barros Lima** – Tester Júnior em evolução para Automação QA 🚀  
Conecte-se comigo no [LinkedIn](https://www.linkedin.com/in/marcela-lima-867592124/)

