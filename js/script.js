let posTitle  = document.getElementsByClassName('posTitle')[0];

// console.log(typeof posTitle)/

function displayDate(){
    let element = document.getElementsByClassName('posTitle')[0];
    element.innerHTML = Date();
    element.style.color = 'black';
    element.style.fontSize = '20px';
}
function upperCase(){
    let element = document.getElementsByName('firstName')[0];
    element.value = element.value.toUpperCase()
}


let element_container = document.querySelector('.element_container');

element_container.style.display = 'flex';

element_container.style.justifyContent = 'space-around';

element_container.style.padding = '20px';


let btn_on = document.createElement('button');
let btn_off = document.createElement('button');

btn_on.innerText = 'Включить темную тему'
btn_off.innerText = 'Отключить темную тему'

element_container.append(btn_on)
element_container.append(btn_off)

btn_on.addEventListener('click', ()=>{
    mask.classList.add('dark-theme')
})

btn_off.addEventListener('click', (e)=>{
    mask.classList.remove('dark-theme')
    // console.log(e)
})

document.addEventListener('keydown', (e)=>{
    if(e.code === 'KeyA'){
        mask.classList.add('dark-theme')
    }else if(e.code === 'KeyB'){
        mask.classList.remove('dark-theme')
    }
})



let mask = document.querySelector('.mask');

let time = new Date().getHours();

if(time > 17){
    mask.classList.add('dark-theme')
}