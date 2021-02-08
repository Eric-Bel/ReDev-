/* Задача №38
Напишите функцию с двумя параметрами, которая создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.
`let array1 = [1, 2, 3, 4, 5];`
`let array2 = [4, 5, 6];`
 `function func(arr1,arr2){}`
`func(array1,array2)` // [5,7,9,4,5]  */

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6];
function func(arr1, arr2) {
    let result = []; // подготовить "контейнер"-пустой массив для результатов сложения
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) { //  условие "пока i будет меньше самого
        // длинного массива из двух в аргументов"
        result.push((arr1[i] || 0) + (arr2[i] || 0)); // пушить в пустой массив результаты сложения элементов, 
        // если не будет элентов, то вернуть 0
    }
    return result
};
console.log(func(arr1, arr2)) // --> [ 5, 7, 9, 4, 5 ]










