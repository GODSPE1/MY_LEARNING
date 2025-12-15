// fetch a json file
fetch('./movie.json').then(response => response.json())
.then((data) => console.log(data))


// fetchind a text file
fetch('./test.txt').then(response => response.text())
.then((data) => console.log(data))


// FETCHING From an API
fetch('https://api.github.com/users')
.then(response => response.json())
.then((data) => console.log(data))