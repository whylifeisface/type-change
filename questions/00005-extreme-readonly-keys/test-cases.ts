import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<'title', GetReadonlyKeys<Todo1>>>,
  Expect<Equal<'title' | 'description', GetReadonlyKeys<Todo2>>>,
]

interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  readonly description: string
  completed?: boolean
}
type A = {
  [K in keyof Todo2 ]  : K
}
type In<T> = {
  [P in keyof T as P extends T[P] ? P :never ]: P
}
type B = In<A>