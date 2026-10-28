# Plano de Testes — SauceDemo

| Campo | Valor |
|---|---|
| **Sistema sob teste** | SauceDemo (https://www.saucedemo.com), e-commerce de demonstração |
| **Responsável** | Raíssa de Castro |
| **Versão do documento** | 1.0 |

## 1. Objetivo
Verificar se os fluxos principais de compra (login, navegação no catálogo, carrinho e checkout) funcionam conforme o esperado e tratam corretamente entradas inválidas.

## 2. Escopo

**Dentro do escopo**
- Login e logout, incluindo credenciais inválidas e usuário bloqueado
- Listagem e ordenação de produtos; detalhe do produto
- Adicionar e remover itens do carrinho
- Checkout: validação dos dados e confirmação do pedido
- Comportamento dos usuários de teste especiais (`problem_user`, `performance_glitch_user`) de forma exploratória

**Fora do escopo**
- Testes de carga e segurança aprofundados
- Integrações de pagamento (o site é apenas uma demonstração)

## 3. Estratégia

| Tipo | Como | Ferramenta |
|---|---|---|
| Funcional automatizado | Fluxos principais, positivos e negativos | Cypress |
| Funcional manual / exploratório | Usuários especiais, variações de entrada | Navegador + DevTools |
| Regressão | Execução a cada push | GitHub Actions |
| Compatibilidade | Chrome, Firefox e Edge (manual) | Navegadores |

## 4. Massa de dados

| Usuário | Senha | Uso |
|---|---|---|
| `standard_user` | `secret_sauce` | Fluxo normal |
| `locked_out_user` | `secret_sauce` | Cenário de usuário bloqueado |
| `problem_user` | `secret_sauce` | Exploratório: comportamentos inesperados |
| `performance_glitch_user` | `secret_sauce` | Exploratório: lentidão |

## 5. Ambiente
- Navegadores: Chrome, Firefox, Edge (versões a registrar no relatório)
- Automação: Cypress 13, Node.js 20
- CI: GitHub Actions (Ubuntu)

## 6. Critérios
**Entrada:** site acessível e casos de teste revisados.
**Saída:** 100% dos casos de prioridade Alta executados e sem bugs Críticos ou Altos em aberto; pipeline verde.

## 7. Severidade

| Severidade | Definição |
|---|---|
| Crítica | Impede o fluxo principal (ex.: não é possível finalizar a compra) |
| Alta | Resultado incorreto de regra de negócio (ex.: subtotal errado) |
| Média | Falha com contorno possível |
| Baixa | Problema visual ou de texto |

## 8. Riscos

| Risco | Mitigação |
|---|---|
| O site é de terceiros e pode mudar seletores ou textos | Usar atributos `data-test` e reexecutar a suíte periodicamente |
| Instabilidade de rede no CI | Timeouts ajustados e reexecução manual do workflow |
| Comportamentos intencionalmente defeituosos de usuários especiais | Tratá-los apenas em testes exploratórios e relatá-los como bugs |
