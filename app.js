const questions = [
  { kicker: "PARA EMPEZAR", title: "Cuando aprendes algo nuevo, ¿qué te produce más satisfacción?", answers: [
    ["Ver cómo otra persona lo entiende gracias a tu explicación", "teaching"], ["Descubrir cómo funciona por dentro", "development"], ["Encontrar patrones que otros no ven", "data"], ["Hacer que una herramienta sea más fácil de usar", "design"] ] },
  { kicker: "TU ENERGÍA", title: "En un proyecto, ¿qué papel sueles asumir naturalmente?", answers: [
    ["Acompañar, organizar y mantener al equipo enfocado", "teaching"], ["Resolver el problema difícil que nadie quiere tocar", "development"], ["Poner orden en la información y tomar decisiones", "data"], ["Escuchar a las personas y mejorar su experiencia", "design"] ] },
  { kicker: "TU CURIOSIDAD", title: "¿Qué te gustaría poder crear o mejorar?", answers: [
    ["Clases y recursos para que otros ganen confianza", "teaching"], ["Una página, app o automatización desde cero", "development"], ["Un reporte que ayude a entender qué está pasando", "data"], ["La forma en que una persona interactúa con un producto", "design"] ] },
  { kicker: "EN LA PRÁCTICA", title: "Algo deja de funcionar. ¿Qué haces primero?", answers: [
    ["Pregunto qué estaba intentando hacer la persona", "teaching"], ["Investigo, pruebo hipótesis y busco la causa", "development"], ["Reviso los datos para confirmar cuándo y cómo ocurre", "data"], ["Observo el recorrido para detectar dónde se confunde", "support"] ] },
  { kicker: "LO QUE VALORAS", title: "¿Qué tipo de impacto te gustaría dejar con tu trabajo?", answers: [
    ["Que alguien diga: ‘ahora sí lo puedo hacer’", "teaching"], ["Construir algo útil que antes no existía", "development"], ["Convertir información en decisiones más inteligentes", "data"], ["Hacer que el día a día de otros sea más simple", "support"] ] },
  { kicker: "TU ESTILO", title: "¿Qué frase te representa mejor?", answers: [
    ["Tengo paciencia para explicar las cosas de varias maneras", "teaching"], ["Me gusta experimentar hasta que algo funciona", "development"], ["Los detalles y la lógica me ayudan a ver el panorama", "data"], ["Siempre encuentro una forma más clara de organizarlo", "design"] ] },
  { kicker: "TU ENTORNO IDEAL", title: "¿En qué situación te sentirías más útil?", answers: [
    ["Guiando un taller de ofimática o programación", "teaching"], ["Creando soluciones con código y herramientas digitales", "development"], ["Analizando resultados para proponer el siguiente paso", "data"], ["Ayudando a alguien a resolver un reto técnico", "support"] ] },
  { kicker: "PARA CERRAR", title: "Si tuvieras una tarde libre para explorar TI, ¿qué elegirías?", answers: [
    ["Preparar una mini clase para compartirla", "teaching"], ["Seguir un tutorial y construir un proyecto", "development"], ["Jugar con una hoja de cálculo y sacar conclusiones", "data"], ["Rediseñar una pantalla para que se entienda mejor", "design"] ] }
];

const profiles = {
  teaching: { title: "Docencia tecnológica", icon: "✦", description: "Tu fortaleza está en traducir lo complejo a algo cercano y acompañar a otros mientras aprenden.", fit: "La paciencia, la comunicación y el gusto por ayudar son habilidades centrales para enseñar ofimática, herramientas digitales o programación.", step: "Crea una mini clase de 15 minutos sobre una herramienta que ya domines.", label: "Docencia tecnológica" },
  development: { title: "Desarrollo y automatización", icon: "</>", description: "Te mueve entender cómo funcionan las cosas y convertir ideas en soluciones que se pueden usar.", fit: "La curiosidad, la lógica y la perseverancia son una gran base para comenzar con programación web o automatizaciones.", step: "Haz un pequeño proyecto guiado: una página personal o una calculadora sencilla.", label: "Desarrollo" },
  data: { title: "Datos y análisis", icon: "∿", description: "Tienes una mirada analítica: disfrutas encontrar sentido, orden y patrones en la información.", fit: "Tu atención al detalle puede ayudarte a trabajar con hojas de cálculo, reportes y visualización de datos.", step: "Elige una hoja de cálculo cotidiana y crea un gráfico que cuente su historia.", label: "Datos y análisis" },
  design: { title: "Diseño digital", icon: "◌", description: "Te importa cómo se sienten las herramientas y buscas que las personas puedan usarlas sin esfuerzo.", fit: "La empatía y tu ojo para la claridad son el punto de partida del diseño UX/UI y el contenido digital.", step: "Observa una app que uses a diario y dibuja una mejora para una de sus pantallas.", label: "Diseño digital" },
  support: { title: "Soporte y soluciones", icon: "↗", description: "Eres de las personas que dan calma: escuchas, ordenas el problema y encuentras una salida práctica.", fit: "La escucha, el método y la orientación al servicio son esenciales en soporte técnico y operaciones digitales.", step: "Ayuda a alguien con un reto digital y escribe los pasos para resolverlo.", label: "Soporte y soluciones" }
};

let current = 0;
let scores = Object.fromEntries(Object.keys(profiles).map((key) => [key, 0]));
const selected = [];
const $ = (id) => document.getElementById(id);

function renderQuestion() {
  const question = questions[current];
  $("question-counter").textContent = `Pregunta ${current + 1} de ${questions.length}`;
  $("progress-percent").textContent = `${Math.round(((current + 1) / questions.length) * 100)}%`;
  $("progress-fill").style.width = `${((current + 1) / questions.length) * 100}%`;
  $("question-number").textContent = String(current + 1).padStart(2, "0");
  $("question-kicker").textContent = question.kicker;
  $("question-title").textContent = question.title;
  $("back-button").style.visibility = current ? "visible" : "hidden";
  $("answers").innerHTML = question.answers.map(([text, profile], index) => `<button class="answer" data-profile="${profile}"><span class="answer-key">${String.fromCharCode(65 + index)}</span>${text}</button>`).join("");
}

function showResults() {
  const ranked = Object.entries(scores).sort(([, a], [, b]) => b - a);
  const [winner, winnerScore] = ranked[0];
  const profile = profiles[winner];
  $("result-icon").textContent = profile.icon;
  $("result-title").textContent = profile.title;
  $("result-description").textContent = profile.description;
  $("result-fit").textContent = profile.fit;
  $("result-step").textContent = profile.step;
  const max = Math.max(winnerScore, 1);
  $("score-bars").innerHTML = ranked.map(([key, score]) => `<div class="score-row"><div class="score-row-label"><span>${profiles[key].label}</span><b>${Math.round((score / max) * 100)}%</b></div><div class="score-bar"><span style="width:${Math.max((score / max) * 100, 7)}%"></span></div></div>`).join("");
  $("test").hidden = true; $("results").hidden = false; window.scrollTo({ top: 0, behavior: "smooth" });
}

function start() { current = 0; scores = Object.fromEntries(Object.keys(profiles).map((key) => [key, 0])); selected.length = 0; $("results").hidden = true; $("test").hidden = false; renderQuestion(); $("test").scrollIntoView({ behavior: "smooth" }); }
document.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action === "start" || action === "restart") return start();
  if (action === "back") { if (current > 0) { const previousProfile = selected[current - 1]; scores[previousProfile]--; selected.pop(); current--; renderQuestion(); } return; }
  const answer = event.target.closest(".answer");
  if (answer) { const profile = answer.dataset.profile; scores[profile]++; selected[current] = profile; if (current === questions.length - 1) showResults(); else { current++; renderQuestion(); } }
  if (action === "share") { const status = $("share-status"); navigator.clipboard?.writeText(window.location.href).then(() => status.textContent = "Enlace copiado").catch(() => status.textContent = "Copia el enlace de esta página"); }
});
