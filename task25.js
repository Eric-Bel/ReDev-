// Задача №25

// Напишите функцию capitalizeFirstLetter(str), которая преобразоввывает 
// первый символ строки в нижний регистр.
// let str="Пример строки";
// function capitalizeFirstLetter(str) {};
// capitalizeFirstLetter(str)

function capitalizeFirstLetter(str) {
    return str[0].toLowerCase() + str.slice(1); // извлекаем первый символ строки, преобразовываем его в нижний регистр 
    // и конкатинируем с остальной частью строки
};
console.log(capitalizeFirstLetter('Test')); // --> 'test'
console.log(capitalizeFirstLetter('Пример')); // --> 'пример'