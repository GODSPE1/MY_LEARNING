const user = {
    id: 1,
    name: 'obi',
    age: 30,
    colour: 'blue',
    complexion: 'fair',
}
console.log(user)
console.log(typeof user)

// Convert object to JSON string

const str =  JSON.stringify(user)

console.log(str);
console.log(typeof str)
console.log(str.id)

// Converts a JSON string back into a JavaScript object.
const obj = JSON.parse(str)


console.log(obj)
console.log(typeof obj)
console.log(obj)

// ({ name } = obj)
({ name } = obj);
console.log(name);