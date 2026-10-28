const MOCHILA = "sauce-labs-backpack";
const LUZ = "sauce-labs-bike-light";

function irParaDadosDoCheckout() {
  cy.get(`[data-test="add-to-cart-${MOCHILA}"]`).click();
  cy.get('[data-test="shopping-cart-link"]').click();
  cy.get('[data-test="checkout"]').click();
  cy.url().should("include", "/checkout-step-one.html");
}

function preencherDados({ nome = "Raíssa", sobrenome = "de Castro", cep = "35160-000" } = {}) {
  if (nome) cy.get('[data-test="firstName"]').type(nome);
  if (sobrenome) cy.get('[data-test="lastName"]').type(sobrenome);
  if (cep) cy.get('[data-test="postalCode"]').type(cep);
  cy.get('[data-test="continue"]').click();
}

describe("Checkout", () => {
  beforeEach(() => {
    cy.login();
  });

  it("CT-K01 | fluxo completo de compra termina com confirmação", () => {
    irParaDadosDoCheckout();
    preencherDados();
    cy.url().should("include", "/checkout-step-two.html");
    cy.get('[data-test="finish"]').click();
    cy.url().should("include", "/checkout-complete.html");
    cy.get('[data-test="complete-header"]').should("have.text", "Thank you for your order!");
  });

  it("CT-K02 | nome vazio exibe 'First Name is required'", () => {
    irParaDadosDoCheckout();
    preencherDados({ nome: "" });
    cy.get('[data-test="error"]').should("contain", "First Name is required");
  });

  it("CT-K03 | sobrenome vazio exibe 'Last Name is required'", () => {
    irParaDadosDoCheckout();
    preencherDados({ sobrenome: "" });
    cy.get('[data-test="error"]').should("contain", "Last Name is required");
  });

  it("CT-K04 | CEP vazio exibe 'Postal Code is required'", () => {
    irParaDadosDoCheckout();
    preencherDados({ cep: "" });
    cy.get('[data-test="error"]').should("contain", "Postal Code is required");
  });

  it("CT-K05 | o subtotal é a soma dos preços dos itens", () => {
    cy.get(`[data-test="add-to-cart-${MOCHILA}"]`).click();
    cy.get(`[data-test="add-to-cart-${LUZ}"]`).click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();
    preencherDados();

    cy.get('[data-test="inventory-item-price"]').then(($precos) => {
      const soma = [...$precos]
        .map((el) => parseFloat(el.innerText.replace("$", "")))
        .reduce((a, b) => a + b, 0);
      cy.get('[data-test="subtotal-label"]').should(
        "contain",
        `$${soma.toFixed(2)}`
      );
    });
  });

  it("CT-K06 | cancelar no checkout volta para o carrinho", () => {
    irParaDadosDoCheckout();
    cy.get('[data-test="cancel"]').click();
    cy.url().should("include", "/cart.html");
  });
});
