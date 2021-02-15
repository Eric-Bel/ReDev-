/* Задача №39
Напишите функцию `expand(arr)`, которая разворачивает вложенный массив любой глубины.
`let arr1 = [1, [2,[3,[4]]]];`
`let arr2 = [1, [2], [3, [[4]]],[5,6]];`
`function expand(arr) {}`
`expand(arr1)`; // 1,2,3,4
`expand(arr2)`; // 1,2,3,4,5,6 */
let arr1 = [1, [2, [3, [4]]]];
let arr2 = [1, [2], [3, [[4]]],[5,6]];

function expand(arr) {
    return [].concat(...arr)
}
function deepFlatten(arr) {
    return expand(           
        arr.map(x =>             // применить функцию к каждому элементу массива
            Array.isArray(x)      // условие "если элемент массива является массивом"
                ? deepFlatten(x)  // рекурсивное возвращение вложенных массивов
                : x                 
        )
    )
}

console.log(deepFlatten(arr1)); // --> [ 1, 2, 3, 4 ]
console.log(deepFlatten(arr2)); // --> [ 1, 2, 3, 4, 5, 6 ]