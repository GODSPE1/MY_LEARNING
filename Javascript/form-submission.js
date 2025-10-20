// const form = document.querySelector('form');
const form = document.getElementById('item-form');


function onSubmit(e) {
    e.preventDefault(); // prevents default behaviour
    // console.log('submit')


    const item = document.getElementById('item-input').value; // .value is used to get the value
    const priority =  document.getElementById('priority-input');

    if ( priority === '0' || item === "") { ///question why if return is commented and the priority is been shown even when by passing the alert
        alert('Please fill in all fields');
        return

    }

    console.log(item, priority.value);
}



function onSubmit2(e) {
    e.preventDefault();

    const formData = new FormData(form);

    const item = formData.get('item');
    const priority = formData.get('priority');

    // console.log(item, priority);



    const entries = formData.entries();
    // console.log(entries);
    

    for (entry of entries) {
        console.log(`${entry[0]} = ${entry[1]}`)
    }



}

form.addEventListener('submit', onSubmit2);



