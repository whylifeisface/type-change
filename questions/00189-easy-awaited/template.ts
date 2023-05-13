type MyAwaited<T extends Promise<any>> = T extends Promise<infer X> ?
    X extends Promise<unknown> ? MyAwaited<X> : X
    : T extends { "then": (arg:()=>any)=> any} ? Parameters<T["then"]> : never
//type n = numberPromise extends Promise<infer P> ? P : never; // number
// infer : 不知道是什么类型 但是知道怎么来的 常常和 extends shiy 那么 infer 就可以通过已知的类型和获得它泛型反推出泛型参数