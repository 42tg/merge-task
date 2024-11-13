import { describe, expect, test } from '@jest/globals';
import merge, { Interval } from './index';

describe('Test Suite', () => {
  test('given Example', () => {
    const intervals: Interval[] = [[25, 30], [2, 19], [14, 23], [4, 8]];
    const result = [[2, 23], [25, 30]];
    expect(merge(intervals)).toStrictEqual(result);
  });

  test('empty input', () => {
    const intervals = [];
    const result = [];
    expect(merge(intervals)).toStrictEqual(result);
  });

  test('wrong sorted Interval', () => {
    const intervals: Interval[] = [[25, 30], [2, 19], [23, 14], [8, 4]];
    const result = [[2, 23], [25, 30]];
    expect(merge(intervals)).toStrictEqual(result);
  })

  test('bad text inputs', () => {
    const intervals = [[25, 30], [2, 19], [14, 23], [4, 8], ['a', 'b']];
    const result = [[2, 23], [25, 30]];
    // @ts-ignore // we need to use this since typescript would not allow this
    expect(merge(intervals)).toStrictEqual(result);
  })
});