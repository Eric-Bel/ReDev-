// Задача №20
// Найти факториал 5

function findFuctorial(num) {
    const factorialNums = []; // Загатавливаем пустой массив для вмещенийя чисел от 1 до num (параметр)
    for (let i = 1; i <= num; i++) { // объявляем цикл чтобы вывести числа от 1 до num
        factorialNums.push(i) // помешаем эти числа по очереди при каждой итерации в пустой массив
    }
    return factorialNums.reduce((item1, item2) => item1 * item2, 1); // Находим факториал num путем применения
    // reduce, то есть умножаем числа в массиве в порядке возрастания от 1 до num
};
console.log(findFuctorial(5)); // --> 120