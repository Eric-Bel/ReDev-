// Задача №16
// Напиши функцию, которая 
// принимает строковый параметр и меняет буквы в
// словах в обратном порядке. Все пробелы в строке
// должны быть сохранены.

// **This is an example! -> sihT si na !elpmaxe**

let strForRev = "This is an example!";
let strForRev1 = "Are you sure?";

function reverse(str) {
    return str
        .split(' ') // Преобразуем строку в элементы массива
        .map((item) => item.split('').reverse().join('')) // Чтобы перевернуть (reverse) каждую подстроку, 
        //мы разбиваем подстроку на отдельные символы по одному и переварачиваем их, дплее собираем в отдельные подстроки (join)
        .join(' ');
};
console.log(reverse(strForRev)); //--> 'sihT si na !elpmaxe'
console.log(reverse(strForRev1)); //--> 'erA uoy ?erus'