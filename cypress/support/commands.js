// Usuários e senha públicos do SauceDemo (site criado para treino de testes)
export const SENHA = "secret_sauce";
export const USUARIOS = {
  padrao: "standard_user",
  bloqueado: "locked_out_user",
  problema: "problem_user",
};

/** Preenche o formulário de login (sem validar o resultado). */
Cypress.Commands.add("preencherLogin", (usuario, senha) => {
  cy.visit("/");
  if (usuario) cy.get('[data-test="username"]').type(usuario);
  if (senha) cy.get('[data-test="password"]').type(senha, { log: false });
  cy.get('[data-test="login-button"]').click();
});

/** Faz login com sessão em cache (mais rápido) e abre a lista de produtos. */
Cypress.Commands.add("login", (usuario = USUARIOS.padrao, senha = SENHA) => {
  cy.session([usuario, senha], () => {
    cy.preencherLogin(usuario, senha);
    cy.url().should("include", "/inventory.html");
  });
  cy.visit("/inventory.html");
});

/** Preços da lista de produtos como números. */
Cypress.Commands.add("precosDaLista", () =>
  cy.get('[data-test="inventory-item-price"]').then(($els) =>
    [...$els].map((el) => parseFloat(el.innerText.replace("$", "")))
  )
);

/** Nomes da lista de produtos. */
Cypress.Commands.add("nomesDaLista", () =>
  cy.get('[data-test="inventory-item-name"]').then(($els) =>
    [...$els].map((el) => el.innerText.trim())
  )
);
