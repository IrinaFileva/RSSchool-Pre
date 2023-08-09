document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('burger').addEventListener('click', function () 
    {
        document.querySelector('.header').classList.toggle('open')
    })
});

document.getElementById('menu').addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.getElementById('burger').addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    document.querySelector('.header').classList.remove('open')
});

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('a').addEventListener('click', function () 
    {
        document.querySelector('.header').classList.remove('open')
    })
});

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('b').addEventListener('click', function () 
    {
        document.querySelector('.header').classList.remove('open')
    })
});
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('c').addEventListener('click', function () 
    {
        document.querySelector('.header').classList.remove('open')
    })
});

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('d').addEventListener('click', function () 
    {
        document.querySelector('.header').classList.remove('open')
    })
});

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('i').addEventListener('click', function () 
    {
        document.querySelector('.header').classList.remove('open')
    })
});

