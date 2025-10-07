if (true) {
    console.log('This is true')
};


if (false) {
    console.log('This is false')
}


if (10 == '10') {
    console.log('This one does not check type')
};


if (10 === '10') {
    console.log('This one does not check type')
}
else {
    console.log('This one does check type')
}


const x = 100;
const y = 500;

if (x > y) {
    console.log(`the value ${x} is greater than ${y}`)
}; 

if (x == y) {
    console.log(`${x} is equal to ${y}`)
};


if (x !== y) {
    var z = 20

    console.log(`${z}`)
};

console.log(z)



if (x < y) {
    console.log('yes it is less than offcourse'),
    console.log('i say again yes it is less than offcourse'),
    console.log('i say again and again yes it is less than offcourse')

}
else {
    console.log('it is not true')
    console.log('i say again it is not true')

}



// switches  

const d = new Date(2022, 17, 18, 17, 9, 3);

const hour = d.getHours()
const month = d.getMonth()

console.log('it is at the ' + hour + 'th hour of the day');

const todaysDate = Date.now()

console.log(typeof todaysDate)

console.log('todays date is ' + todaysDate/(24 * 366));


switch (hour) {
    case hour > 2:
        console.log("it's January");
        break;
    case 2:
        console.log("it's February");
        break;
    case 3:
        console.log("it's March");
        break;
    case 4:
        console.log("it's April");
        break;
    default:
        console.log('It is not a valid month')
}

console.log("hour = ", hour)

switch (hour) {
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8: 
    case 9:
    case 10:
    console.log('Good morning');
        break;
    case 11:
        console.log('Good day');
        break;
    case 12:
    case 13:
    case 14:
    case 15: 
        console.log('Good Afternoon');
        break;
    case 16:
    case 17:
        console.log('Good Evening');
        break;
    default:
        console.log('Good Night');
}