# Logs de exemplo

Esta pasta contem **exemplos reais** de logs gerados pelo 0 A.D. no
Android. Servem como referencia para:

1. Saber como e um log normal (sem erros)
2. Saber o que anexar ao reportar bugs
3. Ajudar a identificar problemas comparando com seus proprios logs

## Arquivos

| Arquivo | O que e | Quando gerar |
|---|---|---|
| mainlog-exemplo.html | Log principal do jogo | Sempre. Anexe ao reportar qualquer bug |
| system_info-exemplo.txt | Informacoes do sistema (CPU, GPU, RAM) | Anexe em bugs de performance ou graficos |

## Como gerar seus proprios logs

Os logs ficam em /sdcard/0ad/appdata/logs/ no device.

    mkdir -p ~/meus-logs
    adb pull /sdcard/0ad/appdata/logs/ ~/meus-logs/

Ou individualmente:

    adb pull /sdcard/0ad/appdata/logs/mainlog.html
    adb pull /sdcard/0ad/appdata/logs/interestinglog.html
    adb pull /sdcard/0ad/appdata/logs/system_info.txt
    adb pull /sdcard/0ad/appdata/logs/userreport_hwdetect.txt

## O que anexar em uma issue

Para bugs em geral:

- mainlog.html (obrigatorio)
- interestinglog.html (se nao estiver vazio)

Para crashes:

- mainlog.html
- logcat-android.txt (log do Android):

      adb logcat -d > logcat-android.txt

- Tombstone (se existir):

      adb shell ls /data/tombstones/
      adb shell cat /data/tombstones/tombstone_XX > tombstone.txt

Para bugs de performance ou graficos:

- mainlog.html
- system_info.txt
- userreport_hwdetect.txt

## Aviso

Os logs podem conter informacoes pessoais como:

- Nome do device
- Nome de usuario
- Caminhos de arquivos
- Configuracoes locais

Revise antes de anexar publicamente. Remova ou substitua informacoes
sensiveis.

## Como interpretar

### mainlog.html

Contem a sequencia de eventos da ultima execucao do jogo. Procure por:

- ERROR - problemas que o jogo detectou
- WARNING - avisos que podem ou nao ser problemas
- FILES - arquivos que o jogo escreveu

### interestinglog.html

Contem apenas eventos que o jogo considerou importantes. Se estiver
vazio, significa que nao houve nada critico na ultima sessao.

### system_info.txt

Contem:

- Modelo do device
- Versao do Android
- GPU e driver
- RAM disponivel
- Configuracoes de tela

### userreport_hwdetect.txt

Resultado da deteccao automatica de hardware. Util para entender
quais configuracoes o jogo escolheu automaticamente.

## Exemplos

Os arquivos mainlog-exemplo.html e system_info-exemplo.txt nesta pasta
sao de uma execucao bem-sucedida do jogo. Use-os como referencia do
que esperar em um log normal.
