/*Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.*/

export function divCon(x: (string | number)[]): number {
  let num1: number = x.filter((num): num is number => typeof num === 'number').reduce((acc, num) => acc + num, 0);
  let num2: number = x.filter((num): num is string => typeof num === 'string').map(Number).reduce((acc, num) => acc + num, 0);
  return num1 - num2;
}

// Example
// divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]) => 14)
