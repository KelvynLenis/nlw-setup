export function generateProgressPercentage(completed: number, total: number) {
  return Math.floor((completed / total) * 100);
}