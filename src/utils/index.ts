export function calculateVotesPercentage(
  votes: number,
  totalVotes: number
): number {
  return Math.round((votes / totalVotes) * 100);
}
