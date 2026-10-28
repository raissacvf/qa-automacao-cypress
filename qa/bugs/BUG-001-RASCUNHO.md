# BUG-001 — [RASCUNHO] Usuário `problem_user` vê a mesma imagem em todos os produtos

> ⚠️ **Rascunho para você confirmar.** O SauceDemo possui comportamentos defeituosos de propósito para o usuário `problem_user`.
> Execute o caso **CT-E01**, confirme o que acontece e complete a seção de evidências antes de publicar.
> Se o comportamento for diferente do descrito, ajuste o texto.

| Campo | Valor |
|---|---|
| **ID** | BUG-001 |
| **Status** | Aberto |
| **Severidade** | Média |
| **Encontrado em** | __/__/____ |
| **Caso de teste relacionado** | CT-E01 |
| **Ambiente** | _SO, navegador e versão_ |

## Descrição
Ao entrar com `problem_user`, a lista de produtos não exibe a imagem correta de cada item.

## Passos para reproduzir
1. Acesse https://www.saucedemo.com
2. Faça login com `problem_user` / `secret_sauce`
3. Observe as imagens da lista de produtos

## Resultado esperado
Cada produto exibe a sua própria imagem.

## Resultado obtido
_Descreva o que você observou (ex.: todas as imagens são iguais)._

## Evidências
_Anexar captura de tela._

## Observações
Comparar com o comportamento de `standard_user`.
