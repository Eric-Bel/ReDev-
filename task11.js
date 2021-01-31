//  Задача №11

// По заданному набору чисел вернуть аддитивную инверсию каждого. Каждый позитив становится негативом, а негатив становится позитивом.

// invert([-1,-2,-4,-5]) == [1,2,4,5]
// invert([1,2,4,5]) == [-1,-2,-4,-5]
// invert([1,-2,4,-5]) == [-1,2,-4,5]

// Ты можете предположить, что все значения являются целыми числами. Не изменяй входной массив / список

let numForInvert0 = ([-1, -2, -4, -5]);
let numForInvert1 = ([1, 2, 4, 5]);
let numForInvert2 = ([1,-2,4,-5]);

function invert(arr) {
    return arr.map((item) => {
        if (item >= 0 || item <= 0) {
            return item *= -1;
        }
        }
    )
};
console.log(invert(numForInvert0));// --> [ 1, 2, 4, 5 ]
console.log(invert(numForInvert1));// --> [ -1, -2, -4, -5 ]
console.log(invert(numForInvert2));// --> [ -1, 2, -4, 5 ]