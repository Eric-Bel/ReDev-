//                             Задача №32 
// Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.
// let str = " Pasha is a good boy "
// function strip(str) {};
// strip(str)
let str = " Pasha is a good boy "
function strip(str) {
    return str
        .split(' ') // разбивка на массив подстрок
        .filter((item) => item !== '') // извлечение всех элементов, не равняющихся пустой строке
        .join(' ') // сбор в строку
}
console.log(strip(str)); // --> "Pasha is a good boy true"