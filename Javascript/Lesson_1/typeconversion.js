let figure = 1;

console.log(figure, typeof(figure))

let surname = 'clinton';

console.log(surname, typeof(surname));

let amount = '100';

console.log(amount, typeof(amount))

amount =  +amount;
console.log(amount, typeof(amount))


amount =  amount.toString();
console.log('this is amount =', amount, typeof(amount))

amount  = parseInt(amount)
console.log('converting  amount, to number using parseInt', typeof(amount))



const float = 10.8;
console.log('float = ', float)
console.log(parseInt(float))
console.log(parseFloat(float))


let big = float;
console.log('big ', big)


let x = 5

x = x + 5

x = x + +('5')

y = 5
y = y * '5'
y = 5  + false

console.log(y, typeof x)