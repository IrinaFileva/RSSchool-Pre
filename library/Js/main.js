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

// Carousel //

const photo = document.querySelector('.slider_wrapper');
const button1 = document.querySelector('.btn1');
const button2 = document.querySelector('.btn2');
const button3 = document.querySelector('.btn3');
const button4 = document.querySelector('.btn4');
const button5 = document.querySelector('.btn5');
const carretLeft = document.querySelector('.carret_left');
const carretRight = document.querySelector('.carret_right');
let position = 0;

function carousel() {
    if (position === 0) {
        photo.classList.remove('center', 'right', 'next2', 'next');
        photo.classList.add('left');
    } else if (position === 1) {
        photo.classList.remove('left', 'right', 'next', 'next2');
        photo.classList.add('center');
    } else if (position === 2) {
        photo.classList.remove('center', 'left', 'next', 'next2');
        photo.classList.add('right');
    } else if (position === 3) {
        photo.classList.remove('center', 'left', 'right', 'next2');
        photo.classList.add('next');
    } else if (position === 4) {
        photo.classList.remove('center', 'left', 'right', 'next');
        photo.classList.add('next2');
    }
};

function allButtons() {
    if (position === 0) {
        button1.classList.add('active');
        button2.classList.remove('active');
        button3.classList.remove('active');
        button4.classList.remove('active');
        button5.classList.remove('active');
    } else if (position === 1) {
        button2.classList.add('active');
        button1.classList.remove('active');
        button3.classList.remove('active');
        button4.classList.remove('active');
        button5.classList.remove('active');
    } else if (position === 2) {
        button3.classList.add('active');
        button1.classList.remove('active');
        button2.classList.remove('active');
        button4.classList.remove('active');
        button5.classList.remove('active');
    } else if (position === 3) {
        button4.classList.add('active');
        button1.classList.remove('active');
        button2.classList.remove('active');
        button3.classList.remove('active');
        button5.classList.remove('active');
    } else if (position === 4) {
        button5.classList.add('active');
        button1.classList.remove('active');
        button2.classList.remove('active');
        button3.classList.remove('active');
        button4.classList.remove('active');
    }
};

button1.addEventListener('click', () => {
    position = 0;
    carousel();
    allButtons();
});
button2.addEventListener('click', () => {
    position = 1;
    carousel();
    allButtons();
});
button3.addEventListener('click', () => {
    position = 2;
    carousel();
    allButtons();
});
button4.addEventListener('click', () => {
    position = 3;
    carousel();
    allButtons();
});
button5.addEventListener('click',() => {
    position = 4;
    carousel();
    allButtons();
});

carretLeft.addEventListener('click', () => {
    if (position !== 0) {
        position--;
        carousel();
        allButtons();
        carretLeft.classList.add('active_carret');
    } else if (position === 0) {
        carretLeft.classList.remove('active_carret');
    }
});
carretRight.addEventListener('click', () => {
    if (position !== 4) {
        position++;
        carousel();
        allButtons();
        carretRight.classList.add('active_carret');
    } else if (position === 4 ) {
        carretRight.classList.remove('active_carret');
    }
});

// Favorites Slider//

const inpWinter = document.querySelector('.inp_winter');
const inpSpring = document.querySelector('.inp_spring');
const inpSummer = document.querySelector('.inp_summer');
const inpAutumn = document.querySelector('.inp_autumn');
const blockWinter = document.querySelector('.books_top_winter');
const blockSpring = document.querySelector('.books_top_spring');
const blockSummer = document.querySelector('.books_top_summer');
const blockAutumn = document.querySelector('.books_top_autumn');

inpWinter.addEventListener('click', () => {
    blockWinter.style.opacity = '1';
    blockSpring.style.opacity = '0';
    blockSummer.style.opacity = '0';
    blockAutumn.style.opacity = '0';
    blockWinter.style.zIndex = '10';
    blockSpring.style.zIndex = '0';
    blockSummer.style.zIndex = '0';
    blockAutumn.style.zIndex = '0';
});
inpSpring.addEventListener('click', () => {
    blockWinter.style.opacity = '0';
    blockSpring.style.opacity = '1';
    blockSummer.style.opacity = '0';
    blockAutumn.style.opacity = '0';
    blockWinter.style.zIndex = '0';
    blockSpring.style.zIndex = '10';
    blockSummer.style.zIndex = '0';
    blockAutumn.style.zIndex = '0';
});
inpSummer.addEventListener('click', () => {
    blockWinter.style.opacity = '0';
    blockSpring.style.opacity = '0';
    blockSummer.style.opacity = '1';
    blockAutumn.style.opacity = '0';
    blockWinter.style.zIndex = '0';
    blockSpring.style.zIndex = '0';
    blockSummer.style.zIndex = '10';
    blockAutumn.style.zIndex = '0';
});
inpAutumn.addEventListener('click', () => {
    blockWinter.style.opacity = '0';
    blockSpring.style.opacity = '0';
    blockSummer.style.opacity = '0';
    blockAutumn.style.opacity = '1';
    blockWinter.style.zIndex = '0';
    blockSpring.style.zIndex = '0';
    blockSummer.style.zIndex = '0';
    blockAutumn.style.zIndex = '10';
    
});

// Profile Main//

const main = document.querySelector('.main');
const header = document.querySelector('.header');
const btnProfile = document.querySelector('.profile_div');
const startMenu = document.querySelector('.dm_noAuth');
const btnProfile2 = document.querySelector('.img1');

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
const btnRegisterLC = document.querySelector('.librarycard_request_btm')
const btnClose = document.querySelector('.register_button_close')
const registerBack = document.querySelector('.modal_register_background')
const registerMain = document.querySelector('.modal_register')

btnRegister.addEventListener('click', () => {
    registerBack.style.display = 'flex';
    registerMain.style.display = 'flex';
    startMenu.style.display = 'none'
    btnProfile.style.display = 'block'
})
btnRegisterLC.addEventListener('click', () => {
    registerBack.style.display = 'flex';
    registerMain.style.display = 'flex';
})
btnClose.addEventListener('click', () => {
    registerBack.style.display = 'none';
    registerMain.style.display = 'none';
})
registerBack.addEventListener('click', () => {
    registerBack.style.display = 'none';
    registerMain.style.display = 'none';
})

// Submit Form //

const buttonSubmit = document.querySelector('.register_form_button')
const inputFirstName = document.querySelector('.first_Name')
const inputLastName = document.querySelector('.last_Name')
const inputEmail = document.querySelector('.email')
const inputPassword = document.querySelector('.password')

buttonSubmit.addEventListener('click', (g) => {     
    g.stopPropagation()
    g.preventDefault()

    let firstNameVal = inputFirstName.value
    let lastNameVal = inputLastName.value
    let EmailVal = inputEmail.value
    let passwordVal = inputPassword.value

    const name = inputFirstName.name
    const lastName = inputLastName.name
    const email = inputEmail.name
    const password = inputPassword.name

    localStorage.setItem(name, firstNameVal)
    localStorage.setItem(lastName, lastNameVal)
    localStorage.setItem(email, EmailVal)
    localStorage.setItem(password, passwordVal)

    registerBack.style.display = 'none'
    registerMain.style.display = 'none'

    let cardNumber = Math.floor(Math.random() * 1000000000000000 +1000000000000000);
    let NumberCard = cardNumber.toString(16).toUpperCase();
    localStorage.setItem('Number Card', NumberCard);
    
    let profileImg1 = localStorage.getItem('Name');
    let profileImg2 = localStorage.getItem('LastName'); 

    let textProfileImg = profileImg1[0] + profileImg2[0];
    let ofTextSvg = document.querySelector('.svg_prof_text')
    ofTextSvg.innerHTML = textProfileImg;
    
    let titleTextProf = profileImg1 + ' ' + profileImg2;
    let titleProf = document.querySelector('.prof_title-text')
    titleProf.innerHTML = titleTextProf;

    btnProfile.style.display = 'none'
    btnProfile2.style.display = 'none'

    let imgProf = document.querySelector('.img_prof')
    let nav = document.querySelector('.nav-links')
    imgProf.style.display = 'block'
    imgProf.style.zIndex = '3'
    nav.style.marginRight = '30px'  

    let inpCardName = document.querySelector('.libcard_inp_name')
    let inpCardNumber = document.querySelector('.libcard_inp_number')
    let btnLibCard = document.querySelector('.libcard_table_btm')
    let iconsBlock = document.querySelector('.librarycard_icons')
    let numberCard2 = localStorage.getItem('Number Card')
       
    inpCardName.addEventListener('input', () => {
        if (inpCardName.value === profileImg1) {
            btnLibCard.style.display = 'none'
            iconsBlock.style.display = 'flex'
        }
        if (inpCardNumber.value === '') {
            btnLibCard.style.display = 'block'
            iconsBlock.style.display = 'none'
        }
    })
    inpCardNumber.addEventListener('input', () => {
        if (inpCardNumber.value === numberCard2) {
            btnLibCard.style.display = 'none'
            iconsBlock.style.display = 'flex'
        }
        if (inpCardName.value === '') {
            btnLibCard.style.display = 'block'
            iconsBlock.style.display = 'none'
        }
    })
        
})
// Modal Login //
    
const btnLogin = document.querySelector('.btn_login');
const btnLogin2 = document.querySelector('.loginLC');
const btnCloseModLogin = document.querySelector('.login_button_close');
const loginBack = document.querySelector('.modal_login_background');
const loginMain = document.querySelector('.modal_login');

btnLogin.addEventListener('click', () => {
    startMenu.style.display = 'none';
    loginBack.style.display = 'flex';
    loginMain.style.display = 'flex';
    btnProfile.style.display = 'block';
});
btnLogin2.addEventListener('click', () => {
    loginBack.style.display = 'flex';
    loginMain.style.display = 'flex';
});
btnCloseModLogin.addEventListener('click', () => {
    loginBack.style.display = 'none';
    loginMain.style.display = 'none';
});
loginBack.addEventListener('click', () => {
    loginBack.style.display = 'none';
    loginMain.style.display = 'none';
});

    

 




