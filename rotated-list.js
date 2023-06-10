/* 
    You are given list of numbers, obtained by rotating a sorted list an unknown number of times. 
    Write a function to determine the minimum number of times the original sorted list was rotated to obtain the given list.
    Your function should have the worst-case complexity of O(log N), where N is the length of the list. 
    You can assume that all the numbers in the list are unique.
    Example: The list [5, 6, 9, 0, 2, 3, 4] was obtained by rotating the sorted list [0, 2, 3, 4, 5, 6, 9] 3 times.
    We define "rotating a list" as removing the last element of the list and adding it before the first element. 
    E.g. rotating the list [3, 2, 4, 1] produces [1, 3, 2, 4].
    "Sorted list" refers to a list where the elements are arranged in the increasing order e.g. [1, 3, 5, 7].
*/

const tests = [
  {
    name: 'A list of size 8 rotated 5 times',
    nums: [8, 10, 12, 14, 16, 2, 4, 6],
    output: 5,
  },
  {
    name: "A list that wasn't rotated at all",
    nums: [2, 4, 6, 8, 10, 12, 14, 16],
    output: 0,
  },
  {
    name: 'A list that was rotated just once.',
    nums: [2, 4, 6, 8, 10, 12, 14, 16],
    output: 1,
  },
  {
    name: 'A list that was rotated n-1 times, where n is the size of the list.',
    nums: [4, 6, 8, 10, 12, 14, 16, 2],
    output: 7,
  },
  {
    name: 'A list that was rotated n times, where n is the size of the list',
    nums: [8, 10, 12, 14, 16, 2, 4, 6],
    output: 0,
  },
  {
    name: 'An empty list.',
    nums: [],
    output: 0,
  },
  {
    name: ' A list containing just one element',
    nums: [2],
    output: 0,
  },
];

function determineRotations(nums) {
  /*
    Find a number whose predecessor is greater than itself
    Get the list position of this number
    If its position is greater than 0, then the list was rotated that number of times
  */

    if (!nums.length > 1){
        return 0
    }
    nums.forEach(num => {
        if(nums.indexOf(num) == nums.length - 1) {
            return 0
        }
        if(num > nums.indexOf(num+1)){
            return nums.indexOf(num)
        }
        
    });
}

tests.forEach(test => {
    // TODO
    let result = determineRotations(test.nums)
    if (result === test.output){
        console.log(``)
        console.log(`${test.name} -> OK`)
    } else {
        console.log(`${test.name} -> FAIL`)
    }


})
