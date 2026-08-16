import { describe, expect, it } from "vitest";
import { getHybridDetails, profileOrder, profiles } from "./profiles.js";
import { questions } from "./questions.js";
import { applyAnswer, calculateOpportunities, classifyProfiles, createScores } from "./scoring.js";

describe("vocational test questions", () => {
  it("contains 24 questions with four balanced options", () => {
    expect(questions).toHaveLength(24);
    expect(questions.every(({ answers }) => answers.length === 4)).toBe(true);

    questions.flatMap(({ answers }) => answers).forEach(({ scores }) => {
      expect(Object.keys(scores)).toHaveLength(2);
      expect(Object.values(scores).sort((a, b) => a - b)).toEqual([1, 2]);
    });
  });

  it("calculates opportunities so profile frequency cannot bias the ranking", () => {
    const opportunities = calculateOpportunities(questions);
    expect(Object.values(opportunities).every((value) => value > 0)).toBe(true);
    const scores = createScores();
    scores.teaching = opportunities.teaching;
    scores.frontend = opportunities.frontend;
    const result = classifyProfiles(scores, opportunities);
    expect(result.primary.score).toBe(result.secondary.score);
  });
});

describe("scoring and profile classification", () => {
  it("applies both primary and complementary points", () => {
    const scores = createScores();
    applyAnswer(scores, { scores: { frontend: 2, ux: 1 } });
    expect(scores.frontend).toBe(2);
    expect(scores.ux).toBe(1);
  });

  it("reverts both points when navigating back", () => {
    const scores = createScores();
    const answer = { scores: { frontend: 2, ux: 1 } };
    applyAnswer(scores, answer);
    applyAnswer(scores, answer, -1);
    expect(scores).toEqual(createScores());
  });

  it("returns primary, secondary and tertiary profiles", () => {
    const result = classifyProfiles({ teaching: 20, frontend: 18, backend: 12, data: 10, ux: 8, support: 5 });
    expect(result.primary.profile).toBe("teaching");
    expect(result.secondary.profile).toBe("frontend");
    expect(result.tertiary.profile).toBe("backend");
  });

  it("marks a result as hybrid only when the top two are close", () => {
    expect(classifyProfiles({ teaching: 20, frontend: 19, backend: 10, data: 8, ux: 7, support: 4 }).isHybrid).toBe(true);
    expect(classifyProfiles({ teaching: 20, frontend: 15, backend: 10, data: 8, ux: 7, support: 4 }).isHybrid).toBe(false);
  });

  it("has a specific recommendation for every hybrid pair", () => {
    for (let first = 0; first < profileOrder.length; first++) {
      for (let second = first + 1; second < profileOrder.length; second++) {
        const firstProfile = profileOrder[first];
        const secondProfile = profileOrder[second];
        const [title, description] = getHybridDetails(firstProfile, secondProfile);
        expect(title).not.toBe(profiles[firstProfile].title);
        expect(description.length).toBeGreaterThan(0);
      }
    }
  });
});
