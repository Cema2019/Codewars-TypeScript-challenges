/*Challenge: You are given a list of numbers. The numbers each repeat a certain number of times. Remove all numbers that repeat an odd number of times while keeping everything else the same.

oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]
In the above example:

the number 1 appears twice
the number 2 appears once
the number 3 appears three times
2 and 3 both appear an odd number of times, so they are removed from the list. The final result is: [1,1]*/

export function oddOnesOut(nums: number[]): number[] {
  const counts: {[key: number]: number} = {};

  for (const num of nums) {
    counts[num] = (counts[num] || 0) + 1; 
  }

  return nums.filter(num => counts[num] % 2 === 0);
}

// Explanation: We use an object 'counts' to keep track of the occurrences for the numbers in the array. We then filter the array and return those numbers whose occurence count is even.
