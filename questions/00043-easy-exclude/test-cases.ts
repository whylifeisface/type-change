import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]
// 接受union 和 union 
//返回 union
// function name(A , B) {
// A.forEach(element => {
//   BigInt.array.forEach(element => {
    
//   });
    //b.contain
// });
// }