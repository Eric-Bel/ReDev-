// Задача №17
// Написать функцию которая переделывает строку 
// с camelCase в snake_case
// solution("redevCorses") -> "redev_courses"

function solution(str) {
    return str
        .split(/(?=[A-Z])/) // Разбиваем строку на массив подстрок, и возвращаем буквы 
        // верхнего регистра с применением  Положительного Lookaheadа Рег. выр. (?=)
        .join('_') // собираем все в строку
        .toLowerCase(); // преобразуем всё в нижний регистр
};
console.log(solution('redevCorses')); // --> 'redev_corses'
console.log(solution('BangBangNinja')); // --> 'bang_bang_ninja'