// Задача №24

// Напишите функцию isUpperCase(str, character), которая определяет 
// в каком регистре написан символ строки в указанной позиции.
//  Если в верхнем регистре выводится – true, если в нижнем – false.
// function isUpperCase(str, character) {};
// isUpperCase('tasks JavaScript', 6); // true

function isUpperCase(str, character) {
    let splitted = str.split('');  // разбиваем строку на массив
    let splicedPos = splitted.splice(character, 1).join(''); // из массива извлекаем символ,
    //  который имеет позицию, соответсвтующую числовому второму аргументу функции 
    if (splicedPos === splicedPos.toUpperCase()) { // этот символ проверяем на верхний регистр
        return true;
    } else if (splicedPos === splicedPos.toLowerCase()) {  // этот символ проверяем на нижний регистр
        return false;
    }
};
console.log(isUpperCase('tasks JavaScript', 6)) // --> true
console.log(isUpperCase('FuN StR', 1)) // --> false