const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log('Async task complete');
    resolve();
    }, 5000);
});

promise.then(() => {
    console.log('Promise consumed')
});

console.log('Hello from Global scope');

new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log('Async 2 task complete');
    resolve();
    }, 5000);
}).then(() => console.log('Promise 2 consumed'))
