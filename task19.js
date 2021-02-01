//  Задача №19
//Твоя задача посчитать спрятанных на заднем дворе кошек
//  (представленных в двухмерном формате Array)
// Кошка хорошо прячутся, но их уши (''^^") хорошо видны.
// Твоя задача реализовать функцию (countCats), которая будет считать кошек. Удачи!
// Количество найденых кошек должны быть number. 
// Если кошек не найдено, функция должна вернуть 0
// Пример
// countCats([0,1,"^^"],[9,"^^",2],["^^",8,7])

let cats = [
    [0, 1, "^^"],
    [9, "^^", 2],
    ["^^", 8, 7]
];

function countCats(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if(arr) {
                let regexp = /[1]/gi;
                return arr[i][j].match(regexp)
            }
        }
    }
};

console.log(countCats(cats));



// function countCats(arr) {
//     if (arr) {
//         return arr
//     } else {
//         return 0
//     }
// };
