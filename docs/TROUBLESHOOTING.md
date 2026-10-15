# Problemas comuns

Solucoes para os problemas mais frequentes.

## Indice

1. App fecha ao abrir
2. Erro ao instalar o APK
3. Tela preta ou rosa
4. Sem audio
5. Jogo abre mas nao inicia partida
6. Mod nao carrega
7. Outros problemas

---

## 1. App fecha ao abrir

**Causa mais comum:** falta de permissao de armazenamento no Android 11+.

**Solucao:**

1. Abra **Configuracoes** do Android
2. Va em **Apps** -> **0 A.D.**
3. Toque em **Permissoes** -> **Arquivos e midia**
4. Selecione **Permitir gerenciamento de todos os arquivos**
5. Abra o jogo novamente

Se nao resolver, verifique se os dados do jogo estao instalados.
Veja INSTALL.md Passo 4.

---

## 2. Erro ao instalar o APK

**Sintoma:** aparece uma mensagem como app nao instalado ou APK invalido.

**Solucoes:**

1. **Desinstale** qualquer versao anterior do 0 A.D. e tente de novo
2. **Reinicie** o dispositivo e tente novamente
3. Verifique se ha **espaco livre** suficiente (pelo menos 1 GB)
4. Se o APK foi baixado pela internet, baixe novamente
5. Se o APK veio de outra fonte, verifique se e o arquivo correto

---

## 3. Tela preta ou rosa

**Causa mais comum:** dados do jogo faltando ou incompletos.

**Solucao:**

1. Verifique se public.zip e mod.zip estao instalados
2. Veja INSTALL.md Passo 4 para instrucoes de instalacao
3. Se os dados estao instalados, tente limpar o cache do jogo:

   - Configuracoes -> Apps -> 0 A.D. -> Armazenamento
   - Toque em **Limpar cache**
   - Abra o jogo novamente

---

## 4. Sem audio

**Solucoes:**

1. Verifique se o **volume do dispositivo** esta alto
2. Verifique se o **modo silencioso** esta desligado
3. Verifique se outro app esta tocando audio (feche-o)
4. Reinicie o jogo

---

## 5. Jogo abre mas nao inicia partida

**Causa mais comum:** dados do jogo incompletos (mapas faltando).

**Solucao:**

1. Reinstale os dados do jogo (veja INSTALL.md Passo 4)
2. Verifique se ha **espaco livre** suficiente no dispositivo
3. Tente uma partida com configuracao menor (menos jogadores)

---

## 6. Mod nao carrega

**Para mods auxiliares** (como o quickbar):

1. Verifique se o mod esta em /sdcard/0ad/data/mods/NOME_DO_MOD/
2. Verifique se o mod precisa ser **pasta extraida** (nao zip)
   - O quickbar precisa ser pasta
3. Verifique se esta **habilitado** no user.cfg:

   mod.enabledmods = mod public quickbar

4. Reinicie o jogo completamente

Para mods de terceiros, consulte a documentacao do autor.

---

## 7. Outros problemas

Se nenhuma das solucoes acima resolveu, **reporte o problema**.

Veja REPORTING.md para instrucoes de como reportar.

**Ao reportar, inclua:**

- Modelo do dispositivo
- Versao do Android
- Descricao do problema
- Passos para reproduzir
- Logs (veja REPORTING.md)

---

## Aviso sobre escopo

Este projeto **nao suporta**:

- Bugs do jogo original (gameplay, balanceamento, IA)
- Mods de terceiros
- Configuracoes muito especificas de hardware

Para bugs do jogo original, reporte no forum oficial:
https://wildfiregames.com/forum/

Para mods de terceiros, contate o autor do mod.
