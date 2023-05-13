import { Equal } from "@type-challenges/utils"
//导入了被当作模块 要导出并导入

type Includes<T extends readonly any[], U> = T extends
    [infer First , ... infer Rest] ?
    Equal<First, U> extends true ? true: Includes<Rest, U> 
: false
//返回ture false [] => T[number]  => union
export type {
    Includes
}