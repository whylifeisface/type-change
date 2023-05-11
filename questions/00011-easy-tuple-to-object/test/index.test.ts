
//keyof The keyof operator takes an object type and produces a string or numeric literal union of its keys
type Point = { x: number; y: number };
type P = keyof Point; // type P = keyof Point


type Arrayish = { [n: number]: unknown }; // [n:number]
//https://blog.csdn.net/weixin_44959855/article/details/121630442 ts数组
//https://juejin.cn/post/7030245353299378213 ts元组
let s:Arrayish = {
    // ["as"]:false, error
    ["4"]:false,
    [1]:false
}
let m = [false]
type A = keyof Arrayish; //  type A = number


type Mapish = { [k: string]: boolean };
type M = keyof Mapish; // type M = string | number
let str = {
    [1]:false,
    ["as"]:false
}
test('', () => {


})