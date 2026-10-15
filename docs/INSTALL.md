# Instalacao - 0 A.D. para Android

Guia completo de instalacao do port Android ARM64.

## Pre-requisitos

- Dispositivo Android ARM64 (arm64-v8a)
- Android 5.0+ (API 21+)
- ~500 MB de espaco livre (alem do APK) para dados do jogo
- Cabo USB (para instalacao via ADB) ou gerenciador de arquivos no device

## Passo 1 - Baixar o APK

Baixe o APK mais recente na aba Releases deste repositorio.

Verifique o tamanho esperado:

- Release com strip: ~32 MB
- Se estiver muito diferente (~150 MB), algo deu errado

## Passo 2 - Instalar o APK

### Opcao A - Via ADB (recomendado)

    adb install -r 0ad-release.apk

### Opcao B - Manualmente no device

1. Copie o .apk para o device (via USB, Bluetooth, ou download direto)
2. Abra o gerenciador de arquivos
3. Toque no .apk
4. Se pedir, permita instalar de fontes desconhecidas

## Passo 3 - Conceder permissao de armazenamento

Isto e obrigatorio no Android 11+.

O 0 A.D. precisa ler os dados do jogo em /sdcard/0ad/, que fica fora
do sandbox do app. Sem permissao total, o jogo crasha ao iniciar.

### Como conceder

Opcao A - Manualmente:

1. Configuracoes do Android
2. Apps -> 0 A.D.
3. Permissoes -> Arquivos e midia
4. Selecione Permitir gerenciamento de todos os arquivos

Opcao B - Via ADB:

    adb shell appops set com.sabino.play0ad MANAGE_EXTERNAL_STORAGE allow

### Verificar se foi concedida

    adb shell dumpsys package com.sabino.play0ad | grep MANAGE_EXTERNAL_STORAGE

Esperado: granted=true

## Passo 4 - Preparar os dados do jogo

O APK nao inclui os dados do jogo (texturas, sons, modelos). Eles
precisam ser copiados separadamente.

### O que voce precisa

| Arquivo | Tamanho | Onde obter |
|---|---|---|
| public.zip | ~3.2 GB | Site oficial do 0 A.D. ou instalacao existente |
| mod.zip | ~89 MB | Idem |

### Onde obter os dados

Opcao A - Do site oficial:

1. Baixe o 0 A.D. 0.28.0 para PC em https://play0ad.com/download/
2. Instale no PC
3. Copie de <instalacao>/binaries/data/mods/:
   - public/ (a pasta inteira)
   - mod/ (a pasta inteira)

Opcao B - Do source oficial:

Os dados estao em binaries/data/mods/ no repositorio oficial em
https://gitea.wildfiregames.com/0ad/0ad

### Copiar para o device

Estrutura necessaria:

    /sdcard/0ad/
    |-- data/
        |-- mods/
            |-- mod/
                |-- mod.zip
            |-- public/
                |-- public.zip
    |-- appdata/          (criado automaticamente)

Comandos:

    adb shell mkdir -p /sdcard/0ad/data/mods/public
    adb shell mkdir -p /sdcard/0ad/data/mods/mod
    adb push public.zip /sdcard/0ad/data/mods/public/
    adb push mod.zip    /sdcard/0ad/data/mods/mod/

Verificar:

    adb shell ls -la /sdcard/0ad/data/mods/public/
    adb shell ls -la /sdcard/0ad/data/mods/mod/

## Passo 5 - Instalar mods auxiliares (opcional)

Mods como o quickbar adicionam atalhos para touch. Veja ../mods/

Exemplo - instalar o quickbar:

    adb push quickbar/ /sdcard/0ad/data/mods/quickbar/

Verificar:

    adb shell ls -la /sdcard/0ad/data/mods/quickbar/

E editar /sdcard/0ad/appdata/config/user.cfg:

    mod.enabledmods = "mod public quickbar"

## Passo 6 - Abrir o jogo

Toque no icone 0 A.D. na tela inicial do Android.

Primeira execucao: pode demorar 30-60 segundos (carregamento de
shaders, cache).

Esperado: voce ve o menu principal do 0 A.D.

## Problemas comuns

| Sintoma | Causa provavel | Solucao |
|---|---|---|
| App fecha ao abrir | Falta MANAGE_EXTERNAL_STORAGE | Ver Passo 3 |
| INSTALL_FAILED_INVALID_APK | APK corrompido | Rebuild com gradlew clean |
| Tela preta | Dados do jogo faltando | Ver Passo 4 |
| Sem audio | Configuracao de audio | Ver TROUBLESHOOTING |
| Crash ao selecionar unidade | Bug do port | Reportar com logs |

Mais problemas em TROUBLESHOOTING.md

## Desinstalar

    adb uninstall com.sabino.play0ad

Nota: os dados em /sdcard/0ad/ nao sao removidos. Se quiser limpar
tudo:

    adb shell rm -rf /sdcard/0ad/

## Proximos passos

Depois de instalar e rodar o jogo:

- Veja CONTROLS.md para aprender os controles de toque
- Veja TROUBLESHOOTING.md se algo der errado
- Instale mods auxiliares de ../mods/ para melhorar a experiencia
