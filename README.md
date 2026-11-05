# 0 A.D. para Android ARM64 — Releases

Este repositório distribui **builds não-oficiais do 0 A.D. 0.28.0 para Android ARM64**, além de mods auxiliares e documentação para a versão móvel.

> **Aviso:** este é um **port não-oficial**. O 0 A.D. é desenvolvido pela Wildfire Games e pela comunidade. Este projeto **não altera o código-fonte original** — apenas aplica patches de compatibilidade para que o engine compile e execute em Android ARM64.

---

## 📥 Download

Os APKs estão disponíveis na aba [**Releases**](../../releases) deste repositório.

| Versão | Data | Tamanho | Novidades |
|---|---|---|---|
| 0.28.0-android-2 | 2026-11-05 | ~32 MB | Suporte a drivers Vulkan customizados |
| 0.28.0-android-1 | 2026-10-15 | ~32 MB | Primeira release pública |

**Requisitos:**
- Android 5.0+ (API 21+) com ARM64 (arm64-v8a)
- 6 GB de RAM recomendado
- ~4 GB de espaco livre para os dados do jogo
- GPU com OpenGL ES 2.0+
- Testado em: POCO F3 (Adreno 650)

---

## 🎥 Vídeos de teste

Testes de jogabilidade e demonstrações do port em execução no dispositivo real podem ser vistos no perfil do autor:

- [**reddit.com/user/Revers1987**](https://www.reddit.com/user/Revers1987/)

---

## 🚀 Instalação rápida

### 1. Instalar o APK

    adb install -r 0ad-release.apk

Ou copie o `.apk` para o device e abra.

### 2. Conceder permissão de armazenamento

No **Android 11+**, o app **precisa** de permissão total de armazenamento:

**Configurações → Apps → 0 A.D. → Permissões → Arquivos e mídia → Permitir gerenciamento de todos os arquivos**

Ou via ADB:

    adb shell appops set com.sabino.play0ad MANAGE_EXTERNAL_STORAGE allow

> ⚠️ **Sem essa permissão, o app crasha ao iniciar.**

### 3. Preparar os dados do jogo

Os dados do 0 A.D. **não estão incluídos no APK** — precisam ser copiados separadamente.

Você precisa de:
- `public.zip` (~3.2 GB)
- `mod.zip` (~89 MB)

Copiar para o device:

    adb shell mkdir -p /sdcard/0ad/data/mods/public
    adb shell mkdir -p /sdcard/0ad/data/mods/mod
    adb push public.zip /sdcard/0ad/data/mods/public/
    adb push mod.zip    /sdcard/0ad/data/mods/mod/

### 4. Abrir o jogo

Toque no ícone **0 A.D.** na tela inicial.

---

## 🎮 Controles de toque

| Gesto | Ação |
|---|---|
| 1 dedo — toque | Selecionar unidades |
| 1 dedo — pressionar e segurar | Clique direito |
| 1 dedo — arrastar | Seleção por retângulo |
| 2 dedos — arrastar | Mover câmera |
| 2 dedos — pinçar | Zoom |

---

## 🖥️ Drivers Vulkan customizados (Turnip/PurpleVK)

A partir da versão **0.28.0-android-2**, o port suporta o carregamento de drivers Vulkan customizados via [`libadrenotools`](https://github.com/bylaws/libadrenotools). Isso permite usar drivers como **Turnip** ou **PurpleVK** em GPUs Adreno, o que pode melhorar o desempenho ou a compatibilidade com o backend Vulkan do 0 A.D.

**Como usar:**

1. Crie a pasta `/sdcard/0ad/drivers/<nome-do-driver>/` e coloque o arquivo `.so` do driver dentro (ex.: `libvulkan_freedreno.so`).
2. No `user.cfg` do jogo (em `/sdcard/0ad/appdata/config/user.cfg`), adicione:
