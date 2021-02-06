//  Задача №28

// Напишите функцию removeDuplicate(str), которая возвращает строку, очищенную
// от слов-дупликатов, т.е. каждое слово должно повторяться не более одного раза.

// let str = "вишня, груша, слива, груша";
// function removeDuplicate(str) {};
// removeDuplicate(str)

let str = "вишня, груша, слива, груша";
function removeDuplicate(str) {
    let splitted = str.split(','); // разбиваем в массив и удаляем запятые
    let result = []; // готовим пустой массив для передачи не повторяюшихся элементов
    for (let item of splitted) { // проходимся по каждому элементу массива 
        if (!result.includes(item)) { // условие "если массив result не содержит в себе 
            // элементы массива splitted"
            result.push(item) // то добавлять эти элементы в массив result
        }
    }
    return result.join() // сбор в строку
};
console.log(removeDuplicate(str)) // --> "вишня, груша, слива"

