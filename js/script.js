let posTitle  = document.getElementsByClassName('posTitle')[0];

console.log(typeof posTitle)

function displayDate(){
    let element = document.getElementsByClassName('posTitle')[0];
    element.innerHTML = Date();
    element.style.color = 'black';
    element.style.fontSize = '20px';
}
function upperCase() {
    let element = document.getElementsByName('firstName')[0];
    element.value = element.value.toUpperCase()
}

function displayChange() {
    let elem = document.getElementsByName('positions')[0];

}