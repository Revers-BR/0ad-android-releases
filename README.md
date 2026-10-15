# 0 A.D. para Android ARM64 — Releases

Este repositório distribui **builds não-oficiais do 0 A.D. 0.28.0 para Android ARM64**, além de mods auxiliares e documentação para a versão móvel.

> **Aviso:** este é um **port não-oficial**. O 0 A.D. é desenvolvido pela Wildfire Games e pela comunidade. Este projeto **não altera o código-fonte original** — apenas aplica patches de compatibilidade para que o engine compile e execute em Android ARM64.

---

## 📥 Download

Os APKs estão disponíveis na aba [**Releases**](../../releases) deste repositório.

| Versão | Data | Tamanho |
|---|---|---|
| 0.28.0-android-1 | 2026-10-15 | ~32 MB |

**Requisitos:**
- Android 5.0+ (API 21+) com ARM64
- ~500 MB de espaço livre para dados do jogo
- GPU com OpenGL ES 2.0+
- Testado em: POCO F3 (Adreno 650)

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

## 📦 Mods auxiliares

| Mod | Descrição |
|---|---|
| [`quickbar`](mods/quickbar/) | Barra de atalhos expansível |

### Contribuindo com mods

Contribuições são bem-vindas!

**Regras:**
- Compatível com 0 A.D. 0.28.0
- Não altera unidades, tecnologias ou regras
- Foca em usabilidade móvel
- Inclui `mod.json` e `README.md`

---

## 🐛 Suporte

Este repositório **suporta apenas**:
- ✅ O port Android
- ✅ Mods auxiliares publicados aqui
- ❌ O jogo em si
- ❌ Mods de terceiros

### Como gerar logs

    adb pull /sdcard/0ad/appdata/logs/mainlog.html

Anexe pelo menos o `mainlog.html` à issue.

---

## 📜 Licença

GPL v2 ou posterior.

---

## 🙏 Créditos

- **Wildfire Games** — pelo jogo
- **0ad-sailfish** — base para o port
- Todos os contribuidores
