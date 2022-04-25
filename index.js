"use strict"

    const form = document.getElementById('res');
    var values = {

};

function showPT(table, place) {
    tShow = document.querySelector("#el1");
    pShow = document.querySelector('#el2');

    if (localStorage.getItem('table') !== undefined && localStorage.getItem('place') !== undefined) {

    }

}
function retrieveFormValue(event) {
    event.preventDefault();
    let table = form.querySelector('[name="table"]');
    let  place = form.querySelector('[name="place"]');

    values["table"] = table.value;
    values["place"] = place.value;
    console.log('', values);
    localStorage.setItem('table', values["table"]);
    localStorage.setItem('place', values["place"]);


}

form.addEventListener('submit', retrieveFormValue);



console.log(localStorage.getItem('table'));
console.log(localStorage.getItem('place'));

