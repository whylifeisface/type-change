import { Equal,  } from "@type-challenges/utils";

type GetReadonlyKeys<T> = {
    [K in keyof T as Equal<T[K], readonly T[K]>  extends true ? ] :
}
// 返回对象
// 对每个key 