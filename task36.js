/*                    Задача №36
 Напишите функцию `colonOdd(num)`, которая принимает число num в 
качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами. 
Например, если вводится число 55639217, то на выход должно быть 5:563:921:7.
`function colonOdd (num) {}`
`colonOdd(55639217)` */

const colonOdd = num => {
    let toStr = String(num).split('');
    let arr = [...toStr].map((item, index) => (+item%2 == toStr[index+1]%2) && (+item%2 != 0) ? item + ':' : item ).join('')
    return arr
};
console.log(colonOdd(55639217))


