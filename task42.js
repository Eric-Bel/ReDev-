/* Дан массив слов, необходимо определить, составлены ли все слова из одних и тех же символов.
Функцию реализовать как принимающую переменное число аргументов */
 
function check(words) { 
    let sorted = words.map(word => word.split('').sort().join(''));
    return sorted.every(word => word === sorted[0]);
}
console.log(check(['кто', 'ток', 'кот'])); // true



