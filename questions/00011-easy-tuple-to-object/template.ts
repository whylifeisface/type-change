// 数组类型遍历 []  T[number] =>  union  
type TupleToObject<T extends readonly (string|number)[]> = {
    [P in T[number]]:  P
}
