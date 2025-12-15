fetch('./movie.json')
.then(res => { Response.json()})
.then((res) => {
    console.log(res);
})