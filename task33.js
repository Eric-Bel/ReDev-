//                 Задача №33 
// Напишите функцию `comparison(str1, str2)`, которая сравнивает строки 
// без учёта регистра символов.
// `function comparison(str1, str2) {};`
// `comparison('string', 'StRiNg')`


const comparison = (str1, str2) => str1.toLowerCase() === str2.toLowerCase() ? true : false;   
    
console.log(comparison('string', 'StRiNg')); // true
console.log(comparison('Javascript', 'JaVaScRiPt')); // true
console.log(comparison('belarus', 'BELARUS')); // true