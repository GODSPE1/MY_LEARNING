function curSuccess(pos) {
    const coords = pos.coords
    console.log(`current postion latitude ${coords.latitude}`);
    console.log(`current postion longitude ${coords.longitude}`);
    console.log(`position Accuracy ${coords.accuracy} meters`);
}

function curError(err) {
    console.log(`Error: ${err.code} - ${err.message}`);
}

const CurOption = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximunAge: 0,
};


navigator.geolocation.getCurrentPosition(curSuccess, curError, CurOption);



// Watch Position
const target = {
    latitude: 4.7756,
    longitude: 7.0085,
}

function watchSuccess(pos) {
    const watchcoords = pos.coords.latitude
    console.log(`Watch latitude: ${watchcoords}`)
    console.log(`Watch longitude: ${pos.coords.longitude}`)
    console.log(`Watch accuracy: ${pos.coords.accuracy} meters`)

    if (watchcoords === target.latitude && pos.coords.longitude === target.longitude) {
        console.log("You have reached the target");
        navigator.geolocation.clearWatch(id);
    } else {
        console.log("You are still far from the target");
        }
}

function watchError(err) {
    console.log(`Error: ${err.code} - ${err.message}`);
}

const WatchOption = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximunAge: 0,
};

id = navigator.geolocation.watchPosition(watchSuccess, watchError, WatchOption);