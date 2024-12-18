function combineArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];

// Solution 1: Use a union type
const combined1: (number | string)[] = combineArrays(arr1, arr2);
console.log(combined1); // Output: [1, 2, 3, "a", "b", "c"]

// Solution 2: Use type assertion
const combined2 = combineArrays(arr1, arr2) as (number | string)[];
console.log(combined2); // Output: [1, 2, 3, "a", "b", "c"]

//Or if you want to ensure the same type throughout the whole array
function combineArraysWithType<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}
const arr3 = [1,2,3];
const arr4 = [4,5,6];
const combined3 = combineArraysWithType(arr3, arr4); //No error here as both array types match
console.log(combined3); //Output [1,2,3,4,5,6]