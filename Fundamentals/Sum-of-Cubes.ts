/*Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)*/

//Option 1

export function sumCubes(n: number): number {
  let count: number[] = [];
  while (n > 0) {
    count.push(n);
    n--;
  }

  return count.map(n => Math.pow(n, 3))
              .reduce((acc, val) => acc + val, 0);
}

// Option 2

export function sumCubes(n: number): number {
  let count: number = 0;
  while (n > 0) {
    count+= Math.pow(n, 3)
    n--;
  }

  return count;
}
