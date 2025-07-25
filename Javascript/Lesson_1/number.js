let num = 5;
console.log(typeof num)

num = num.toString
console.log('typeof num:', typeof num)

num = 7989.60009

num = Math.round(num)

num = Math.ceil(num)

num = Math.floor(num)

num = num.__proto__;

num = 7989.60009

num = num.toPrecision(4)
console.log(num)


/*
        # Number Challenge

        **Instructions:**

        Create a variable called `x` that is a random number between 1 and 100 along with a variable called `y` that is a random number between 1 and 50.

        Create a variable for the sum, difference, product, quotient and remainder of `x` and `y`. Log the output in a string that shows the two numbers of `x` and `y` along with the operator and result.

        - You can log the output string directly or put them in separate variables and log them like below.
        - You can use string concatenation or template literals for the output.

        **Expected Result:**

        ```JavaScript
        console.log(sumOutput); // 31 + 15 = 46
        console.log(differenceOutput); // 31 - 15 = 16
        console.log(productOutput); // 31 * 15 = 465
        console.log(quotientOutput); // 31 / 15 = 2.066666666666667
        console.log(rmOutput); // 31 % 15 = 1
        ```

        **Hints:**

        1. The `Math.random()` function returns a floating-point, pseudo-random number in the range 0 to less than 1

        2. The `Math.floor()` function will round a number down to the nearest integer
*/

let x = Math.floor(Math.random() * 100 + 1)
let y = Math.floor(Math.random() * 50 + 1)

sumOutput = `${x} + ${y} = ${x+y}` 
differenceOutput = `${x} - ${y} = ${x-y}` 
productOutput = `${x} * ${y} = ${x*y}` 
quotientOutput = `${x} / ${y} = ${x/y}` 
rmOutput = `${x} % ${y} = ${x%y}` 


console.log(sumOutput); // 31 + 15 = 46
console.log(differenceOutput); // 31 - 15 = 16
console.log(productOutput); // 31 * 15 = 465
console.log(quotientOutput); // 31 / 15 = 2.066666666666667
console.log(rmOutput); // 31 % 15 = 1