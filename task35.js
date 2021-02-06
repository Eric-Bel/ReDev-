//            Задача №35
// Напишите функцию `copyArr(arr)`, которая копирует массив не изменяя оригинал.
// let vegetables = ['Капуста', 'Репа', 'Редиска'];
// function arrayClone(arr) {}
let vegetables = ['Капуста', 'Репа', 'Редиска'];
function copyArr(arr) {
    let copy = []; // пустой массив для принятия копии
    return copy.concat(arr); // concat() копирует массив не изменяя оригинал
};
console.log(copyArr(vegetables)); // --> [ 'Капуста', 'Репа', 'Редиска' ] 
