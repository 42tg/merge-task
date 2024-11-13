import { describe, expect, test } from '@jest/globals';
import merge from './index';

describe('Test Suite', () => {
  test('given Example', () => {
    const intervals = [[25, 30], [2, 19], [14, 23], [4, 8]];
    const result = [[2, 23], [25, 30]];
    expect(merge(intervals)).toStrictEqual(result);
  });

  test('empty input', () => {
    const intervals = [];
    const result = [];
    expect(merge(intervals)).toStrictEqual(result);
  });
});