let btn = document.getElementById('btn')

btn.addEventListener('click', calculate)


const name =document.getElementById('name')
const year=document.getElementById('year')
const display=document.getElementById('display')

function calculate(){
    let username = document.getElementById('name').value;

    let birthyear =document.getElementById('year').value;

    let currentyear = new Date().getFullYear();

    let age = currentyear-birthyear;
    
    document.getElementById('display').innerHTML= `Hello ${username}, you are ${age} years old`;

}

function clearValue(){
    name.value=""
    year.value=""
    display.innerHTML=""
}

