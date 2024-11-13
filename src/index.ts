export type Interval = [number, number];

export default function merge(intervals: Interval[]): Interval[] {
  // Sort intervals with the lowest starting number at first
  const sorted = intervals.sort((a, b) => a[0] - b[0])

  const merged: Interval[] = [];

  for (const interval of sorted) {
    if (merged.length === 0) { // we have no Interval so set the current one
      merged.push(interval);
      continue;
    }

    if (merged[merged.length - 1][1] < interval[0]) {
      // we are not within the range so we create a new one
      merged.push(interval);
    } else {
      // we are within the range so we pick the max of the Range
      merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1]);
    }
  }
  return merged;
}