function sortEvenOdd(arr) {
  arr.sort(function (a, b) {
    return a % 2 - b % 2 || a - b;
  });
}
const arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];
sortEvenOdd(arr);
console.log(arr); // (12) [2, 6, 8, 8, 10, 1, 1, 3, 5, 7, 11, 15]

// sortEvenOdd(arr);
// console.log(arr);

//https://overcoder.net/q/201845/%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2-%D1%86%D0%B5%D0%BB%D1%8B%D1%85-%D1%87%D0%B8%D1%81%D0%B5%D0%BB-%D0%BD%D0%B0-%D0%BD%D0%B5%D1%87%D0%B5%D1%82%D0%BD%D1%8B%D0%B5-%D0%B7%D0%B0%D1%82%D0%B5%D0%BC-%D1%87%D0%B5%D1%82%D0%BD%D1%8B%D0%B5
