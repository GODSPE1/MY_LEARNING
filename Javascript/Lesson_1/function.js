function sayHelloWorld () {
    console.log('Hello World!')
}

sayHelloWorld()


function add(num1, num2) {
    result = num1 + num2;
    // return num1 +   num2;
    console.log(result)
};

add(10, 58)


function subtr(num1, num2) {
    return result = num2 - num1
    console.log(result);
}

add(result, subtr(10, 60))


const mul = function (num1, num2) {
    return num1 * num2;
}
console.log(mul(10, 20));

const div = (num1, num2) => {
    return num2 / num1;
};

console.log(div(20, 10));


function reverse(str) {
    return str.split();
}


reverse('nvnkdvndkv')

// Exercise
// 1. Reverse Number

// Write a JavaScript function that reverses a number.

// Example x = 32243;

// Expected Output : 34223

// 1. Reverse Number

// Write a JavaScript function that reverses a number.

// Example x = 32243;

// Expected Output : 34223

const num = 10;
console.log(typeof num); // number

const str = "num" + 10;
console.log(typeof str); // string

console.log(typeof num); // boolean

const str2 = "num" + num + "num";
console.log(typeof str2); // string

const str3 = "num" + 10 + 10;
console.log(typeof str3); // string

const str4 = num.toString();
console.log("str4 is of type", typeof str4); // string


const num2 = 123456;

const numSplit = num2 + "".split("");
console.log(numSplit); // This will throw an error because num2 is a number, not
console.log(typeof numSplit); // This will throw an error because num2 is a number, not a string

const reverseNum = num2.toString().split("").reverse().join("");
console.log(reverseNum); // "654321"
console.log(typeof reverseNum); // string

let reverseNum2 = num2 + "";
reverseNum2 = reverseNum2.split("").reverse().join("");
console.log('this is reverseNum2', reverseNum2); // "654321"
console.log(typeof Number(reverseNum2)); // 654321
console.log(reverseNum2); // string
console.log(typeof reverseNum2); // string

