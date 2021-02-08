/*                       Задача №37 
Напишите функцию removeDuplicates(arr), которая возвращает массив,
в котором удалены повторяющиеся элементы из массива arr.
let arr = ["php", "php", "css", "css", "script", "script", "html", "html", "java" ];
function removeDuplicates(arr) {}
removeDuplicates(arr);    */

let arr = ["php", "php", "css", "css", "script", "script", "html", "html", "java"];


function removeDuplicates(arr) {
    let doubleArr = arr.filter(function (item, index) {
        return arr.indexOf(item) !== index;
    })
    return doubleArr
}
console.log(removeDuplicates(arr));

/* function removeDuplicates1(arr) {
    let doubleArr = [];
    for (let items of arr) {
        if (!doubleArr.includes(items)) {
            doubleArr.push(items)
        } 
    }
    return doubleArr
}
console.log(removeDuplicates1(arr)); */


/* const unic = arr => arr.filter((i, n) => !arr.includes(i, n + 1))
console.log(unic(arr)) */