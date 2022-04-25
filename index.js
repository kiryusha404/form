"use strict"

    const form = document.getElementById('res');
    var values = {

};
function anima(){
    if (localStorage.getItem('table') !== null && localStorage.getItem('place') !== null) {
    var elem = document.getElementById("animation");
        var pos = 0;
        var id = setInterval(frame, 10)
        animation.style.backgroundColor = 'rgb(0,0,255)'
    function frame() {
        if (pos == -500) {
            clearInterval(id);
        } else {
            pos--;
            elem.style.left = pos + 'px';
        }
        }
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
