# Mods auxiliares

Esta pasta reune mods auxiliares para a versão Android do 0 A.D. Eles **não alteram a jogabilidade central** — apenas adicionam conveniências para touch.

## Mods disponíveis

| Mod | Descrição | Status |
|---|---|---|
| [quickbar](quickbar/) | Barra de atalhos expansível para jogar sem teclado | Estável |

## Como instalar um mod

### 1. Copiar a pasta para o device

Importante: copie a **pasta** do mod, não um arquivo `.zip`.

```
adb push quickbar/ /sdcard/0ad/data/mods/quickbar/
```

### 2. Verificar a estrutura

A `strutura no device deve ser:

```
/sdcard/0ad/data/mods/quickbar/
├── mod.json
├── gui/
│   └── session/
│       ├── session.xml
│       ├── quickbar.xml
│       └── quickbar/
│           └── quickbar.js
```

Se estiver assim, está correto:
```
/sdcard/0ad/data/mods/quickbar/mod.json           → OK
/sdcard/0ad/data/mods/quickbar/gui/session/...    → OK
```

Errado (não funciona):
```
/sdcard/0ad/data/mods/quickbar.zip                → ZIP, não carrega
```

### 3. Habilitar o mod

Edite `/sdcard/0ad/appdata/config/user.cfg` e adicione o mod no final da lista `mod.enabledmods`:

```
mod.enabledmods = "mod public quickbar"
```

Ou, se já tiver outros mods:

```
mod.enabledmods = "mod public outro-mod quickbar"
```

### 4. Reiniciar o