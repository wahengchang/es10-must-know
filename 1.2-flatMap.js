const arr = [1, 2, 3, 4];

console.log(arr.flatMap(x => [x, x + 10]))
// [1,11,2,12,3,13,4,14]

console.log(arr.flatMap(x => [[x, x + 10]])) 
//  only flatten one level
// [ [ 1, 11 ], [ 2, 12 ], [ 3, 13 ], [ 4, 14 ] ]