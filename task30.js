//  Задача №30

// Напишите функцию `alphabetize(str)`, которая возвращает строку, 
// отсортировав её символы в алфавитном порядке.
// `function alphabetize(str) {};`
// `alphabetize("Europe")`

function alphabetize(str) {
    let splitted = str.split(''); // разбивка на элементы массива по буквам
    return splitted.sort().join('') // сортировка букв в алфавитномом порядке с использованием sort() 
    // без аргументов и сбор в строку
};
console.log(alphabetize('Europe')); // --> "Eeopru"
console.log(alphabetize('dcba')); // --> "abcd"