//                       Задача №27
// Напишите функцию replaceAll(find, replace, str), которая заменяет в строке str 
// все вхождение подстроки find на подстроку replace.
// let str = 'abc def def lom abc abc def';
// function replaceAll(find, replace, str) {};
// replaceAll('abc', 'x', str)

let str = 'abc def def lom abc abc def';
function replaceAll(find, replace, str) {
    let splitted = str.split(' '); // разбивка на массив 
    for (let i = 0; i < splitted.length; i++) {
        if (splitted[i] === find) {  // сравниваем каждый элемент массива на соответствие со значением аргумента find
            splitted.splice(i, 1, replace) // удаляем соответсвтующие элементы и вставляем вместо них значение аргумента replace
        }
    }
    return splitted.join(' ')  // собираем обратно в строку
};
console.log(replaceAll('abc', 'x', str)) // --> "x def def lom x x def"
console.log(replaceAll('def', 'x', str)) // --> "abc x x lom abc abc x"