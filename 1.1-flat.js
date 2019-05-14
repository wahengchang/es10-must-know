const arr = [1, 2, [3, 4, [5, 6, [7, 8, 9]]]];

console.log(arr);
console.log(arr.flat());                //[1,2,3,4,[5,6,[7,8,9]]] only flatten one level
console.log(arr.flat().flat());         //[1,2,3,4,5,6,[7,8,9]]
console.log(arr.flat(2));               // same as above
console.log(arr.flat(Infinity));        //[1, 2, 3, 4, 5, 6]