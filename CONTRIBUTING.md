# Como contribuir

Guia para contribuir com o projeto **0ad-android-releases**.

## Escopo de contribuicao

Este repositorio aceita contribuicoes em **duas areas**:

| Area | Aceito | Nao aceito |
|---|---|---|
| Mods auxiliares | Adicionar atalhos, melhorar usabilidade movel | Alterar unidades, tecnologias, regras do jogo |
| Documentacao | Correcoes, melhorias, traducao | Reescrever do zero sem discussao previa |
| Codigo do port | Correcoes de bugs, ajustes de compatibilidade | Fork do port inteiro, reescritas massivas |

**Aceitamos apenas contribuicoes relacionadas a experiencia movel.** Bugs do jogo original devem ser reportados ao projeto oficial do 0 A.D.

---

## Fluxo de contribuicao

### 1. Antes de comecar

- **Verifique** se ja existe uma issue aberta sobre o mesmo assunto
- Para **mods novos**, abra uma issue usando o template **Contribuicao de mod** antes de codificar
- Para **bugs**, abra uma issue usando o template **Reportar bug**
- Para **correcoes pequenas** em documentacao, pode ir direto ao PR

### 2. Fork e clone

    # Faca um fork pelo botao no GitHub
    # Depois clone o SEU fork:
    git clone https://github.com/SEU_USUARIO/0ad-android-releases.git
    cd 0ad-android-releases

    # Adicione o repositorio original como remote "upstream":
    git remote add upstream https://github.com/Revers-BR/0ad-android-releases.git

### 3. Crie uma branch

    git checkout -b minha-contribuicao

Use um nome descritivo:

- `add-mod-batch-training` — para novo mod
- `fix-typo-readme` — para correcao de texto
- `docs-improve-install` — para documentacao

### 4. Faca as mudancas

- Siga as regras da secao de contribuicao especifica
- Teste localmente quando aplicavel
- Mantenha os commits pequenos e focados

### 5. Commit

Use **Conventional Commits** quando possivel:

    git add .
    git commit -m "feat(mods): adiciona mod batch-training"

Tipos de commit:

| Tipo | Uso |
|---|---|
| feat | Nova funcionalidade (novo mod, novo doc) |
| fix | Correcao de bug |
| docs | Mudanca em documentacao |
| chore | Manutencao (gitignore, etc.) |
| style | Formatacao (sem mudanca de logica) |
| refactor | Reestruturacao (sem mudanca de comportamento) |

### 6. Push e Pull Request

    git push origin minha-contribuicao

Depois, abra um **Pull Request** no GitHub apontando para o repositorio original.

**O template de PR sera carregado automaticamente.** Preencha todas as secoes.

---

## Regras para contribuicao de mods

### Estrutura obrigatoria

Cada mod deve ter:

    mods/NOME_DO_MOD/
    |-- README.md              (obrigatorio)
    |-- mod.json               (obrigatorio)
    |-- gui/                   (se aplicavel)
    |   |-- session/
    |       |-- ...
    |-- simulation/            (se aplicavel)
    |-- art/                   (se aplicavel)
    |-- audio/                 (se aplicavel)

### mod.json valido

    {
      "name": "nome-do-mod",
      "version": "1.0.0",
      "label": "Nome Amigavel",
      "description": "Descricao curta do que o mod faz.",
      "dependencies": ["0ad=0.28.0"]
    }

Campos:

| Campo | Obrigatorio | Descricao |
|---|---|---|
| name | Sim | Identificador unico, minusculas, sem espacos |
| version | Sim | Versao semantica (1.0.0, 1.1.0, etc.) |
| label | Sim | Nome amigavel para exibir ao usuario |
| description | Sim | Descricao curta (1-2 frases) |
| dependencies | Sim | Sempre contendo 0ad=0.28.0 |

### README.md do mod

O README deve conter:

- **Nome e descricao** do mod
- **Problema que resolve** (por que alguem usaria?)
- **Instrucoes de instalacao** (pasta ou zip?)
- **Como usar** (botoes, atalhos, gestos)
- **Compatibilidade** (versao do 0 A.D., Android)
- **Autor** e licenca

### Regras do conteudo

**Aceitos:**

- Adicionar atalhos para acoes frequentes
- Melhorar usabilidade em telas pequenas
- Reduzir quantidade de toques necessarios
- Adicionar suporte a gestos customizados
- Ajustes de layout e tamanho de botoes

**Nao aceitos:**

- Alterar unidades, tecnologias, precos ou regras do jogo
- Modificar balanceamento
- Adicionar conteudo novo (mapas, civilizacoes, unidades)
- Mods que quebrem a compatibilidade com 0 A.D. 0.28.0
- Mods com dependencias externas (libs, binarios, etc.)
- Mods que imitem funcionalidades ja existentes no jogo base

**Principio:** adaptar o jogo ao touch, nao modifica-lo.

### Teste obrigatorio

Antes de enviar:

1. Copie a pasta para `/sdcard/0ad/data/mods/NOME_DO_MOD/` no device
2. Habilite em `/sdcard/0ad/appdata/config/user.cfg`:

       mod.enabledmods = "mod public NOME_DO_MOD"

3. Reinicie o jogo e teste
4. Verifique o mainlog.html:

       adb pull /sdcard/0ad/appdata/logs/mainlog.html

5. Procure por erros relacionados ao nome do mod

Se houver erros no log, corrija antes de enviar.

---

## Regras para contribuicao de documentacao

- Use **portugues** (idioma atual do projeto)
- Evite **caracteres acentuados** em arquivos .md (compatibilidade com terminais)
- Use **blocos de codigo** com indentacao de 4 espacos (nao crases aninhadas)
- Mantenha **consistencia** com o estilo dos arquivos existentes
- **Links relativos** para arquivos do proprio repositorio
- **Links absolutos** para recursos externos

### Estrutura de pastas

| Pasta | Conteudo |
|---|---|
| `docs/` | Guias de instalacao, uso, troubleshooting, reporting |
| `mods/` | Mods auxiliares (cada um em sua pasta) |
| `logs/` | Exemplos de logs para diagnostico |
| `.github/` | Templates de issue e PR |

---

## Regras para contribuicao de codigo

**No momento, apenas correcoes relacionadas ao port Android sao aceitas.**

Antes de enviar, abra uma issue para discussao. Mudancas grandes sem alinhamento previo podem ser recusadas.

Se aprovado:

1. Documente a mudanca no `README.md` ou no arquivo apropriado
2. Atualize o `CHANGELOG.md` com a mudanca
3. Teste no device
4. Siga o fluxo normal de PR

---

## O que NAO fazer

- **Nao commitar arquivos grandes** (APKs, `.so`, `.zip`, `.jks`)
- **Nao modificar o `LICENSE.txt`** sem discussao previa
- **Nao alterar versoes** de dependencias sem discussao
- **Nao adicionar** frameworks, ferramentas de build ou CI sem discussao
- **Nao commitar** chaves, senhas, tokens ou arquivos `keystore.properties`
- **Nao abrir PR** com multiplas mudancas nao relacionadas (quebre em PRs menores)

---

## Revisao de Pull Request

Os PRs sao revisados por mantenedores. O tempo de resposta varia.

Para acelerar:

- **Seja claro** na descricao do PR
- **Preencha** todos os campos do template
- **Inclua logs** quando relevante
- **Teste** antes de enviar
- **Responda** aos comentarios de revisao

O PR pode ser:

- **Aprovado e merged** — quando pronto
- **Solicitado alteracoes** — voce faz as mudancas e atualiza
- **Recusado** — quando fora do escopo ou problematico

---

## Licenca

Ao contribuir, voce concorda que sua contribuicao sera distribuida sob a **GPL v2 ou posterior**, a mesma do 0 A.D.

---

## Duvidas?

- Abra uma [issue](../../issues/new/choose)
- Consulte o [README.md](README.md)
- Consulte os [guias em docs/](docs/)
