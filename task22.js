//                              Задача №22
//                      **Преобразовать массив**
//         Ваша задача - реализовать функцию transform(arr), которая принимает массив и 
// возвращает преобразованный массив на основе управляющих последовательностей,
// содержащихся в arr. Управляющие последовательности - это определенные строковые 
// элементы указанного массива:
// **--discard-next** исключает следующий элемент массива из преобразованного массива.
// **--discard-prev** исключает предыдущий элемент массива из преобразованного массива.
// **--double-next** удваивает следующий элемент массива в преобразованном массиве.
// **--double-prev** удваивает предыдущий элемент массива в преобразованном массиве.
//  Например:
// `transform ([1, 3, '--double-next', 4]) => [1, 3, 4, 4]`
// `transform ([1, 3, '--discard-prev', 4]) => [1, 4]`



// Далее в комментариях управляющую строку буду называть просто строкой

function transform(arr) {
    // '--discard-next' - исключает следующий элемент массива из преобразованного массива.
    let str = arr.filter(item => typeof item === 'string').join() // извлекаем из массива строку
    if (str == '--discard-next') {
        let nextIndexOfStr0 = arr.indexOf(str); // получаем индекс строки
        arr.splice(nextIndexOfStr0, 2); // удаляем строку и следующий за ней один элемент
        return arr;
    }
    // '--discard-prev' исключает предыдущий элемент массива из преобразованного массива.
    else if (str == '--discard-prev') {
        let prevIndexOfStr = arr.indexOf(str) - 1; // получаем индекс строки и откатываем на предыдущий элемент
        arr.splice(prevIndexOfStr, 2); // удаляем предыдущий элемент и строку
        return arr;
    }
    // '--double-next' - удваивает следующий элемент массива в преобразованном массиве.    
    else if (str == '--double-next') {
        let nextIndexOfStr2 = arr.indexOf(str) + 1, // получаем индекс строки и переходим к её следующему индексу (+1)
            nextValOfStr = arr.find((item, index, array) => index == nextIndexOfStr2), // получаем значение следующего индекса после строки
            resArr = arr.concat(nextValOfStr), // копируем значение следующего индекса после строки в конец оригинального массива
            arrIndex = arr.indexOf(str);  // просто получаем индекс строки, чтобы далее её удалить
        resArr.splice(arrIndex, 1); // удаляем строку 
        return resArr;
    }
    // '--double-prev' - удваивает предыдущий элемент массива в преобразованном массиве.
    else if (str == '--double-prev') {
        let prevtIndexOfStr1 = arr.indexOf(str) - 1, // получаем индекс строки и откатываем на предыдущий элемент
            prevValOfStr = arr.find((item, index, array) => index == prevtIndexOfStr1), // получаем значение предшествующего строке элемента
            arrIndex1 = arr.indexOf(str),  // просто получаем индекс строки, чтобы далее её удалить
            resArr1 = arr.splice(arrIndex1, 1, prevValOfStr); // удаляем строку и вставляем на её место значение предыдущего элемента
        return arr;
    } else {
        return "Введены неверные данные";
    }
};

console.log(transform([1, 3, '--discard-next', 4])); // --> [1, 3]
console.log(transform([1, 3, '--discard-prev', 4])); // --> [1, 4]
console.log(transform([1, 3, '--double-next', 4])); // --> [ 1, 3, 4, 4 ]
console.log(transform([1, 3, '--double-prev', 4])); // --> [ 1, 3, 3, 4 ]


