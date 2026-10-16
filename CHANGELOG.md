# Changelog

Todas as mudanças notáveis deste projeto são documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/)
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

---

## [0.28.0-android-1] — 2026-10-15

### Adicionado

- Primeira release pública do port Android ARM64 do 0 A.D. 0.28.0.
- APK release assinado (~32 MB).
- Mod auxiliar `quickbar` — barra de atalhos expansível para jogar sem teclado.
- Documentação completa: `INSTALL.md`, `CONTROLS.md`, `TROUBLESHOOTING.md`, `REPORTING.md`.

### Características

- Engine compilando e executando em Android ARM64.
- Controles de toque: toque, pressionar e segurar, arrastar, pinçar.
- Áudio funcional (música e efeitos sonoros via OpenAL Soft).
- GUI renderizando corretamente.

### Corrigido

- Crash `SIGSEGV` em `JS::GetPromiseState` causado por falta de `MANAGE_EXTERNAL_STORAGE` no Android 11+.
- `INSTALL_FAILED_INVALID_APK: code is missing` resolvido com `gradlew clean` obrigatório no release.

### Otimizado

- Strip das bibliotecas nativas: 498 MB → 80 MB (-84%).
- APK final: 142 MB → 32 MB (-77%).
- R8 + shrinkResources ativos.

### Conhecido (limitações)

- **Multiplayer local funcionando.** Entre Android, Windows, Steam deck usando ip do host.
- **Multiplayer Online.** O lobby e a conexão multiplayer não foram adaptados.
- **Mods não suportados oficialmente.** Não testado,  Apenas o `quickbar` é mantido.
- **Shaders customizados não suportados.** Apenas shaders do `public.zip` são usados.
- **Sem suporte a teclado físico ou gamepad.** Não testado

---

## Formato do changelog

### Tipos de mudança

- `Adicionado` — novas funcionalidades
- `Modificado` — mudanças em funcionalidades existentes
- `Descontinuado` — funcionalidades que serão removidas
- `Removido` — funcionalidades removidas
- `Corrigido` — correções de bugs
- `Segurança` — correções de vulnerabilidades

### Versionamento

Este projeto segue o padrão `MAJOR.MINOR.PATCH-variante`:

- **MAJOR/MINOR/PATCH** — versão do 0 A.D. base (ex: `0.28.0`)
- **variante** — número do port (ex: `android-1`, `android-2`)

Exemplo: `0.28.0-android-2` significa "segunda versão do port para Android baseada no 0 A.D. 0.28.0".
