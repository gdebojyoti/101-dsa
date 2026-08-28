### 1. Create an array-like data structure where .shift, .unshift, .push, .pop would all be of O(n) time complexity

```
const arr = new PerlArray();

arr.push(1);
arr.push(2);
arr.push(3);

arr.pop(); // 3

arr.unshift(0);
arr.unshift(-1);
arr.unshift(-2);

arr.shift(); // -2

arr.getAt(0); // -1
arr.getAt(1); // 0

arr.get(); // [-1, 0, 1, 2]
```

Hint: Use start & end offsets https://stackoverflow.com/questions/6501160/why-is-pop-faster-than-shift#comment7647480_6501172