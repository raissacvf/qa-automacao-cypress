describe("Lista de produtos", () => {
  beforeEach(() => {
    cy.login();
  });

  it("CT-P01 | exibe os 6 produtos do catálogo", () => {
    cy.get('[data-test="inventory-item"]').should("have.length", 6);
  });

  it("CT-P02 | ordena por preço, do menor para o maior", () => {
    cy.get('[data-test="product-sort-container"]').select("lohi");
    cy.precosDaLista().then((precos) => {
      const esperado = [...precos].sort((a, b) => a - b);
      expect(precos).to.deep.equal(esperado);
    });
  });

  it("CT-P03 | ordena por preço, do maior para o menor", () => {
    cy.get('[data-test="product-sort-container"]').select("hilo");
    cy.precosDaLista().then((precos) => {
      const esperado = [...precos].sort((a, b) => b - a);
      expect(precos).to.deep.equal(esperado);
    });
  });

  it("CT-P04 | ordena por nome, de Z a A", () => {
    cy.get('[data-test="product-sort-container"]').select("za");
    cy.nomesDaLista().then((nomes) => {
      const esperado = [...nomes].sort().reverse();
      expect(nomes).to.deep.equal(esperado);
    });
  });

  it("CT-P05 | abre o detalhe do produto e volta para a lista", () => {
    cy.get('[data-test="inventory-item-name"]').first().then(($nome) => {
      const nome = $nome.text().trim();
      cy.wrap($nome).click();
      cy.url().should("include", "/inventory-item.html");
      cy.get('[data-test="inventory-item-name"]').should("have.text", nome);
      cy.get('[data-test="back-to-products"]').click();
      cy.url().should("include", "/inventory.html");
    });
  });
});
