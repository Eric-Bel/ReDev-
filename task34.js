//  Задача №34
// Создайте метод объекта `String endsWith()`, который сравнивает подстроку str1 с 
// окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.
// `let str = "Каждый охотник желает знать"; `
// `let str1 = "скрипт";`
// `let str2 = "знать";`
// `String.prototype.endsWith = function(substring) {};`
// `str.endsWith(str1))` // false
// `str.endsWith(str2))` // true

let str = "Каждый охотник желает знать";
let str1 = "скрипт";
let str2 = "знать";

String.prototype.endsWith = function (substring) {
    let lastItem = this.split(' ').slice(-1).join(''); // разбивака строки на массив 
    // извлечение последнего элемента / преобразование в строку  
    if (lastItem === substring) { // условие "если последний элемент массива равен аргументу"
        return true;
    } else {
        return false;
    }
};
console.log(str.endsWith(str2)); // --> true
console.log(str.endsWith(str1)); // --> false