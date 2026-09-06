export const SCROLL_MILESTONES = [50, 75, 100];

export function calculateScrollPercentage(scrollY, scrollHeight, innerHeight) {
  const scrollableDistance = scrollHeight - innerHeight;
  if (scrollableDistance <= 0) return 0;
  const rawPercentage = (scrollY / scrollableDistance) * 100;
  return Math.min(100, Math.max(0, Math.round(rawPercentage)));
}

export function getNewScrollMilestones(
  scrollPercentage,
  alreadyTriggered,
  milestones = SCROLL_MILESTONES
) {
  const newMilestones = [];

  for (const milestone of milestones) {
    if (alreadyTriggered.has(milestone)) continue;

    const reached =
      milestone === 100 ? scrollPercentage >= 98 : scrollPercentage >= milestone;

    if (reached) {
      newMilestones.push(milestone);
    }
  }

  return newMilestones;
}
