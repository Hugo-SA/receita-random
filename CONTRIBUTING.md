# Guia de contribuição

Obrigado por querer contribuir! Este projeto segue o **Gitflow**. Leia este guia antes de abrir sua primeira issue ou pull request.

## Branches

| Branch | Origem | Destino | Para que serve |
|---|---|---|---|
| `main` | - | - | Código estável, somente versões publicadas (cada merge recebe uma tag `vX.Y.Z`) |
| `develop` | `main` | - | Integração: reúne tudo que já foi aprovado e será a próxima versão |
| `feature/<nome>` | `develop` | `develop` | Nova funcionalidade ou melhoria |
| `release/<X.Y.Z>` | `develop` | `main` e `develop` | Preparação de uma versão (changelog, ajustes finais) |
| `hotfix/<X.Y.Z>-<nome>` | `main` | `main` e `develop` | Correção urgente de algo que já está em produção |

```
main      ●─────────────────────●──────────●─────────  (v1.0.0)  (v1.0.1)
           \                   / \        /
hotfix      \                 /   ●──────●
             \               /
release       \         ●────●
               \       /
develop  ●──●───●──●──●──────────────────●─────────
              \    /
feature        ●──●
```

## Fluxo de trabalho

1. **Abra (ou escolha) uma issue** descrevendo o que será feito. Discuta antes de codar.
2. **Crie sua branch** a partir da `develop`:
   ```bash
   git switch develop
   git pull
   git switch -c feature/nome-curto
   ```
3. **Faça commits pequenos e descritivos** (veja o padrão abaixo).
4. **Envie a branch** e **abra um pull request** para `develop`:
   ```bash
   git push -u origin feature/nome-curto
   ```
5. Na descrição do PR, vincule a issue com `Closes #N`.
6. Aguarde a **revisão**. Ajuste o que for pedido com novos commits na mesma branch.
7. Após a aprovação, o PR é mesclado com **merge commit** (preserva o histórico da branch) e a branch é apagada.

## Padrão de commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/pt-br/):

```
<tipo>: <descrição curta no imperativo>
```

| Tipo | Quando usar |
|---|---|
| `feat` | Nova funcionalidade |
| `fix` | Correção de bug |
| `docs` | Somente documentação |
| `style` | Estilo/formatação (sem mudar comportamento) |
| `refactor` | Reorganização de código sem mudar comportamento |
| `chore` | Tarefas de manutenção (configuração, releases, templates) |

Exemplo: `feat: trata erros da requisição com try/catch`

## Versionamento

Seguimos o [Versionamento Semântico](https://semver.org/lang/pt-BR/): `MAJOR.MINOR.PATCH`.

- **PATCH** (`1.0.1`): correções de bugs (geralmente via `hotfix`)
- **MINOR** (`1.1.0`): novas funcionalidades compatíveis
- **MAJOR** (`2.0.0`): mudanças que quebram compatibilidade

As mudanças de cada versão ficam registradas no [CHANGELOG](CHANGELOG.md).

## Revisão de código

Ao revisar um PR, verifique se:

- o PR resolve o que a issue pede, sem misturar assuntos;
- o código está legível e consistente com o restante do projeto;
- a página continua funcionando (abra o `index.html` e clique em **Receita Nova!!**).
