# Description

Implement a Function MERGE wich takes an Array of Intervals and returns a new Array of Intervals where overlapping Intervals are merged.

# Prerequisites
Node.js >= 18 and < 24
Yarn or npm package manager

# Setup
```bash
yarn install
yarn build
```

# Usage
The package provides a function called Merge wich can be used to merge overlapping Intervals.

```typescript
import merge from './Merge';

const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
const result = merge(intervals);
console.log(result); // [[1, 6], [8, 10], [15, 18]]
```

# CLI
The package also privde a small CLI to run from the command line

Note: The cli try to transform the input to json. And its only for Demo purpose.

Build it first
```bash
yarn build # or yarn docker:build
```

Then use the CLI
```bash
 echo "[[1, 3], [2, 6], [8, 10], [15, 18]]" | ./bin/merge.js # [[1,6],[8,10],[15,18]]
```

# Docker
To provide an easy way to run it there is also an dockerfile included.

Build the Docker Image
```bash
docker build -t merge .
```
Run the Docker Image
```bash
echo "[[1, 3], [2, 6], [8, 10], [15, 18]]" | docker run -i merge # [[1,6],[8,10],[15,18]]
```

# Testing
```bash
yarn test # or yarn docker:build
```

or via Docker

```bash
docker build -t merge-test . --target test && docker run merge-test
```