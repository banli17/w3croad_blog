"use strict";
var Role;
(function (Role) {
    Role[Role["Reporter"] = 1] = "Reporter";
    Role[Role["Developer"] = 2] = "Developer";
    Role[Role["Maintainer"] = 3] = "Maintainer";
    Role[Role["Owner"] = 4] = "Owner";
    Role[Role["Guest"] = 5] = "Guest";
})(Role || (Role = {}));
// 原理, 反向映射。名称和值都作为了 key
// var Role;
// (function (Role) {
//     Role[Role["Reporter"] = 1] = "Reporter";
//     Role[Role["Developer"] = 2] = "Developer";
//     Role[Role["Maintainer"] = 3] = "Maintainer";
//     Role[Role["Owner"] = 4] = "Owner";
//     Role[Role["Guest"] = 5] = "Guest";
// })(Role || (Role = {}))
console.log(Role.Reporter);
// 字符串枚举， 只有名称作为了 key
var Message;
(function (Message) {
    Message["Success"] = "\u606D\u559C\u4F60\uFF0C\u6210\u529F\u4E86";
    Message["Fail"] = "\u62B1\u6B49\uFF0C\u5931\u8D25\u4E86";
})(Message || (Message = {}));
// 异构枚举，混用了，如果赋给了字符串，则只有名称做为key
var Answer;
(function (Answer) {
    Answer[Answer["N"] = 0] = "N";
    Answer["Y"] = "yes";
})(Answer || (Answer = {}));
// var Answer;
// (function (Answer) {
//     Answer[Answer["N"] = 0] = "N";
//     Answer["Y"] = "yes";
// })(Answer || (Answer = {}));
// Role.Reporter = 2; 枚举类型的值是只读的
var Char;
(function (Char) {
    // 编译阶段就会计算
    Char[Char["a"] = 0] = "a";
    Char[Char["b"] = 0] = "b";
    Char[Char["c"] = 4] = "c";
    // 计算枚举，值会在运行阶段执行
    Char[Char["d"] = Math.random()] = "d";
    Char[Char["e"] = '123'.length] = "e";
})(Char || (Char = {}));
console.log(Char[0]);
// 编译为
// var Char;
// (function (Char) {
//     // 编译阶段就会计算
//     Char[Char["a"] = 0] = "a";
//     Char[Char["b"] = 0] = "b";
//     Char[Char["c"] = 4] = "c";
//     // 计算枚举，值会在运行阶段执行
//     Char[Char["d"] = Math.random()] = "d";
//     Char[Char["e"] = '123'.length] = "e";
// })(Char || (Char = {}));
// 常量枚举，会直接编译为值
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
})(Month || (Month = {}));
var month = [Month.Jan, Month.Feb];
// 编译后
// var month = [0 /* Jan */, 1 /* Feb */];
// 枚举类型
var E;
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = 1] = "b";
})(E || (E = {})); // 没有初始值
var F;
(function (F) {
    F[F["a"] = 0] = "a";
    F[F["b"] = 1] = "b";
})(F || (F = {}));
var G;
(function (G) {
    G["a"] = "apple";
    G["b"] = "banana";
})(G || (G = {}));
var e = 3; // 可以将任何Number类型赋值给枚举类型
var f = 3;
// let g: E = 'hello'  // 如果字符串会报错
// var e = 3;
// var f = 3
var e1 = 1;
var e2;
// 不同的枚举类型不能比较
// e1 === e2 // 此条件将始终返回 "false"，因为类型 "E.a" 和 "E.b" 没有重叠
var e3 = 1;
e1 === e3;
var g1 = G.b; // 只能是枚举成员
var g2 = G.a;
