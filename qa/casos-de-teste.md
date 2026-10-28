# Casos de Teste — SauceDemo

**Status:** ⬜ Não executado · ✅ Passou · ❌ Falhou
**Auto:** 🤖 automatizado no Cypress · 🖐️ somente manual
Preencha **Resultado obtido** e **Status** a cada ciclo.

## Login

| ID | Prio. | Título | Passos | Resultado esperado | Obtido | Status | Auto |
|---|---|---|---|---|---|---|---|
| CT-L01 | Alta | Login válido | 1. Informar `standard_user` / `secret_sauce`<br>2. Clicar em Login | Abre a lista de produtos | | ⬜ | 🤖 |
| CT-L02 | Alta | Senha incorreta | 1. Usuário válido + senha errada<br>2. Login | Mensagem de credenciais inválidas | | ⬜ | 🤖 |
| CT-L03 | Média | Usuário vazio | 1. Só a senha<br>2. Login | "Username is required" | | ⬜ | 🤖 |
| CT-L04 | Média | Senha vazia | 1. Só o usuário<br>2. Login | "Password is required" | | ⬜ | 🤖 |
| CT-L05 | Alta | Usuário bloqueado | 1. `locked_out_user`<br>2. Login | Mensagem de usuário bloqueado; não entra | | ⬜ | 🤖 |
| CT-L06 | Alta | Acesso sem login | 1. Abrir `/inventory.html` direto | Redireciona ao login com aviso | | ⬜ | 🤖 |
| CT-L07 | Média | Logout | 1. Logar<br>2. Menu → Logout | Volta à tela de login | | ⬜ | 🤖 |

## Produtos

| ID | Prio. | Título | Passos | Resultado esperado | Obtido | Status | Auto |
|---|---|---|---|---|---|---|---|
| CT-P01 | Média | Catálogo completo | 1. Logar | 6 produtos exibidos | | ⬜ | 🤖 |
| CT-P02 | Média | Ordenar preço crescente | 1. Selecionar "Price (low to high)" | Preços em ordem crescente | | ⬜ | 🤖 |
| CT-P03 | Média | Ordenar preço decrescente | 1. Selecionar "Price (high to low)" | Preços em ordem decrescente | | ⬜ | 🤖 |
| CT-P04 | Baixa | Ordenar nome Z–A | 1. Selecionar "Name (Z to A)" | Nomes em ordem decrescente | | ⬜ | 🤖 |
| CT-P05 | Média | Detalhe do produto | 1. Clicar no nome de um produto<br>2. Voltar | Detalhe correto; retorna à lista | | ⬜ | 🤖 |

## Carrinho

| ID | Prio. | Título | Passos | Resultado esperado | Obtido | Status | Auto |
|---|---|---|---|---|---|---|---|
| CT-C01 | Alta | Adicionar um item | 1. "Add to cart" na mochila | Contador = 1; botão vira "Remove" | | ⬜ | 🤖 |
| CT-C02 | Alta | Adicionar dois itens | 1. Adicionar mochila e luz de bike | Contador = 2 | | ⬜ | 🤖 |
| CT-C03 | Média | Remover pela lista | 1. Adicionar<br>2. "Remove" | Contador desaparece | | ⬜ | 🤖 |
| CT-C04 | Alta | Itens no carrinho | 1. Adicionar 2 itens<br>2. Abrir o carrinho | Os 2 itens listados | | ⬜ | 🤖 |
| CT-C05 | Média | Remover pelo carrinho | 1. Adicionar<br>2. Abrir carrinho<br>3. Remover | Carrinho vazio | | ⬜ | 🤖 |

## Checkout

| ID | Prio. | Título | Passos | Resultado esperado | Obtido | Status | Auto |
|---|---|---|---|---|---|---|---|
| CT-K01 | Alta | Compra completa | 1. Adicionar item<br>2. Checkout<br>3. Preencher dados<br>4. Finish | "Thank you for your order!" | | ⬜ | 🤖 |
| CT-K02 | Média | Nome vazio | Preencher sem nome | "First Name is required" | | ⬜ | 🤖 |
| CT-K03 | Média | Sobrenome vazio | Preencher sem sobrenome | "Last Name is required" | | ⬜ | 🤖 |
| CT-K04 | Média | CEP vazio | Preencher sem CEP | "Postal Code is required" | | ⬜ | 🤖 |
| CT-K05 | Alta | Subtotal correto | 1. Adicionar 2 itens<br>2. Chegar ao resumo | Subtotal = soma dos preços | | ⬜ | 🤖 |
| CT-K06 | Baixa | Cancelar checkout | 1. Na etapa de dados, clicar Cancel | Volta ao carrinho | | ⬜ | 🤖 |

## Exploratórios (manuais)

| ID | Prio. | Título | Passos | Resultado esperado | Obtido | Status | Auto |
|---|---|---|---|---|---|---|---|
| CT-E01 | Média | Imagens dos produtos com `problem_user` | 1. Logar com `problem_user`<br>2. Observar a lista | Cada produto exibe a própria imagem | | ⬜ | 🖐️ |
| CT-E02 | Média | Botões "Add to cart" com `problem_user` | 1. Tentar adicionar todos os produtos | Todos podem ser adicionados | | ⬜ | 🖐️ |
| CT-E03 | Média | Ordenação com `problem_user` | 1. Alterar a ordenação | A lista é reordenada | | ⬜ | 🖐️ |
| CT-E04 | Média | Checkout com `problem_user` | 1. Preencher todos os campos | Todos os campos aceitam digitação | | ⬜ | 🖐️ |
| CT-E05 | Baixa | Lentidão com `performance_glitch_user` | 1. Logar e medir o tempo | Tempo de resposta aceitável (registrar valor) | | ⬜ | 🖐️ |
| CT-E06 | Média | Compatibilidade de navegadores | 1. Executar CT-L01, CT-C01 e CT-K01 em Chrome, Firefox e Edge | Mesmo comportamento | | ⬜ | 🖐️ |
