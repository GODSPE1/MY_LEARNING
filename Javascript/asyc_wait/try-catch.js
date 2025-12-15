// try {
//     console.log(x)
// } catch(error) {
//     console.log('Error' + error)
// }



function doubleNumber(number) {
    if(isNaN(number)) {
        throw new Error(number + 'is not a number');
    }

    return number * 2;
}


try {
    y = doubleNumber(4)
    console.log(y);
    
} catch (error) {
    console.log(error)

}



const getDirectors = async () => {
    try {
        // const res = await fetch('./directors.json')
        const data = await res.json();

        console.log(data);
    } catch (error) {
        console.log(error)
    }
}


getDirectors();