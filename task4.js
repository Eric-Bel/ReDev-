// Задача №4
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(str) {
    return str
        .split('')
        .map((item, index) => (item = item.toLowerCase().repeat(index + 1)) && item.charAt(0).toUpperCase()+item.slice(1))
        .join('-');
};

console.log(accum('abcd'));
console.log(accum('RqaEzty'));
console.log(accum('cwAt'));