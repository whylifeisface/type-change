type If<C extends boolean, T, F> = C extends true ? T : F;
//type If<C , T, F> = C extends true ? T : C extends null ? :F;不行没说Null 返回什么
