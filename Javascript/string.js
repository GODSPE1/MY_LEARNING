x = 'Hello World'
x = typeof x

x = new String('Hello world')
x = typeof x

a = 'Hello World'

b = x.__proto__;

x = x.length

x = a.toUpperCase();

x = x.charAt(0)

a[0]

y = "😄".split(""); 

z = '\ud83d\ude04'

gmail = 'cLaRa@gmail.com'

z = gmail.split('@')

z = z[0].toLowerCase()

z = gmail.substring(0, 1)
console.log(z)


// Take the variable `myString` and capitalize the first letter of the word using some of the methods that we talked about in the last video. Put the result in a variable called `myNewString`.

// Create multiple solutions if you would like.

// **Expected Result:**

// ```JavaScript
// const myString = 'developer';

// console.log(myNewString); // 'Developer'
// ```

/* **Hints:**

1. You can use the `charAt()` method as well as `string[index]` to get the character at a specific index.
2. The `.toUpperCase()` method will make the entire string uppercase
3. `substring()` or `slice()` will return a specific portion of a string
*/

let newString = 'developer'


myNewString = newString[0].toUpperCase() + newString.substring('1')
myNewString = newString[0].toUpperCase() + newString.slice('1')
myNewString = newString.charAt(0).toUpperCase() + newString.substring('1')
myNewString = newString.charAt().toUpperCase() + newString.substring('1')
myNewString = `${newString[0].toUpperCase()}${newString.slice('1')}`




myNewString = newString.slice('1')

console.log(myNewString)




