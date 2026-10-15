/**
 * quickbar.js — Quick Action Bar para 0 A.D. 0.0.28 Android
 *
 * Menu expansível: [☰] → categorias → submenu lateral
 * Submenus: ⚔ Ação | 📷 Câmera | 👥 Seleção
 */

// ─────────────────────────────────────────────────────────────
// Estado
// ─────────────────────────────────────────────────────────────

var g_QB = {
	open:          false,
	activeCat:     null,
	initialized:   false,
	// Template escolhido pelo último clique num botão de treino vanilla
	batchTemplate: null,
};

var QB_ROTATE_STEP = 15; // graus por toque
var QB_ZOOM_STEP   = 4;  // unidades por toque

warn("QUICKBAR: script carregado");

// ─────────────────────────────────────────────────────────────
// Utilitários de GUI
// ─────────────────────────────────────────────────────────────

function qb_obj(name)  { return Engine.GetGUIObjectByName(name); }
function qb_hide(name) { var o = qb_obj(name); if (o) o.hidden = true;  }
function qb_show(name) { var o = qb_obj(name); if (o) o.hidden = false; }

function qb_closeAll()
{
	qb_hide("qb_categories");
	qb_hide("qb_sub_action");
	qb_hide("qb_sub_camera");
	qb_hide("qb_sub_select");
	g_QB.open      = false;
	g_QB.activeCat = null;
}

function qb_closeSubs()
{
	qb_hide("qb_sub_action");
	qb_hide("qb_sub_camera");
	qb_hide("qb_sub_select");
	g_QB.activeCat = null;
}

// ─────────────────────────────────────────────────────────────
// Inicialização — conecta todos os handlers
// ─────────────────────────────────────────────────────────────

function qb_init()
{
	var b = qb_obj("qb_main_btn");
	if (!b)
	{
		warn("QUICKBAR: qb_main_btn não encontrado");
		return false;
	}

	// ── Botão principal ──
	b.onPress = function() {
		if (g_QB.open)
			qb_closeAll();
		else
		{
			qb_show("qb_categories");
			g_QB.open = true;
		}
	};

	// ── Categorias ──
	qb_obj("qb_cat_action").onPress = function() {
		if (g_QB.activeCat === "action") { qb_closeSubs(); return; }
		qb_closeSubs();
		qb_show("qb_sub_action");
		g_QB.activeCat = "action";
	};

	qb_obj("qb_cat_camera").onPress = function() {
		if (g_QB.activeCat === "camera") { qb_closeSubs(); return; }
		qb_closeSubs();
		qb_show("qb_sub_camera");
		g_QB.activeCat = "camera";
	};

	qb_obj("qb_cat_select").onPress = function() {
		if (g_QB.activeCat === "select") { qb_closeSubs(); return; }
		qb_closeSubs();
		qb_show("qb_sub_select");
		g_QB.activeCat = "select";
	};

	// ── Submenu Ação ──
	qb_obj("qb_act_batch").onPress   = qb_action_batch;
	qb_obj("qb_act_stop").onPress    = qb_action_stop;
	qb_obj("qb_act_delete").onPress  = qb_action_delete;
	qb_obj("qb_act_aggressive").onPress = function() { qb_action_stance("aggressive"); };
	qb_obj("qb_act_defensive").onPress  = function() { qb_action_stance("defensive");  };
	qb_obj("qb_act_passive").onPress    = function() { qb_action_stance("passive");    };

	// ── Submenu Câmera ──
	qb_obj("qb_cam_cc").onPress       = qb_camera_cc;
	qb_obj("qb_cam_alert").onPress    = qb_camera_alert;
	qb_obj("qb_cam_rotleft").onPress  = qb_camera_rotleft;
	qb_obj("qb_cam_rotright").onPress = qb_camera_rotright;
	qb_obj("qb_cam_zoomin").onPress   = qb_camera_zoomin;
	qb_obj("qb_cam_zoomout").onPress  = qb_camera_zoomout;

	// ── Submenu Seleção ──
	qb_obj("qb_sel_workers").onPress   = qb_select_idle_workers;
	qb_obj("qb_sel_buildings").onPress = qb_select_idle_buildings;
	qb_obj("qb_sel_soldiers").onPress  = qb_select_soldiers;

	// ── Hook nos botões de treino vanilla para capturar template ──
	qb_hook_training_buttons();

	g_QB.initialized = true;
	warn("QUICKBAR: inicializado");
	return true;
}

// ─────────────────────────────────────────────────────────────
// Hook nos botões de treino vanilla
// Captura qual unidade foi clicada para usar no Lote x5
// ─────────────────────────────────────────────────────────────

function qb_hook_training_buttons()
{
  warn("QUICKBAR: getAllTrainableEntitiesFromSelection = " + (typeof getAllTrainableEntitiesFromSelection));
	warn("QUICKBAR: qb_hook_training_buttons chamado");
	// O vanilla usa unitTrainingButton[0..39]
	// Cada botão tem o template guardado via closure em data.item
	// Não conseguimos ler o template do botão diretamente,
	// mas podemos ler getAllTrainableEntitiesFromSelection() na ordem
	// e associar pelo índice do botão clicado.
	for (var i = 0; i < 40; i++)
	{
		(function(idx) {
			var btn = qb_obj("unitTrainingButton[" + idx + "]");
	    warn("QUICKBAR: unitTrainingButton" + idx);
			if (!btn) return;

			var originalPress = btn.onPress;
			btn.onPress = function() {
        warn("QUICKBAR: clicou no botão de treino " + idx);
	      warn("QUICKBAR: idx pressionado unitTrainingButton" + idx);
				// Captura o template pelo índice na lista de treináveis
				var trainables = getAllTrainableEntitiesFromSelection
					? getAllTrainableEntitiesFromSelection()
					: [];

	      warn("QUICKBAR: quantidade trainables" + trainables.length);

				if (idx < trainables.length)
				{
					g_QB.batchTemplate = trainables[idx];
					warn("QUICKBAR: template capturado: " + g_QB.batchTemplate);
					qb_update_batch_btn();
				}
				// Executa ação vanilla normalmente
				if (originalPress) originalPress();
			};
		})(i);
	}
}

// Atualiza o caption do botão Lote com o nome da unidade
function qb_update_batch_btn()
{
	var btn = qb_obj("qb_act_batch");
	if (!btn) return;

	if (!g_QB.batchTemplate)
	{
		btn.caption = "Lote x5";
		btn.tooltip = "Clique numa unidade no painel de treino primeiro";
		return;
	}

	var tpl = GetTemplateData ? GetTemplateData(g_QB.batchTemplate) : null;
	var nome = tpl && tpl.name
		? (tpl.name.specific || tpl.name.generic || g_QB.batchTemplate)
		: g_QB.batchTemplate;

	btn.caption = "x5 " + nome;
	btn.tooltip = "Treinar 5x " + nome;
}

// ─────────────────────────────────────────────────────────────
// ⚔  AÇÕES
// ─────────────────────────────────────────────────────────────

function qb_action_batch()
{
  var unitIds = g_Selection ? g_Selection.toList() : [];
  if (!unitIds.length) { warn("QUICKBAR: batch sem seleção"); return; }

  var entState = GetEntityState(unitIds[0]);
  if (!entState || !entState.production) { warn("QUICKBAR: sem produção"); return; }

  // Se a fila tem itens, usa o template do último item
  if (entState.production.queue && entState.production.queue.length > 0)
  {
    var item = entState.production.queue[entState.production.queue.length - 1];
    var template = item.unitTemplate || item.template;
    if (template)
    {
      Engine.PostNetworkCommand({
        "type":     "train",
        "entities": unitIds,
        "template": template,
        "count":    5,
        "metadata": undefined
      });
      warn("QUICKBAR: treino em lote enviado: 5x " + template);
      qb_closeAll();
      return;
    }
  }

  warn("QUICKBAR: fila vazia — nenhum template para usar");
}

function qb_action_stop()
{
	var sel = g_Selection ? g_Selection.toList() : [];
	if (!sel.length) return;
	Engine.PostNetworkCommand({ "type": "stop", "entities": sel });
	qb_closeAll();
}

function qb_action_delete()
{
	var sel = g_Selection ? g_Selection.toList() : [];
	if (!sel.length) return;
	Engine.PostNetworkCommand({ "type": "delete-entities", "entities": sel });
	qb_closeAll();
}

function qb_action_stance(stance)
{
	var sel = g_Selection ? g_Selection.toList() : [];
	if (!sel.length) return;
	Engine.PostNetworkCommand({ "type": "stance", "entities": sel, "name": stance });
	qb_closeAll();
}

// ─────────────────────────────────────────────────────────────
// 📷  CÂMERA
// ─────────────────────────────────────────────────────────────

function qb_camera_cc()
{
	// Procura o CC do jogador e move a câmera até ele
	var playerID = Engine.GetPlayerID();
	var simState = GetSimState ? GetSimState() : null;
	if (simState && simState.entities)
	{
		for (var i = 0; i < simState.entities.length; i++)
		{
			var state = GetEntityState(simState.entities[i]);
			if (state && state.player === playerID &&
				state.template && state.template.indexOf("civil_centre") !== -1 &&
				state.position)
			{
				Engine.CameraMoveTo(state.position.x, state.position.z);
				qb_closeAll();
				return;
			}
		}
	}
	// Fallback: hotkey H
	Engine.GuiInterfaceCall("OnHotkeyPressed", { "hotkey": "session.gotoCivCentre" });
	qb_closeAll();
}

function qb_camera_alert()
{
	Engine.GuiInterfaceCall("OnHotkeyPressed", { "hotkey": "session.nextIdleUnit" });
	qb_closeAll();
}

function qb_camera_rotleft()
{
	var rad = QB_ROTATE_STEP * Math.PI / 180;
	Engine.CameraRotate(rad, 0);
	// Não fecha — permite toques múltiplos
}

function qb_camera_rotright()
{
	var rad = QB_ROTATE_STEP * Math.PI / 180;
	Engine.CameraRotate(-rad, 0);
}

function qb_camera_zoomin()
{
	Engine.CameraZoom(-QB_ZOOM_STEP);
}

function qb_camera_zoomout()
{
	Engine.CameraZoom(QB_ZOOM_STEP);
}

// ─────────────────────────────────────────────────────────────
// 👥  SELEÇÃO
// ─────────────────────────────────────────────────────────────

function qb_select_by_class(classes)
{
	var playerID = Engine.GetPlayerID();
	var result   = [];
	var simState = GetSimState ? GetSimState() : null;
	if (!simState) return;

	var ents = simState.entities || [];
	for (var i = 0; i < ents.length; i++)
	{
		var state = GetEntityState(ents[i]);
		if (!state || state.player !== playerID) continue;
		if (!state.identity || !state.identity.classes) continue;
		var cls = state.identity.classes;
		for (var j = 0; j < classes.length; j++)
			if (cls.indexOf(classes[j]) !== -1) { result.push(ents[i]); break; }
	}
	if (result.length)
	{
		g_Selection.reset();
		g_Selection.addList(result);
	}
}

function qb_select_idle_workers()
{
	var playerID = Engine.GetPlayerID();
	var result   = [];
	var simState = GetSimState ? GetSimState() : null;
	if (!simState) return;

	var ents = simState.entities || [];
	for (var i = 0; i < ents.length; i++)
	{
		var state = GetEntityState(ents[i]);
		if (!state || state.player !== playerID) continue;
		if (!state.unitAI || !state.unitAI.isIdle) continue;
		if (!state.identity || !state.identity.classes) continue;
		if (state.identity.classes.indexOf("Worker") !== -1)
			result.push(ents[i]);
	}

	if (result.length)
	{
		g_Selection.reset();
		g_Selection.addList(result);
	}
	qb_closeAll();
}

function qb_select_idle_buildings()
{
	var playerID = Engine.GetPlayerID();
	var result   = [];
	var simState = GetSimState ? GetSimState() : null;
	if (!simState) return;

	var ents = simState.entities || [];
	for (var i = 0; i < ents.length; i++)
	{
		var state = GetEntityState(ents[i]);
		if (!state || state.player !== playerID) continue;
		if (!state.identity || !state.identity.classes) continue;
		if (state.identity.classes.indexOf("Structure") === -1) continue;
		if (!state.production) continue;
		if (state.production.queue && state.production.queue.length === 0)
			result.push(ents[i]);
	}

	if (result.length)
	{
		g_Selection.reset();
		g_Selection.addList(result);
	}
	qb_closeAll();
}

function qb_select_soldiers()
{
	qb_select_by_class(["Soldier", "Cavalry"]);
	qb_closeAll();
}

// ─────────────────────────────────────────────────────────────
// Hook seguro via handler oficial do session.js
// (chamado depois do init() do session.js e do processamento do XML)
// ─────────────────────────────────────────────────────────────

if (typeof g_QB._handlersRegistered === "undefined")
{
	g_QB._handlersRegistered = true;
	warn("QUICKBAR: handler registado");

	registerSimulationUpdateHandler(function() {
		if (!g_QB.initialized)
			qb_init();
	});
}