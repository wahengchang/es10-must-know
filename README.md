


## `1.1 [].flat()`

The `flat()` proposed to flatten arrays recursively up to the specified depth and returns a new array.

```js
const arr = [1, 2, [3, 4, [5, 6, [7, 8, 9]]]];

console.log(arr.flat());                //[1,2,3,4,[5,6,[7,8,9]]]

console.log(arr.flat().flat());         //[1,2,3,4,5,6,[7,8,9]]
console.log(arr.flat(2));               // same as above

console.log(arr.flat(Infinity));        //[1, 2, 3, 4, 5, 6]
```

## `1.2 [].flatMap()`
It maps each element using `map()` and `flat()` and turning into a new array. It’s identical to the map operation followed by a flat of depth 1.

```js
const arr = [1, 2, 3, 4];

console.log(arr.flatMap(x => [x, x + 10]))    // [1,11,2,12,3,13,4,14]
console.log(arr.map(x => [x, x + 10]).flat()) // same as above
```

## 2 `fromEntries`
It transforms a list of key-value pairs into an object.

```js
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }
```

#### Why `fromEntries` ?
`Object.fromEntries` is proposed to perform the reverse of `Object.entries`
```js
const arr = [['a', 0], ['b', 1]]
obj = Object.fromEntries(arr)
arrt = Object.entries(obj)

// content of arrt is as same as arr
```



## 3.1 `''.trimLeft() / trimRight()`
Triming whitespaces from beginning or end of our string using `trimLeft()` / `trimRight()` methods:

```js
const untrimmedString = "     Trim me 😢    ";

console.log(untrimmedString.trimLeft());
// "Trim me 😢    ";

console.log(untrimmedString.trimRight());
// "     Trim me 😢";
```

## 4) `optional catch()`
```js
try {
  throw "Error we don't care about";
} catch { // param can be ignored
  console.log('[ERROR] optional catch')
}
```

## 5) `function().toString()`
`''.toString()` now returns exact slices of source code text, including whitespaces and comments.

```js

const fun1 = function(x) {
  // fun2
}

const fun2 = (x) => {
  // fun2
}

console.log(fun1.toString());
console.log(fun2.toString());
console.log([].map.toString()); // function map() { [native code] }
```

## 6) Symbol Description Accessor

When you create a symbol you can provide a string as a description:

```js
const symbolExample = Symbol("Symbol description");
console.log(symbolExample.toString());
// 'Symbol(Symbol description)'
```


## Reference:
 - https://github.com/nitayneeman/es2019-examples
 - https://maksimivanov.com/posts/new-es10-es2019-javascript-features/
