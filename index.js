const form = document.getElementById('res');

function retrieveFormValue(event) {
    event.preventDefault();
    const table = form.querySelector('[name="table"]'),
        place = form.querySelector('[name="place"]');

    const values = {
        table: table.value,
        place: place.value
    };
    console.log('', values);
}

form.addEventListener('submit', retrieveFormValue);