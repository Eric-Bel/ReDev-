// Задача №5
// Банкоматы допускают 4 или 6-значные ПИН-коды, 
// а ПИН-коды не могут содержать ничего, кроме 4 цифр или 6 цифр.
// Если функции передана правильная строка PIN, 
// верните true, иначе верните false.

function pinCode(str) {
    if (str.length == 4) {
        return true;
    } else if (str.length == 6) {
        return true;
    }
    else {
        return false
    }
};
console.log(pinCode('1234')); //true
console.log(pinCode('123456')); //true
console.log(pinCode('123')) //false