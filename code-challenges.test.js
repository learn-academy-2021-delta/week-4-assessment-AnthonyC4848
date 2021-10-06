// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest
describe('', () => {
  it('', () => {
    expect().toEqual()
  })
})

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

        //I now know how to use jest! I did not know i had to use variables inside of the test until this week! yikes..

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// describe('arrayShuffler', () => {
//   var colors1 = ["purple", "blue", "green", "yellow", "pink"]
//   var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
//     it('removes the first item from the array and shuffles the remaining content', () => {
//       expect(arrayShuffler(colors1)).toEqual(expect.arrayContaining(["blue", "green", "yellow", "pink"]))
//       expect(arrayShuffler(colors2)).toEqual(expect.arrayContaining(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]))
//     })
//   })

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]



// b) Create the function that makes the test pass.
//create a function that takes an array as an argument
const arrayShuffler = (array) => {
//remove the first item of the array using .shift()
  array.shift()
//return randomized array .sort() => Math.random giving you a random number between 0-.5
  return array.sort(() => Math.random() - .5)
}


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.
// describe('minMax', () => {
//   var nums1 = [3, 56, 90, -8, 0, 23, 6]
//   var nums2 = [109, 5, 9, 67, 8, 24]
//   it('takes an array of numbers and returns an array of the minimum and maximum numbers in that order', () => {
//     expect(minMax(nums1)).toEqual([-8, 90])
//     expect(minMax(nums2)).toEqual([5, 109])
//   })
// })
var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]



// b) Create the function that makes the test pass.
//create a function that takes in an array as an argument
const minMax = (array) => {
//sort the array from least to greatest
  array.sort((a, b) => a - b)
//return the array at the 0 index and the last index using .length -1 (.length is always 1 more than the index)
  return [array[0], array[array.length - 1]]
}
//retun the array of only the smallest and largest numbers from least to greatest


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe('', () => {
var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
  it('takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments', () => {
    expect(noDupe(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]



// b) Create the function that makes the test pass.
//create a function that takes in 2 arrays as arguments
const noDupe = (array1, array2) => {
//merge 2 arrays together using .concat
  twoInOne = array1.concat(array2)
//iterate each value and index
//.filer only return "unique" items
  return twoInOne.filter((value, index) => twoInOne.indexOf(value) === index)
}