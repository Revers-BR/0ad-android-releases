# Controles de toque

Guia dos controles de toque do 0 A.D. para Android.

## Gestos basicos

| Gesto | Acao | Equivalente no PC |
|---|---|---|
| 1 dedo - toque | Selecionar unidade, clicar em UI | Clique esquerdo |
| 1 dedo - pressionar e segurar | Mover, atacar, construir | Clique direito |
| 1 dedo - arrastar | Selecao por retangulo | Clique e arrastar |
| 2 dedos - arrastar | Mover camera | Setas do teclado |
| 2 dedos - pincar | Zoom in/out | Scroll do mouse |

## Selecao

### Selecionar uma unidade

Toque nela.

### Selecionar multiplas unidades

Retangulo: arraste com 1 dedo. O retangulo aparece. Ao soltar, todas
as unidades dentro sao selecionadas.

Adicionar a selecao: (a documentar - provavelmente gesto especifico)

### Selecionar por tipo

(a documentar - provavelmente botoes do quickbar)

## Camera

### Mover camera

2 dedos - arrastar: toque com 2 dedos e mova na direcao desejada.

### Zoom

2 dedos - pincar: aproximar ou afastar os dedos.

O zoom tem limites configuraveis (ver view.zoom.min e view.zoom.max
em user.cfg).

### Rotacao

(a documentar - provavelmente botao ou gesto de 3 dedos)

### Centralizar em unidade

(a documentar)

## Acoes

### Mover unidade

1. Selecione a unidade
2. Pressione e segure no destino
3. Solte

### Atacar

1. Selecione a unidade
2. Pressione e segure sobre o inimigo

### Construir

1. Selecione o construtor
2. Abra o menu de construcao (parte da UI)
3. Escolha o predio
4. Pressione e segure no local

### Coletar recursos

1. Selecione o civil
2. Pressione e segure sobre o recurso (arvore, pedra, etc.)

### Formacao / postura

(a documentar)

## Interface (HUD)

### Abrir menus

- Menu principal: botao no canto
- Configuracoes: botao no canto
- Chat: botao de chat

### Produzir unidades

1. Selecione um predio (ex: Centro Civico)
2. Os botoes de producao aparecem no HUD
3. Toque no botao da unidade desejada

### Tecnologias

1. Selecione o predio (ex: Centro Civico)
2. Aba de tecnologias
3. Toque na tecnologia

### Grupos de controle

(a documentar - provavelmente via quickbar)

## quickbar (mod auxiliar)

O mod quickbar adiciona uma barra flutuante com atalhos para acoes
frequentes. Instale em ../mods/quickbar/

Atalhos disponiveis:

| Botao | Acao |
|---|---|
| (a documentar) | ... |

## Configuracoes relevantes

Algumas configuracoes de toque em user.cfg:

| Config | Padrao | Descricao |
|---|---|---|
| touch.dragthreshold | 40 | Distancia minima (em pixels) para considerar um gesto como arrasto |
| touch.onefingerpan | false | Se true, 1 dedo arrasta a camera em vez de selecionar |
| gui.scale | 1.5 | Escala da interface (aumentar para telas pequenas) |

## Limitacoes conhecidas

- Sem suporte a teclado fisico (atualmente)
- Sem suporte a gamepad (planejado)
- Sem comandos rapidos no HUD (usar o quickbar como paliativo)
- Multiplayer online indisponivel ( comandos de grupo)

## Feedback

Encontrou algo confuso ou faltando? Abra uma issue em
https://github.com/SEU_USUARIO/0ad-android-releases/issues
