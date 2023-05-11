import type { Equal, Expect } from "@type-challenges/utils"

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type s = typeof tuple
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const
type m =TupleToObject<typeof tuple>
type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<Equal<TupleToObject<typeof tupleMix >, { 1: 1; '2': '2'; 3: 3; '4': '4' } >>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>

// function main(array) {
//   const obj = {}
//   array.forEach(element => {
//       obj[element] = element
//   });
//   return obj
// }

//返回对象
// 对象赋值