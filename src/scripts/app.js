import { profiles, getHybridDetails } from "../../profiles.js";
import { questions } from "../../questions.js";
import { applyAnswer, calculateOpportunities, classifyProfiles, createScores } from "../../scoring.js";

let current = 0;
let scores = createScores();
let classification;
const selected = [];
const selectedIndexes = [];
const opportunities = calculateOpportunities(questions);
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
  $("answers").innerHTML = question.answers.map((answer, index) => `<button class="answer" role="radio" aria-checked="${selectedIndexes[current] === index}" data-answer-index="${index}"><span class="answer-key">${String.fromCharCode(65 + index)}</span>${answer.text}</button>`).join("");
}

function renderProfileCard(prefix, result) {
  const profile = profiles[result.profile];
  $(`${prefix}-icon`).textContent = profile.icon;
  $(`${prefix}-title`).textContent = profile.title;
  $(`${prefix}-description`).textContent = profile.description;
  const relativeBase = classification.primary.score > 0 ? classification.primary.score : 1;
  $(`${prefix}-score`).textContent = `${Math.round((result.score / relativeBase) * 100)}% de afinidad relativa`;
}

function showResults() {
  classification = classifyProfiles(scores, opportunities);
  const { primary, secondary, tertiary, isHybrid } = classification;
  const primaryProfile = profiles[primary.profile];
  const [hybridTitle, hybridDescription] = getHybridDetails(primary.profile, secondary.profile);

  $("result-icon").textContent = primaryProfile.icon;
  $("result-title").textContent = isHybrid ? hybridTitle : primaryProfile.title;
  $("result-description").textContent = isHybrid ? hybridDescription : primaryProfile.description;
  $("result-fit").textContent = isHybrid ? `${primaryProfile.fit} También tienes una afinidad cercana con ${profiles[secondary.profile].label}.` : primaryProfile.fit;
  $("result-step").textContent = isHybrid ? `${primaryProfile.step} Puedes combinarlo con una práctica de ${profiles[secondary.profile].label}.` : primaryProfile.step;
  $("hybrid-badge").hidden = !isHybrid;
  $("hybrid-badge").textContent = isHybrid ? `✦ Perfil híbrido · ${profiles[primary.profile].label} + ${profiles[secondary.profile].label}` : "";

  renderProfileCard("secondary", secondary);
  renderProfileCard("tertiary", tertiary);
  const max = primary.score > 0 ? primary.score : 1;
  $("score-bars").innerHTML = classification.ranking.map(({ profile, score }) => `<div class="score-row"><div class="score-row-label"><span>${profiles[profile].label}</span><b>${Math.round((score / max) * 100)}%</b></div><div class="score-bar"><span style="width:${Math.max((score / max) * 100, 7)}%"></span></div></div>`).join("");
  $("results").hidden = false;
  $("test").hidden = true;
  $("results-live-region").textContent = `Tus resultados están listos. Tu afinidad principal es ${isHybrid ? hybridTitle : primaryProfile.title}.`;
  const resultsHeading = $("results-title");
  resultsHeading.focus({ preventScroll: true });
  $("results").scrollIntoView({ behavior: "smooth", block: "start" });
}

function start() {
  current = 0;
  scores = createScores();
  selected.length = 0;
  selectedIndexes.length = 0;
  $("results").hidden = true;
  $("test").hidden = false;
  renderQuestion();
  $("test").scrollIntoView({ behavior: "smooth", block: "start" });
}

document.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action === "start" || action === "restart") return start();
  if (action === "back") {
    if (current > 0) {
      applyAnswer(scores, selected[current - 1], -1);
      selected.pop();
      selectedIndexes.pop();
      current--;
      renderQuestion();
    }
    return;
  }
  const answerButton = event.target.closest(".answer");
  if (answerButton) {
    const answer = questions[current].answers[Number(answerButton.dataset.answerIndex)];
    applyAnswer(scores, answer);
    selected[current] = answer;
    selectedIndexes[current] = Number(answerButton.dataset.answerIndex);
    if (current === questions.length - 1) showResults();
    else { current++; renderQuestion(); }
  }
  if (action === "share") {
    const status = $("share-status");
    if (!navigator.clipboard) {
      status.textContent = "Copia el enlace de esta página";
      return;
    }
    navigator.clipboard.writeText(window.location.href).then(() => status.textContent = "Enlace copiado").catch(() => status.textContent = "Copia el enlace de esta página");
  }
});
