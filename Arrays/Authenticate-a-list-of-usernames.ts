/*Given an array of strings representing a list of usernames, return true only if all usernames comply with your company's guidelines. Return false otherwise.

The guidelines say that the username is valid only if:

it is between 6-10 characters long;
contains at least 1 lowercase letter;
contains at least 1 number;
contains only numbers and lowercase letters.
Examples of arrays that will be tested:

const usernames1 = ['john123', 'alex222', 'sandra1']; // returns true

const usernames2 = ['john123', 'alex222', 'sandraW']; // returns false because sandraW has no number

const usernames3 = ['john_123', 'alex222', 'sandra1']; // returns false because john_123 contains an invalid character*/

export function authList(arr:string[]):boolean {
  return arr.every(item => (item.length >= 6 && item.length <= 10)
                           && /^[a-z\d]+$/.test(item)
                           && /\d/.test(item)
                           && /[a-z]/.test(item))
}
