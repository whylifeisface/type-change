type MyPick<T, K extends keyof T> = {
    [P in K] : T[P]
}
//遍历union 取属性

// T 没有 P 类型约束