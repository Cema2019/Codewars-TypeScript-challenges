/*Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o" */

export function absentVowel(x: string): number {
  const vowels: {[key: string]: number} = {
    'a': 0,
    'e': 1,
    'i': 2, 
    'o': 3,
    'u': 4
  }
  const missingVowel: string = Object.keys(vowels).find(vowel => !x.includes(vowel))!; 
  // Non-null assertion (!): The ! after find() tells TypeScript that missingVowel will never be undefined at runtime. 
  
  return vowels[missingVowel];
}
