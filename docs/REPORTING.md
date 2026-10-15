# Como reportar problemas

Guia para reportar bugs e problemas de forma efetiva.

## Antes de reportar

1. **Leia o TROUBLESHOOTING.md** — seu problema pode ja ter solucao
2. **Verifique se ja existe uma issue** aberta sobre o mesmo problema
3. **Atualize para a versao mais recente** do APK

---

## Escopo de suporte

Este projeto suporta apenas:

- O port Android (instalacao, execucao, controles de toque)
- Mods auxiliares publicados neste repositorio

**Nao suportados:**

- Bugs do jogo original (gameplay, balanceamento, IA)
- Mods de terceiros
- Compatibilidade com hardware especifico nao testado

Para bugs do jogo original, use o forum oficial:
https://wildfiregames.com/forum/

---

## O que incluir em uma issue

### Informacoes obrigatorias

| Campo | Exemplo |
|---|---|
| Modelo do dispositivo | POCO F3 (M2012K11AG) |
| Versao do Android | 13 |
| Versao do APK | 0.28.0-android-1 |
| Tipo de problema | Crash / Tela preta / Sem audio / etc. |
| Descricao | O que acontece de errado |
| Passos para reproduzir | 1. Abrir o app; 2. Iniciar partida; 3. ... |

### Logs

Anexe pelo menos o . Para crashes, inclua tambem o logcat.

Veja como gerar em: [Como gerar logs](#como-gerar-logs)

---

## Como gerar logs

### Logs do jogo

Os logs ficam em /sdcard/0ad/appdata/logs/ no device.

Para copiar todos de uma vez:

    mkdir -p ~/meus-logs
    adb pull /sdcard/0ad/appdata/logs/ ~/meus-logs/

Ou individualmente:

    adb pull /sdcard/0ad/appdata/logs/mainlog.html
    adb pull /sdcard/0ad/appdata/logs/interestinglog.html
    adb pull /sdcard/0ad/appdata/logs/system_info.txt

### Log do Android (logcat)

Para crashes, capture tambem o log do Android:

    adb logcat -d > logcat-android.txt

Se o app travou recentemente, o log pode nao estar mais disponivel. Neste caso:

    adb logcat -c
    # Abra o app e reproduza o problema
    adb logcat -d > logcat-android.txt

### Quais logs anexar

| Tipo de problema | Anexar |
|---|---|
| Crash imediato | mainlog.html, logcat-android.txt |
| Tela preta | mainlog.html |
| Sem audio | mainlog.html, system_info.txt |
| Performance ruim | mainlog.html, system_info.txt |
| Mod nao funciona | mainlog.html, arquivos do mod |

---

## Como abrir uma issue

1. Va em [Issues](../../issues) no repositorio
2. Clique em **New Issue**
3. Escolha o template **Bug report**
4. Preencha as informacoes obrigatorias
5. Anexe os logs (arraste os arquivos para o campo de texto)
6. Envie

---

## Aviso sobre privacidade

Os logs podem conter:

- Nome do seu device
- Nome de usuario
- Caminhos de arquivos locais
- Configuracoes pessoais

**Revise os logs antes de anexar publicamente.** Remova ou substitua
informacoes que voce nao quer tornar publicas.

Para remover nome de usuario e device do mainlog.html:

    sed -i 's/SEU_NOME/USER/g; s/SEU_DEVICE/DEVICE/g' mainlog.html

---

## Como anexar arquivos grandes

O GitHub tem limite de 25 MB por arquivo. Se o mainlog.html for muito grande:

1. Comprima:

       gzip mainlog.html

2. Ou hospede em outro servico (Google Drive, Dropbox) e cole o link na issue

3. Ou cole as ultimas 100 linhas:

       tail -100 mainlog.html > mainlog-reduzido.html

---

## Tempo de resposta

Este e um projeto mantido por voluntarios. Nao ha SLA de resposta.

Issues com logs completos e descricao clara sao resolvidas mais rapido.

Se voce quiser ajudar a resolver o problema, considere:

- Investigar o codigo ou os logs
- Propor uma solucao
- Contribuir com um Pull Request

---

## Outros canais

- **Forum oficial do 0 A.D.**: https://wildfiregames.com/forum/
- **Gitea oficial**: https://gitea.wildfiregames.com/0ad/0ad

Para duvidas sobre o 0 A.D. original (nao o port Android):
use os canais oficiais acima.
