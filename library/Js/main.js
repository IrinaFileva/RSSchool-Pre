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

// Cлайдер //
const button1 = document.querySelector('.btn1');
const button2 = document.querySelector('.btn2');
const button3 = document.querySelector('.btn3');
const button4 = document.querySelector('.btn4')
const button5 = document.querySelector('.btn5')
const photo = document.querySelector('.slider_wrapper')
const carretLeft = document.querySelector('.carret_left')
const carretRight = document.querySelector('.carret_right')
let position = 0;


function carousel() {
    if (position === 0) {
        photo.classList.remove('center', 'right', 'next2', 'next')
        photo.classList.add('left')
    } else if (position === 1) {
        photo.classList.remove('left', 'right', 'next', 'next2')
        photo.classList.add('center')
    } else if (position === 2) {
        photo.classList.remove('center', 'left', 'next', 'next2')
        photo.classList.add('right')
    } else if (position === 3) {
        photo.classList.remove('center', 'left', 'right', 'next2')
        photo.classList.add('next')
    } else if (position === 4) {
        photo.classList.remove('center', 'left', 'right', 'next')
        photo.classList.add('next2')
    }
}

function allButtons() {
    if (position === 0) {
        button1.classList.add('active')
        button2.classList.remove('active')
        button3.classList.remove('active')
        button4.classList.remove('active')
        button5.classList.remove('active')
    } else if (position === 1) {
        button2.classList.add('active')
        button1.classList.remove('active')
        button3.classList.remove('active')
        button4.classList.remove('active')
        button5.classList.remove('active')
    } else if (position === 2) {
        button3.classList.add('active')
        button1.classList.remove('active')
        button2.classList.remove('active')
        button4.classList.remove('active')
        button5.classList.remove('active')
    } else if (position === 3) {
        button4.classList.add('active')
        button1.classList.remove('active')
        button2.classList.remove('active')
        button3.classList.remove('active')
        button5.classList.remove('active')
    } else if (position === 4) {
        button5.classList.add('active')
        button1.classList.remove('active')
        button2.classList.remove('active')
        button3.classList.remove('active')
        button4.classList.remove('active')
    }
}

button1.addEventListener('click', () => {
    position = 0;
    carousel();
    allButtons();
})

button2.addEventListener('click', () => {
    position = 1;
    carousel()
    allButtons()
})
button3.addEventListener('click', () => {
    position = 2;
    carousel()
    allButtons()
})
button4.addEventListener('click', () => {
    position = 3;
    carousel()
    allButtons()
})
button5.addEventListener('click',() => {
    position = 4;
    carousel()
    allButtons()
})


carretLeft.addEventListener('click', () => {
    if (position !== 0) {
        position--;
        carousel();
        allButtons()
        carretLeft.classList.add('active_carret')
    } else if (position === 0) {
        carretLeft.classList.remove('active_carret')
    }
})
carretRight.addEventListener('click', () => {
    if (position !== 4) {
        position++;
        carousel();
        allButtons()
        carretRight.classList.add('active_carret')
    } else if (position === 4 ) {
        carretRight.classList.remove('active_carret')
    }
})

// favorites//

const inpWinter = document.querySelector('.inp_winter')
const inpSpring = document.querySelector('.inp_spring')
const inpSummer = document.querySelector('.inp_summer')
const inpAutumn = document.querySelector('.inp_autumn')
const blockWinter = document.querySelector('.books_top_winter')
const blockSpring = document.querySelector('.books_top_spring')
const blockSummer = document.querySelector('.books_top_summer')
const blockAutumn = document.querySelector('.books_top_autumn')

inpWinter.addEventListener('click', () => {
    blockWinter.style.opacity = '1';
    blockSpring.style.opacity = '0';
    blockSummer.style.opacity = '0';
    blockAutumn.style.opacity = '0';
})
inpSpring.addEventListener('click', () => {
    blockWinter.style.opacity = '0';
    blockSpring.style.opacity = '1';
    blockSummer.style.opacity = '0';
    blockAutumn.style.opacity = '0';
})
inpSummer.addEventListener('click', () => {
    blockWinter.style.opacity = '0';
    blockSpring.style.opacity = '0';
    blockSummer.style.opacity = '1';
    blockAutumn.style.opacity = '0';
})
inpAutumn.addEventListener('click', () => {
    blockWinter.style.opacity = '0';
    blockSpring.style.opacity = '0';
    blockSummer.style.opacity = '0';
    blockAutumn.style.opacity = '1';
})

// Profile Main//
 const btnProfile = document.querySelector('.profile_div')
 const startMenu = document.querySelector('.dropMenu')
 const main = document.querySelector('.main')
 const header = document.querySelector('.header')
 const btnProfile2 = document.querySelector('.img1')


btnProfile.addEventListener('click', () => {
    startMenu.style.display = 'flex'
    btnProfile.style.display = 'none'
});
btnProfile2.addEventListener('click', () =>{
    btnProfile.style.display = 'block'
})

main.addEventListener('click', () => {
    startMenu.style.display = 'none'
    btnProfile.style.display = 'block'
});
header.addEventListener('click', () => {
    startMenu.style.display = 'none'
    btnProfile.style.display = 'block'
})

// Modal Register //

const btnRegister = document.querySelector('.btn_reg')
const registerBack = document.querySelector('.modal_register_background')
const registerMain = document.querySelector('.modal_register')

btnRegister.addEventListener('click', () => {
    registerBack.style.display = 'flex';
    registerMain.style.display = 'flex';
})
