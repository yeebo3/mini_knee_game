import { styleProfiles } from "@/data/style-test";
import { StyleAnswerRecord, StyleProfile, StyleProfileId, StyleScore, StyleSession } from "@/types/learning";

const profileOrder: StyleProfileId[] = ["historical", "framework", "case", "keyword"];

export function buildStyleSession(answers: StyleAnswerRecord[]): StyleSession {
  const scoreMap = new Map<StyleProfileId, number>(
    profileOrder.map((profileId) => [profileId, 0])
  );

  answers.forEach((answer) => {
    scoreMap.set(answer.selectedProfileId, (scoreMap.get(answer.selectedProfileId) ?? 0) + 1);
  });

  const scores: StyleScore[] = profileOrder.map((profileId) => ({
    profileId,
    score: scoreMap.get(profileId) ?? 0
  }));

  const dominantProfileId = [...scores].sort((a, b) => b.score - a.score)[0].profileId;

  return {
    completedAt: new Date().toISOString(),
    dominantProfileId,
    scores,
    answers
  };
}

export function getStyleProfile(profileId: StyleProfileId): StyleProfile {
  return styleProfiles.find((profile) => profile.id === profileId) ?? styleProfiles[0];
}
