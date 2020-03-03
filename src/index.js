module.exports = function toReadable(number) {
    let numbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",

    }

    let ost, dec, sot = 0;
    let length = String(number).length;

    if (number < 20) {
        return numbers[number];
    } else if (length == 2) {
        ost = number % 10;
        dec = number - ost;
        return ost == 0 ? numbers[dec] : numbers[dec] + ' ' + numbers[ost];
    } else if (length == 3) {
        dec = (number % 100);
        ost = dec % 10;
        sot = Number(String(number)[0]);
        let res = numbers[sot].concat(' hundred');
        return res += dec == 0 ? '' : (dec - ost) < 20 ? ' ' + numbers[dec] : ' ' + (ost == 0 ? numbers[dec] : numbers[dec - ost] + ' ' + numbers[ost]);
    }
    // return res += number < 20 ? numbers[number] : 
};

// console.log(toReadable(30));