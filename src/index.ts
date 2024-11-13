export type Interval = [number, number];

export default function merge(intervals: Interval[]): Interval[] {
  //filter out invalid input
  const filtered = intervals.filter((interval) => {
    if (interval.length !== 2
      || typeof interval[0] !== 'number'
      || typeof interval[1] !== 'number'
      || Number.isNaN(interval[0])
      || Number.isNaN(interval[1])
    ) {
      return false;
    }
    return true;
  });

  const sorted = filtered
  .map((interval) => interval.sort((a, b) => a - b)) // sort the interval itself
  .sort((a, b) => a[0] - b[0]) // sort all intervals by the first number

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