//                 Задача №33 
// Напишите функцию `comparison(str1, str2)`, которая сравнивает строки 
// без учёта регистра символов.
// `function comparison(str1, str2) {};`
// `comparison('string', 'StRiNg')`


function comparison(str1, str2) {
    let s1 = str1.toLowerCase(); // преобразовываем первый аргумент str1 в нижний решгистр, на случай если в нем будут буквы верхнего рег. 
    if (s1 === str2.toLowerCase()) {  // условие "если все буквы str1 нижнего регистра будут равны str1 нижнего регистра
        return true    // то вернуть true
    }
};
console.log(comparison('string', 'StRiNg')); // true
console.log(comparison('Javascript', 'JaVaScRiPt')); // true