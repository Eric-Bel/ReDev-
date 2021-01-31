// Задача № 3
// В этом небольшом задании вам дана строка чисел, разделенных
// пробелами, и вы должны вернуть самое высокое и самое низкое число.
//list("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6") ----> "666 -123"

let magic = "4 5 29 54 4 0 -123 666 -64 1 -3 6 -6".split(' ').map((items) => Number(items));
console.log(Math.max.apply(Math, magic));
console.log(Math.min.apply(Math, magic));


