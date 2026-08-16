import { profileOrder } from "./profiles.js";

export function createScores() {
  return Object.fromEntries(profileOrder.map((profile) => [profile, 0]));
}

export function calculateOpportunities(questions) {
  const opportunities = createScores();
  questions.flatMap(({ answers }) => answers).forEach(({ scores }) => {
    Object.entries(scores).forEach(([profile, points]) => {
      opportunities[profile] += points;
    });
  });
  return opportunities;
}

export function applyAnswer(scores, answer, direction = 1) {
  for (const [profile, points] of Object.entries(answer.scores)) {
    scores[profile] += points * direction;
  }
  return scores;
}

export function rankProfiles(scores) {
  return Object.entries(scores)
    .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
    .map(([profile, score]) => ({ profile, score }));
}

export function classifyProfiles(scores, opportunities = null) {
  const comparableScores = opportunities
    ? Object.fromEntries(profileOrder.map((profile) => [profile, scores[profile] / opportunities[profile]]))
    : scores;
  const ranking = rankProfiles(comparableScores);
  const [primary, secondary, tertiary] = ranking;
  return {
    ranking,
    primary,
    secondary,
    tertiary,
    isHybrid: secondary.score >= primary.score * 0.9
  };
}
