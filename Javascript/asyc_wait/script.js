const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({name: 'John', age: 30})
    }, 1000)
});


// promise.then((user) => console.log(user));



async function getPromise() {
    const response = await promise;
    console.log(response);
}


getPromise();



async function getDirectors1() {
    const res = await fetch('./directors.json');
    const data = await res.json();

    data.forEach(e => {
        
        console.log(e);
    });


};



async function getDirectors() {
    const res = await fetch('./directors.json')
    .then((res) => res.json())
    .then((data) => console.log(data))
    
}


const getDirectors1_arrow = async () => {
    const res = await fetch('./directors.json')
    const data = await res.json();
    console.log('below is the arrow function type');
    console.log(data);

}


getDirectors();
getDirectors1();
getDirectors1_arrow();