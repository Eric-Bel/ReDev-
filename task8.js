// Задача №8

// Напишите функцию, которая возвращает минимальное и 
// максимальное количество заданного массива.

let numArr = [1, 3, 7, 15];

function getMiniMax(num) {
    let min = Math.min.apply(null, num);
    let max = Math.max.apply(null, num);
    return {min, max};
};
console.log(getMiniMax(numArr)) //--> { min: 1, max: 15 }




