// Задача №12
// Удалить из одного массива все элементы второго массива.
// arrayDiff([1,2],[1]) == [2]
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

let array1 = [1, 2, 2, 2, 3];
let array2 = [2];
console.log(array1.filter((elements) => !array2.includes(elements))); // --> [1,3]

// filter, верни ка мне элементы из array1, которые не имеются (!includes()) в array2, 