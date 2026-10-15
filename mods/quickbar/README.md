# Quick Action Bar

Barra de atalhos expansivel para jogar 0 A.D. no Android **sem teclado**.

## O que faz

O quickbar adiciona uma barra flutuante na interface do jogo com botoes
para acoes frequentes que, no PC, normalmente sao feitas por teclado.
Ideal para dispositivos touch, onde nao ha teclas de atalho.

Problema que resolve:

Jogar 0 A.D. no Android sem um quickbar significa dezenas de toques para
acoes simples como:

- Criar varios civis de uma vez
- Selecionar todos os soldados
- Construir repetidamente
- Alternar entre grupos de controle

O quickbar agrupa essas acoes em um unico toque.

## Instalacao

Importante: o mod precisa ser extraido (pasta, nao zip) para funcionar.

### 1. Copiar a pasta para o device

    adb push quickbar/ /sdcard/0ad/data/mods/quickbar/

A estrutura final deve ser:

    /sdcard/0ad/data/mods/quickbar/
    |-- mod.json
    |-- gui/
        |-- session/
            |-- session.xml
            |-- quickbar.xml
            |-- quickbar/
                |-- quickbar.js

### 2. Habilitar o mod

Edite /sdcard/0ad/appdata/config/user.cfg e adicione o quickbar no
final da lista mod.enabledmods:

    mod.enabledmods = "mod public quickbar"

O quickbar precisa estar no final da lista.

### 3. Reiniciar o jogo

Saia completamente do app e abra de novo.

## Como usar

Depois de habilitado, o quickbar aparece na tela durante a partida.
Os botoes sao:

| Botao | Acao |
|---|---|
| (a documentar) | ... |

Nota: esta secao sera preenchida na proxima iteracao, quando o mod
for testado em mais cenarios.

## Compatibilidade

- 0 A.D. 0.28.0 - testado
- Android ARM64 - testado em POCO F3 (Adreno 650)
- Outras versoes - nao testadas

## Estrutura do mod

    quickbar/
    |-- mod.json                    - metadados
    |-- gui/
        |-- session/
            |-- session.xml         - integracao com a sessao do jogo
            |-- quickbar.xml        - definicao da UI (botoes, layout)
            |-- quickbar/
                |-- quickbar.js     - logica dos atalhos

### Detalhes dos arquivos

- mod.json - metadados do mod (nome, versao, dependencias)
- session.xml - hook que injeta o quickbar na sessao do jogo
- quickbar.xml - layout e definicao dos botoes
- quickbar.js - logica JavaScript que traduz toques em comandos do jogo

## Contribuindo

Contribuicoes sao bem-vindas! Ideias:

- Novos atalhos (agrupar por tipo de unidade, etc.)
- Melhorias de layout (tamanho dos botoes, posicionamento)
- Suporte a gestos customizados
- Presets de quickbar para diferentes estilos de jogo

Veja as regras em ../README.md.

## Autor

- Rivair - criacao inicial

## Licenca

GPL v2+ (mesma do 0 A.D.)
