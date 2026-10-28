# Relatório de Execução de Testes

| Campo | Valor |
|---|---|
| **Ciclo** | 1 |
| **Data** | 28/10/2026 |
| **Executado por** | Raíssa de Castro |
| **Ambiente** | Cypress 13 / Node.js 20 / Ubuntu (GitHub Actions) |
| **Pipeline** | https://github.com/raissacvf/qa-automacao-cypress/actions |

## Resumo

| Total | ✅ Passou | ❌ Falhou | ⬜ Não executado |
|---|---|---|---|
| 29 | 23 | 0 | 6 |

**Automação:** 23 de 23 testes passaram.
**Taxa de aprovação geral:** 79% (23 de 29). Os 6 casos restantes são exploratórios manuais, ainda não executados.

## Falhas e bugs

Nenhum bug do sistema foi registrado neste ciclo.

Observação: na primeira execução do pipeline, 4 testes falharam por um defeito no próprio código de teste (uso de `cy.session` no comando de login), e não por falha do SauceDemo. O comando foi simplificado e a suíte passou a executar com sucesso.

## Conclusão

Os fluxos principais automatizados (login, lista de produtos, carrinho e checkout) funcionaram conforme o esperado no SauceDemo. Os casos exploratórios (CT-E01 a CT-E06), que incluem o comportamento do `problem_user`, ainda não foram executados e são o principal risco em aberto. A suíte depende de um site de terceiros, então mudanças nos seletores ou textos dele podem quebrar os testes no futuro.

## Próximos passos
- [ ] Executar os casos exploratórios CT-E01 a CT-E06
- [ ] Registrar os bugs encontrados na pasta `qa/bugs`
- [ ] Ampliar a cobertura (ex.: testes de API, acessibilidade)
