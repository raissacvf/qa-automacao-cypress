import { USUARIOS, SENHA } from "../support/commands";

describe("Login", () => {
  it("CT-L01 | login com credenciais válidas abre a lista de produtos", () => {
    cy.preencherLogin(USUARIOS.padrao, SENHA);
    cy.url().should("include", "/inventory.html");
    cy.get('[data-test="title"]').should("have.text", "Products");
  });

  it("CT-L02 | senha incorreta exibe mensagem de erro", () => {
    cy.preencherLogin(USUARIOS.padrao, "senha_errada");
    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "do not match");
    cy.url().should("not.include", "/inventory.html");
  });

  it("CT-L03 | usuário vazio exibe 'Username is required'", () => {
    cy.preencherLogin("", SENHA);
    cy.get('[data-test="error"]').should("contain", "Username is required");
  });

  it("CT-L04 | senha vazia exibe 'Password is required'", () => {
    cy.preencherLogin(USUARIOS.padrao, "");
    cy.get('[data-test="error"]').should("contain", "Password is required");
  });

  it("CT-L05 | usuário bloqueado não consegue entrar", () => {
    cy.preencherLogin(USUARIOS.bloqueado, SENHA);
    cy.get('[data-test="error"]').should("contain", "locked out");
    cy.url().should("not.include", "/inventory.html");
  });

  it("CT-L06 | acessar a lista sem estar logado é bloqueado", () => {
    cy.visit("/inventory.html", { failOnStatusCode: false });
    cy.get('[data-test="error"]').should("contain", "logged in");
  });

  it("CT-L07 | logout retorna para a tela de login", () => {
    cy.login();
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link").click();
    cy.url().should("eq", `${Cypress.config("baseUrl")}/`);
    cy.get('[data-test="login-button"]').should("be.visible");
  });
});
