const MOCHILA = "sauce-labs-backpack";
const LUZ = "sauce-labs-bike-light";

describe("Carrinho de compras", () => {
  beforeEach(() => {
    cy.login();
  });

  it("CT-C01 | adicionar um produto atualiza o contador do carrinho", () => {
    cy.get(`[data-test="add-to-cart-${MOCHILA}"]`).click();
    cy.get('[data-test="shopping-cart-badge"]').should("have.text", "1");
    cy.get(`[data-test="remove-${MOCHILA}"]`).should("be.visible");
  });

  it("CT-C02 | adicionar dois produtos mostra 2 no contador", () => {
    cy.get(`[data-test="add-to-cart-${MOCHILA}"]`).click();
    cy.get(`[data-test="add-to-cart-${LUZ}"]`).click();
    cy.get('[data-test="shopping-cart-badge"]').should("have.text", "2");
  });

  it("CT-C03 | remover o produto zera o contador", () => {
    cy.get(`[data-test="add-to-cart-${MOCHILA}"]`).click();
    cy.get(`[data-test="remove-${MOCHILA}"]`).click();
    cy.get('[data-test="shopping-cart-badge"]').should("not.exist");
  });

  it("CT-C04 | os itens adicionados aparecem na página do carrinho", () => {
    cy.get(`[data-test="add-to-cart-${MOCHILA}"]`).click();
    cy.get(`[data-test="add-to-cart-${LUZ}"]`).click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should("include", "/cart.html");
    cy.get('[data-test="inventory-item"]').should("have.length", 2);
    cy.contains('[data-test="inventory-item-name"]', "Sauce Labs Backpack");
    cy.contains('[data-test="inventory-item-name"]', "Sauce Labs Bike Light");
  });

  it("CT-C05 | remover pelo carrinho retira o item da lista", () => {
    cy.get(`[data-test="add-to-cart-${MOCHILA}"]`).click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get(`[data-test="remove-${MOCHILA}"]`).click();
    cy.get('[data-test="inventory-item"]').should("not.exist");
  });
});
