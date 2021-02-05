//  Задача №26
// Создайте метод объекта String `startsWith()`, который определяет, начинается 
// ли строка символами другой строки, возвращая, соотвественно, true или false.
// `let str = 'abc def ghi jkl mno pqr stu';`
// `String.prototype.startsWith = function(start) {};`
// `str.startsWith('abc')`

// ______________________________________________________
//  первое неудочное решение

let str = 'abc def ghi jkl mno pqr stu';

String.prototype.startsWith = function (start) {
    let startOfAnotherStr = this.slice(0, 3);
    let startOfArgStr = start.slice(0, 3);
    if (startOfAnotherStr === startOfArgStr) {
        return true;
    } else {
        return false;
    }
};
console.log(str.startsWith('abc')); // --> true

// ___________________________________________________
//  второе частично удачное решение

let str1 = 'abc def ghi jkl mno pqr stu';

String.prototype.startsWith = function (start) {
    return this.includes(start);
};
console.log(str.startsWith('')); // --> true

// __________________________________________________
// третье удачное решение

let str2 = 'abc def ghi jkl mno pqr stu';

String.prototype.go= function(start) {
    return this.startsWith(start);
};
console.log(str2.go('abc def')); // --> true




