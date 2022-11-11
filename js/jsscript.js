// let posTitle = document.getElementsByClassName('posTitle')[0];

// // let header = document.getElementsByName('header')[0];

// let header = document.getElementsByClassName('header')[0];

// // let positions = document.getElementById('positions');

// let positions = document.querySelector('#positions');

// header.style.backgroundColor = 'red';

// positions.style.color = '#000';

// posTitle.style.color = 'red';


// console.log(posTitle);
// console.log(header);
// console.log(positions);


// function displayDate() {
//     let element = document.getElementsByClassName('posTitle')[0];
//     element.innerHTML = Date();
//     element.style.color = 'black';
//     element.style.fontSize = "15px"
// }

// function upperCase() {
//     let element = document.getElementsByTagName('firstName')[0];
//     element.value = element.value.toUpperCase()
// }


//дз

// let copyright = document.getElementsByClassName('copyright')[0];
// copyright.style.color = 'red';

// console.log(copyright);

function changeText(id) {
    id.innerHTML = "НЕ ДЕЛАЙ ТАК !";
}



function main(elem) {
    elem.innerHTML = "^~^ Ужас";
    elem.style.color = "red";
    elem.style.fontSize = "50px";
    elem.style.textAlgin = "center";
}

function addForm(elem) {
    alert("Ты не знаешь мааама он не такой, он не такой как все ")
}


function display(a) {
    a.innerHTML = "I Love  you Begimai";
}



// let element_container = document.querySelector('.element_container');

// let elem1 = document.createElement("p");
// let elem2 = document.createElement("p");

// elem1.style.color = 'red';

// elem1.append('Element 1');
// elem1.prepend('ELEMENT 2');

// elem1.innerText = "<span>innerText</span>";

// elem2.innerHTML = "<h1>innerText</h1> "

// element_container.append(elem1);
// element_container.append(elem2);

// let main = document.getElementsByClassName('main')[0];

let element_container = document.querySelector('.element_container');

element_container.style.display = 'flex';
element_container.style.justifyContent = 'space-around'
element_container.style.padding = '20px'

let btn_on = document.createElement('button');
let btn_off = document.createElement('button');

btn_on.innerText = 'включить темную тему'
btn_off.innerText = 'Отключить темную тему'

element_container.append(btn_on)
element_container.append(btn_off)

btn_on.addEventListener('click', () => {
    mask.classList.add('dark-theme')
})

btn_off.addEventListener('click', () => {
    mask.classList.remove('dark-theme')
    console.log(e)
})

document.addEventListener('keydown', (e) => {
    if (e.code === 'KeyA') {
        mask.classList.add('dark-theme')
    } else if (e.code === 'KeyB') {
        mask.classList.remove('dark-theme')
    }
})


let mask = document.querySelector('.mask');


let time = new Date().getHours();


if (time > 13) {
    mask.classList.add('dark-theme')
}