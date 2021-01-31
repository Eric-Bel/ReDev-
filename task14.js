// Задача №14
// Cоздай функцию, которая возвращает сумму двух
// наименьших положительных чисел, учитывая массив
// из минимум 4 положительных чисел

// [12,423,54,1235,3,15,2,52] => 5


let numbers = [12, 423, 54, 1235, 3, 15, 2, 52];
let numbers1 = [4, 5, 15, 34];

function get2Mini(arr) {
    if (arr.map((item) => Math.sign(item) === 1) && arr.length >= 4) { // Проверяем числа на положительность и их количество должно быть не менее 4
        return arr
            .sort((item1, item2) => item1 - item2).slice(0,2) // Находим две самые минимальные числа 
            .reduce((prev, current) => prev + current)   // Суммируем две минимальные числа 
    }
    else {
        console.log('Количество положительных чисел меньше 4')
    }
};
console.log(get2Mini(numbers)); // --> 5
console.log(get2Mini(numbers1)) // --> 9