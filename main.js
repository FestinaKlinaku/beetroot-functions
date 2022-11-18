/* // Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second, 1 if it is vice versa, and 0 if they are equal.

const numOne = parseInt(prompt('Enter first number: '));
const numTwo = parseInt(prompt('Enter second number: '));
function compare(a,b) {
    let res = 0;
    if(a < b) {
        res = -1;
    }
    else if(a > b) {
        res = 1;
    }
    return res;
}
console.log(`${compare(numOne, numTwo)}`); */

/* // Write a function that counts the factorial of a given number.

const num = parseInt(prompt('Enter an integer: '));
function factorial(a) {
    let res = 1;
    for (let i = 1; i <= a; i++) {
        res = res * i;
    }
    return res;
}
if (num < 0) {
    console.log('Can not find factorial of negative numbers');
}
else if (num >= 0) {
    console.log(`Factorial of ${num} is ${factorial(num)}`);
}
else {
    console.log('Your input was not a number');
} */

/* // Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.

const firstAnswer = prompt('Enter first digit: ');
const secondAnswer = prompt('Enter second digit: ');
const thirdAnswer = prompt('Enter third digit: ');
function makeNumber(a,b,c) {
    let str = '';
    let res = 0;
    str = a + b + c;
    res = parseInt(str);
    return res;
}
if (firstAnswer.length === 1 && secondAnswer.length === 1 && thirdAnswer.length === 1) {
    const firstNum = parseInt(firstAnswer);
    const secondNum = parseInt(secondAnswer);
    const thirdNum = parseInt(thirdAnswer);
    if (isNaN(firstNum) || isNaN(secondNum) || isNaN(thirdNum)) {
        console.log('One or more of your inputs was not a number');
    }
    else {
        console.log(`The number you've created is ${makeNumber(firstAnswer,secondAnswer,thirdAnswer)}`);
    }
}
else if (firstAnswer.length > 1 || secondAnswer.length > 1 || thirdAnswer.length > 1) {
    console.log('One digit per input');
}
else {
    console.log('One or more of your inputs was not a number');
} */

/* // Write a function that accepts the width and length of a rectangle and calculates its area. If there is only one parameter given, it counts as a square. 

const width = parseInt(prompt('Enter width: '));
const length = parseInt(prompt('Enter length: '));
function getArea(a,b) {
    let res = 0;
    if (isNaN(b)) {
        res = a * a;
    }
    else {
        res = a * b;
    }
    return res;
}
console.log(`The area is ${getArea(width,length)}`); */

/* // Write a function that checks if the given number is perfect. A perfect number is a number equal to the sum of all its divisors. For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.

const num = parseInt(prompt('Enter number: '));
function isPerfect(n) {
    let perfect = false;
    let res = 0;
    for (let i=1; i < n; i++) {
        if (n%i === 0) {
            res = res + i;
        }
    }
    if (res === n) {
        perfect = true;
    }
    return perfect;
}
console.log(`${num} is a perfect number: ${isPerfect(num)}`); */

/* // Write a function that accepts the min and max values of a range, and only puts out the perfect numbers within that range. Use the previous function to check, if numbers are perfect. 

function isPerfect(n) {
    let perfect = false;
    let res = 0;
    for (let i=1; i < n; i++) {
        if (n%i === 0) {
            res = res + i;
        }
    }
    if (res === n) {
        perfect = true;
    }
    return perfect;
}

function getNumbers(a,b) {
    let res = '';
    for (let i=a; i < b; i++) {
        if (isPerfect(i) === true) {
            res = res + i + ' ';
        }
    }
    return res;
}

console.log(`For interval from 1 to 40, the perfect numbers are ${getNumbers(1,40)}`); */

/* // Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss. If the seconds are not given, they should be displayed as 00.

function time(h,m,s) {
    let res = '';
    if (isNaN(s)) {
        s = '00';
    }
    res = h + ':' + m + ':' + s;
    return res;
}
console.log(time(12,23)); */

/* // Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.

function getSeconds(h,m,s) {
    let hours = h;
    let minutes = m;
    let seconds = s;
    seconds = (hours * 3600) + (minutes * 60) + seconds;
    return seconds;
}
console.log(getSeconds(12,20,5)); */

/* // Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.

function getTime(s) {
    let res = '';
    let hours = 0;
    let minutes = 0;
    let seconds = s;
    hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
    minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    res = hours + ':' + minutes + ':' + seconds;
    return res;
}
console.log(`${getTime(5461)}`); */

/* // Write a function that counts the difference between the dates. The function accepts 6 parameters that describe 2 dates, and returns them as hh:mm:ss. While solving this problem use the functions from the two previous ones: at first, make the dates in seconds, count the difference in seconds, and translate it back into hh:mm:ss.

function getSeconds(h,m,s) {
    let hours = h;
    let minutes = m;
    let seconds = s;
    seconds = (hours * 3600) + (minutes * 60) + seconds;
    return seconds;
}
function getTime(s) {
    let res = '';
    let hours = 0;
    let minutes = 0;
    let seconds = s;
    hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
    minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    res = hours + ':' + minutes + ':' + seconds;
    return res;
}
function findDifference(h1,m1,s1,h2,m2,s2) {
    let res = '';
    let seconds1 = getSeconds(h1,m1,s1);
    let seconds2 = getSeconds(h2,m2,s2);
    let difference = 0;
    if (seconds1 > seconds2) {
        difference = seconds1 - seconds2;
    }
    else if (seconds1 < seconds2) {
        difference = seconds2 - seconds1;
    }
    res = getTime(difference);
    return res;
}
console.log(findDifference(12,23,23,14,25,34)); */

/* 
    if (h.length === 1) {
        h = '0' + h;
    }
    if (m.length === 1) {
        m = '0' + m;
    }
    if (s.length === 1) {
        s = '0' + s;
    }
*/