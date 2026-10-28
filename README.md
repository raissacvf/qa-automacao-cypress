# 🧪 QA Automação com Cypress

[![Testes E2E](https://github.com/raissacvf/qa-automacao-cypress/actions/workflows/cypress.yml/badge.svg)](https://github.com/raissacvf/qa-automacao-cypress/actions/workflows/cypress.yml)

Projeto de portfólio de **Quality Assurance**: testes automatizados end-to-end com **Cypress** e documentação completa de testes (plano, casos, relatórios e bugs) sobre o [SauceDemo](https://www.saucedemo.com), um e-commerce público criado para prática de testes.

## 🎯 O que este projeto demonstra

- Automação de fluxos reais: login, lista de produtos, carrinho e checkout
- Cenários positivos e negativos (campos vazios, usuário bloqueado, acesso sem login)
- Validações de regra de negócio (ordenação, contador do carrinho, soma do subtotal)
- Integração contínua com **GitHub Actions**
- Documentação de QA: plano de testes, casos de teste, relatório de execução e bug report

## 🧩 Cobertura

| Área | Casos | Arquivo |
|---|---|---|
| Login | CT-L01 a CT-L07 | `cypress/e2e/login.cy.js` |
| Produtos | CT-P01 a CT-P05 | `cypress/e2e/produtos.cy.js` |
| Carrinho | CT-C01 a CT-C05 | `cypress/e2e/carrinho.cy.js` |
| Checkout | CT-K01 a CT-K06 | `cypress/e2e/checkout.cy.js` |

Total: **23 testes automatizados**, mais casos exploratórios documentados em [`qa/`](qa).

## 📁 Estrutura

```
cypress/
  e2e/          testes por funcionalidade
  support/      comandos customizados (login, helpers)
qa/
  plano-de-testes.md
  casos-de-teste.md
  relatorio-de-execucao.md
  bugs/         relatórios de bug
.github/workflows/cypress.yml   pipeline de CI
```

## ▶️ Como executar

Pré-requisito: [Node.js](https://nodejs.org) 18 ou superior.

```bash
git clone https://github.com/raissacvf/qa-automacao-cypress.git
cd qa-automacao-cypress
npm install
npm test          # executa todos os testes no terminal
npm run cy:open   # abre a interface visual do Cypress
```

## 🛠️ Tecnologias

Cypress · JavaScript · GitHub Actions · Markdown

## 📚 Documentação de QA

- [Plano de testes](qa/plano-de-testes.md)
- [Casos de teste](qa/casos-de-teste.md)
- [Relatório de execução](qa/relatorio-de-execucao.md)
- [Bugs](qa/bugs)

---

Feito por [Raíssa de Castro](https://github.com/raissacvf) · [LinkedIn](https://www.linkedin.com/in/raissacvf)
