//  Задача №29
// Напишите функцию `unique_letters(str)`, которая возвращает строку, оставив 
// в ней только уникальные символы, т.е. встречающиеся в строке один раз.
// `function unique_letters(str) {};`
// `unique_letters('anaconda')`

function unique_letters(str) {
    let splitted = str.split(''); // разбиваем в массив и удаляем запятые
    let nonDouble = [];  // готовим пустой массив для передачи не повторяюшихся элементов
    for (let items of splitted)  // перебираем каждый элемент массива
        if (!nonDouble.includes(items)) { // условие "если массив nonDouble не содержит в себе 
        // элементы массива splitted"
            nonDouble.push(items)     //то добавлять эти элементы в массив nonDouble
        }
    return nonDouble.join('') // сбор в строку
};

console.log(unique_letters('anaconda')); // --> "ancod"
console.log(unique_letters('casablanca')); // --> "casbln"