var burgerMenu = document.getElementById('burger-menu');

var overlay = document.getElementById('menu');

burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

let title= document.getElementsByClassName('title')[0];
title.style.color='purple';
console.log(title);

let copyright=document.querySelector('[name="copyright"]')
copyright.style.backgroundColor='green';
console.log(copyright);

function displayDate(){
  let element=document.getElementsByClassName('posTitle')[0];
  element.innerHTML = Date();
  element.style.color = 'black';
  element.style.fontSize = '15px';
}

function countData() {
    alert("Ваши данные отправлены!");
  }

  function textData() {
    alert("Напишите пожелание!");
  }