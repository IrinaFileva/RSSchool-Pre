document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('burger').addEventListener('click', function () 
    {
        document.querySelector('.header').classList.toggle('open')
        nav.style.marginRight = '0'; 
        menuProfRegister.style.display = 'none';
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
    };
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
    };
});
carretRight.addEventListener('click', () => {
    if (position !== 4) {
        position++;
        carousel();
        allButtons();
        carretRight.classList.add('active_carret');
    } else if (position === 4 ) {
        carretRight.classList.remove('active_carret');
    };
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

// Меню Профиля до регистрации и авторизации //

const main = document.querySelector('.main');                
const header = document.querySelector('.header');           
const btnProfile2 = document.querySelector('.profile_div'); 
const startMenu = document.querySelector('.dm_noAuth');     
const btnProfile = document.querySelector('.img1');         

// открываем меню профиля до регистрации/авторизации //
btnProfile2.addEventListener('click', () => {  
    startMenu.style.display = 'flex';          
    header.classList.remove('open');           
    btnProfile2.style.display = 'none';                             
});
btnProfile.addEventListener('click', () => {    
    startMenu.style.display = 'flex';          
    header.classList.remove('open');           
    btnProfile2.style.display = 'block';       
});

// закрываем меню профиля до регистрации/авторизации //
main.addEventListener('click', () => {         
    startMenu.style.display = 'none';          
    btnProfile2.style.display = 'block';       
});                                           
header.addEventListener('click', () => {       
    startMenu.style.display = 'none';          
    btnProfile2.style.display = 'block';       
});

const numberSessionsLibraryCard = document.querySelector('.visits_number');
const numberBooksLibraryCard = document.querySelector('.librarycard_number_books');
const inpCardName = document.querySelector('.libcard_inp_name');      
const inpCardNumber = document.querySelector('.libcard_inp_number');  
const btnLibCard = document.querySelector('.libcard_table_btm');      
const iconsBlock = document.querySelector('.librarycard_icons');      

let localItemName = localStorage.getItem('if-library:UserName');        
let localItemLastName = localStorage.getItem('if-library:lastName');    
let localItemNumberCard = localStorage.getItem('if-library:cardNumber'); 

// сброс с кнопки проверки карты атрибута disabled 
btnLibCard.removeAttribute('disabled');       

// функция замены кнопки на иконки //
function hideIcons () {                      
    btnLibCard.style.display = 'block';      
    iconsBlock.style.display = 'none';             
};

// функция очистки инпутов
function clearInputs () {                    
    inpCardName.value = '';
    inpCardNumber.value = '';
};

// провека карты и данных профиля в секции Либрари кард, с показом иконок на 10 сек) 
btnLibCard.addEventListener('click', () => {  
    let lsButtonsBuy = JSON.parse(localStorage.getItem('if-library:BooksBuy')) || [];      
    if ((inpCardName.value === localItemName + ' ' + localItemLastName || inpCardName.value === localItemName) && inpCardNumber.value === localItemNumberCard) {
        numberSessionsLibraryCard.innerHTML = localStorage.getItem('if-library:numberOfSessions') || 0;
        numberBooksLibraryCard.innerHTML = lsButtonsBuy.length; 
        btnLibCard.style.display = 'none';                                                    
        iconsBlock.style.display = 'flex';                                                        
        setTimeout(() => {                                                                    
            hideIcons();
            clearInputs();
        }, 10000);
    };                 
});

// Модалка Register //

const backgroundModal = document.querySelector('.modal_background');  
const registerMain = document.querySelector('.modal_register');             
const btnRegister = document.querySelector('.btn_reg');                     
const btnRegisterLC = document.querySelector('.librarycard_request_btm');   
const btnClose = document.querySelector('.register_button_close');          
const aRegister = document.querySelector('.login_a');                       

// открыть модалку регистрации //
btnRegister.addEventListener('click', () => {   // клик на кнопку регистр в меню профиля
    backgroundModal.style.display = 'flex';     // открываем фон модалки регистрации
    registerMain.style.display = 'flex';        // открываем модалку регистрации
    startMenu.style.display = 'none';           
    btnProfile2.style.display = 'block';        
});
btnRegisterLC.addEventListener('click', () => { 
    backgroundModal.style.display = 'flex';     
    registerMain.style.display = 'flex';        
    startMenu.style.display = 'none';           
});
aRegister.addEventListener('click', () => {     
    backgroundModal.style.display = 'flex';     
    registerMain.style.display = 'flex';                 
    loginMain.style.display = 'none';          
});

// закрываем модалку регистрации //
btnClose.addEventListener('click', () => {      
    backgroundModal.style.display = 'none';     
    registerMain.style.display = 'none';       
});
backgroundModal.addEventListener('click', () => {  
    backgroundModal.style.display = 'none';        
    registerMain.style.display = 'none';           
});

// Регистрация пользователя //

const buttonSubmitRegister = document.querySelector('.register_form_button'); 
const inputFirstName = document.querySelector('.first_Name');                 
const inputLastName = document.querySelector('.last_Name');                   
const inputEmail = document.querySelector('.email');                          
const inputPassword = document.querySelector('.password');                    
const labelModalRegisEmail = document.querySelector('.modalReg_label_email');
const labelModalRegisPassword = document.querySelector('.modalReg_label_password');
const imgProf = document.querySelector('.img_prof');                          
const imgProf2 = document.querySelector('.profile_div2');                      
const menuProfRegister = document.querySelector('.dm_withAuth');              
const numCardMainProf = document.querySelector('.text_number_card');          
const numberCardModalMyProfile = document.querySelector('.modalProfile_cardNumber_linkCard');
const infoProfileSectionLibraryCard = document.querySelector('.librarycard_request');
const newInfoProfileSectionLibraryCard = document.querySelector('.librarycard_request__onRegister');
const formTitleSectionLibraryCard = document.querySelector('.libcard_table__name');
const itemBoobsNameInLink = document.getElementsByClassName('profile_books__item')
const linkBooksName = document.querySelector('.modal_profile_books_link')

let titleProf = document.querySelector('.prof_title-text');                   
let ofTextSvg = document.querySelector('.svg_prof_text');                     
let nav = document.querySelector('.nav-links');
let counter = 0;

// функция проверки заполнения инпутов //
function checkFillInput(elem, color) {             
    if (elem === '') {
        color.style.borderColor = 'red';      
    }
     else if (elem !== '') {
        color.style.borderColor = '#BB945F';       
    };
};

 // функция счетчик визитов //
function counterVisits () {
    counter+= 1;
};

// функция изменения секции Либрари кард //
function changeSection () {
   infoProfileSectionLibraryCard.style.display = 'none';        
   newInfoProfileSectionLibraryCard.style.display = 'block';    
   formTitleSectionLibraryCard.innerHTML = 'Your Library card'; 
   btnLibCard.style.display = 'none';                                                 
   iconsBlock.style.display = 'flex';                           
   inpCardName.setAttribute('disabled', 'dicabled');
   inpCardName.style.backgroundColor = 'white';
   inpCardNumber.setAttribute('disabled', 'dicabled');
   inpCardNumber.style.backgroundColor = 'white';
};

// регистрируем пользователя //

buttonSubmitRegister.addEventListener('click', (g) => {    
    
    g.stopPropagation();
    g.preventDefault();

    // чистим ЛС от предыдущих записей //
    localStorage.clear();

    let firstNameVal = inputFirstName.value;                
    let lastNameVal = inputLastName.value;                  
    let EmailVal = inputEmail.value;                        
    let passwordVal = inputPassword.value;                  

    // Проверка заполнения импутов Имя и Фамилия  //
    checkFillInput(firstNameVal, inputFirstName);           
    checkFillInput(lastNameVal, inputLastName);             

    // валидация инпута маил
    const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function valideEmail() {
      return emailRegexp.test(EmailVal);
     }                                                   

    if (valideEmail(EmailVal)) {
        inputEmail.style.borderColor = '#BB945F';                 
    } else{
        inputEmail.style.borderColor = 'red';
        labelModalRegisEmail.setAttribute ('title', 'Please, enter a valid email. For example: ivanov@gmail.com');
    };

    // валидация пароля  
    if (passwordVal.length < 8) {
        inputPassword.style.borderColor = 'red';
        labelModalRegisPassword.setAttribute ('title', 'The password must contain at least 8 characters.');   
    }; 
    if (passwordVal === '') {                                            
        inputPassword.style.borderColor = 'red';
        labelModalRegisPassword.setAttribute ('title', 'The password must contain at least 8 characters.'); 
    };
    if (passwordVal.length >= 8) {
        inputPassword.style.borderColor = '#BB945F';
    };
    
    // Имя и Фамилия с заглавной буквы //
    let firstNameLoc = firstNameVal[0].toUpperCase() + firstNameVal.slice(1);   
    let lastNameLoc = lastNameVal[0].toUpperCase() + lastNameVal.slice(1);      
    
    // если все поля заполнены верноб закрываем модалку регистрации
    if (passwordVal.length >= 8 && firstNameVal !== '' && lastNameVal !== ''&& valideEmail(EmailVal) ) {
        counterVisits()
        changeSection()
        backgroundModal.style.display = 'none';      
        registerMain.style.display = 'none';        
        btnProfile.style.display = 'none';          
        btnProfile2.style.display = 'none';         
        imgProf.style.display = 'block';            
        imgProf.style.zIndex = '3';                 
        nav.style.marginRight = '30px';             
    }; 
 
    // отправка данных в ЛС//
    localStorage.setItem('if-library:UserName', firstNameLoc);           // отправка значения интупа Имя в хранилище 
    localStorage.setItem('if-library:lastName', lastNameLoc);            // отправка значения инпута Фамилия в хранилище
    localStorage.setItem('if-library:email', EmailVal);                  // отправка значения инпута Емаил в хранилище
    localStorage.setItem('if-library:password', passwordVal);            // отправка значения инпута Пароль в хранилище
    localStorage.setItem('if-library:numberOfSessions', counter);        // отправка количества визитов в хранилище


    // генерация рандомного 9-тизначного числа в 16-тиричной системе//
    const letters = 'ABCDEF0123456789';
    let cardNumber = '';
    for (let i = 0; i < 9; i += 1) {
        const randomIdx = Math.floor(Math.random() * letters.length);     
        const randomValue = letters[randomIdx];
        cardNumber += randomValue;
    };

    // отправка значения карты в ЛС //
    localStorage.setItem('if-library:cardNumber', cardNumber);             
 
    // вызов значений из ЛС //
    let localItemName = localStorage.getItem('if-library:UserName');        
    let localItemLastName = localStorage.getItem('if-library:lastName');    
    let localItemNumberCard = localStorage.getItem('if-library:cardNumber');  
    let localItemNumberVisits = localStorage.getItem('if-library:numberOfSessions');
    let lsButtonsBuy = JSON.parse(localStorage.getItem('if-library:BooksBuy')) || [];
    const booksNameAndAutorBuy = JSON.parse(localStorage.getItem('if-library:BooksAndAutor')) || [];
    
    // заглавные буквы и иконке профиля//
    ofTextSvg.innerHTML = localItemName[0] + localItemLastName[0];   

    // заглавные буквы в аватарке в модалке My Profile //
    textAvatarModalMyProfile.innerHTML = localItemName[0] + localItemLastName[0];
  
    // имя и фамилия в модалке My Profile //
    textNameModalMyProfile.innerHTML = localItemName + ' ' + localItemLastName;
    
    //имя и фамилия в инпуте в секции Либрари Кард //
    inpCardName.value = localItemName + ' ' + localItemLastName;

    //номер карты в инпуте в секции Либрари Кард //
    inpCardNumber.value = localItemNumberCard;
    
    // атрибут титле к иконке профиля //
    titleProf.innerHTML = localItemName + ' ' + localItemLastName;   
    
    // номер карты в меню профиля после регестрации //
    numCardMainProf.innerHTML = localItemNumberCard;                 
    
    // номер карты в модалке My Profile //
    numberCardModalMyProfile.innerHTML = localItemNumberCard; 
    
    // количество визитов в модалке My Profile //
    numberOfSessionsMyProfile.innerHTML = localItemNumberVisits;

    // количество визитов в секции Library Card // 
    numberSessionsLibraryCard.innerHTML = localItemNumberVisits;

    // количество книг в модалке My Profile //
    numberBooksMyProfile.innerHTML = lsButtonsBuy.length;

    // количество книг в секции Library Card //
    numberBooksLibraryCard.innerHTML = lsButtonsBuy.length;


    // открыть меню профиля2 ///
    imgProf.addEventListener('click', () => {       
        menuProfRegister.style.display = 'block';   
        header.classList.remove('open'); 
        imgProf2.style.display = 'block';
        imgProf2.style.zIndex = '4';                                    
    });
    imgProf2.addEventListener('click', () => {      
        header.classList.remove('open');            
        menuProfRegister.style.display = 'none';
        imgProf2.style.display = 'none';
        imgProf2.style.zIndex = '1';                                           
    });

    // закрыть меню профиля2 //
    main.addEventListener('click', () => {         
        menuProfRegister.style.display = 'none'; 
        imgProf2.style.display = 'none';
        imgProf2.style.zIndex = '1';                                             
    });                                             
    header.addEventListener('click', () => {       
        menuProfRegister.style.display = 'none';
        imgProf2.style.display = 'none';     
        imgProf2.style.zIndex = '1';                  
    });

    // кнопки Buy в секции Фаворитс //
    btnBuyAll.forEach((elem) => {  
        const arr = Array.prototype.slice.call(btnBuyAll);             
        const arrAutors = Array.prototype.slice.call(titleAutorBooks);
        const arrNames = Array.prototype.slice.call(titleNameBooks);   

        elem.addEventListener('click', () => { 
            if (localItemNumberVisits === '1') {    
                backgroundModal.style.display = 'flex';
                modalByCard.style.display = 'block';    
                loginMain.style.display = 'none';      
                startMenu.style.display = 'none';      
            };
            if (lsButtonsBuy.includes(arr.indexOf(elem))) {
                elem.innerHTML = 'Own';
                elem.classList.add('favorites_btm_own');
                elem.style.pointerEvents = 'none';  
            };
            if (localStorage.getItem('if-library:Library Card') === 'Buy') {
                backgroundModal.style.display = 'none';                     
                modalByCard.style.display = 'none';
                loginMain.style.display = 'none';
                elem.innerHTML = 'Own';
                elem.classList.add('favorites_btm_own');
                elem.style.pointerEvents = 'none';
                lsButtonsBuy.push(arr.indexOf(elem));
                localStorage.setItem('if-library:BooksBuy', JSON.stringify(lsButtonsBuy));
                numberBooksMyProfile.innerHTML = lsButtonsBuy.length;
                numberBooksLibraryCard.innerHTML = lsButtonsBuy.length; 
                booksNameAndAutorBuy.push((arrNames[arr.indexOf(elem)].innerText).toLowerCase() + ',' + arrAutors[arr.indexOf(elem)].innerText);
                localStorage.setItem('if-library:BooksAndAutor', JSON.stringify(booksNameAndAutorBuy)); 
            }; 
        });
    });
});     

// Модалка Login //
    
const btnLogin = document.querySelector('.btn_login');                   
const btnLogin2 = document.querySelector('.loginLC');                    
const loginRegister = document.querySelector('.login_register');         
const btnCloseModLogin = document.querySelector('.login_button_close');  
const loginMain = document.querySelector('.modal_login');                
const btnBuyAll = document.querySelectorAll('.favorites_btm_book');        
const titleAutorBooks = document.querySelectorAll('.favorites_name_author');
const titleNameBooks = document.querySelectorAll('.favorites_name_book');

// открыть модалку Логин //
btnLogin.addEventListener('click', () => {      
    backgroundModal.style.display = 'flex';     
    loginMain.style.display = 'flex';           
    startMenu.style.display = 'none';           
});
btnLogin2.addEventListener('click', () => {     
    backgroundModal.style.display = 'flex';     
    loginMain.style.display = 'flex';           
    startMenu.style.display = 'none';           
});
loginRegister.addEventListener('click', () => { 
    registerMain.style.display = 'none';        
    loginMain.style.display = 'flex';           
});
btnBuyAll.forEach((elem) => {                   
    elem.addEventListener('click', () => {      
        backgroundModal.style.display = 'flex'; 
        loginMain.style.display = 'flex';       
        startMenu.style.display = 'none';       
     });
});

// закрыть модалку Логин //
btnCloseModLogin.addEventListener('click', () => {  
    backgroundModal.style.display = 'none';               
    loginMain.style.display = 'none';               
});
backgroundModal.addEventListener('click', () => {     
    backgroundModal.style.display = 'none';           
    loginMain.style.display = 'none';           
});

// авторизируем пользователя//

const btnSubmitLogin = document.querySelector('.login_form_button');         
const labelModalLoginEmail = document.querySelector('.modalLog_lbl_email');
const labelModalLoginPassword = document.querySelector('.modalLog_lbl_password');
const inpLoginMail = document.querySelector('.login_email');          
const inpLoginPassword = document.querySelector('.login_password');
const textAvatarModalMyProfile = document.querySelector('.modalMyProfile_avatar__text');
const textNameModalMyProfile = document.querySelector('.modalMyProfile_name__text');
const modalByCard = document.querySelector('.modal_buyCard');
const numberOfSessionsMyProfile = document.querySelector('.modal-MyProfile_numberSessions');
const numberBooksMyProfile = document.querySelector('.modal-MyProfile_numberBooks');


btnSubmitLogin.addEventListener ('click', (e) => {  

    e.stopPropagation();
    e.preventDefault();

    let inpModalLogMailVal = inpLoginMail.value;
    let inpModalLogPasswordVal = inpLoginPassword.value;
 
    // вызов значений из ЛС //
    let localItemName = localStorage.getItem('if-library:UserName');         
    let localItemEmail = localStorage.getItem('if-library:email');           
    let localItemPassword = localStorage.getItem('if-library:password');     
    let localItemLastName = localStorage.getItem('if-library:lastName');     
    let localItemNumderCard = localStorage.getItem('if-library:cardNumber');
    let localItemNumberVisits = localStorage.getItem('if-library:numberOfSessions');
    let lsButtonsBuy = JSON.parse(localStorage.getItem('if-library:BooksBuy')) || [];
    const booksNameAndAutorBuy = JSON.parse(localStorage.getItem('if-library:BooksAndAutor')) || [];
    
    // проверка инпутов на пустоту//
    checkFillInput(inpModalLogMailVal, inpLoginMail);               
    checkFillInput(inpModalLogPasswordVal, inpLoginPassword);       

    // прибавляем количество визитов//
    function nextVisits() {
       let newVisits = Number(localItemNumberVisits) + 1;
        localStorage.setItem('if-library:numberOfSessions', newVisits);
    };
    
    // валидация инпута маил
    const emailRegexpModalLogin = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function valideEmail() {
        return emailRegexpModalLogin.test(inpModalLogMailVal);
    };                                                        
  
    if (valideEmail(inpModalLogMailVal)) {
        inpLoginMail.style.borderColor = '#BB945F';                 
    } else{
        inpLoginMail.style.borderColor = 'red';
    };
  
    // валидация пароля //
    if (inpModalLogPasswordVal.length < 8) {
        inpLoginPassword.style.borderColor = 'red';   
    }; 
    if (inpModalLogPasswordVal === '') {                                             
        inpLoginPassword.style.borderColor = 'red';
    };
    if (inpModalLogPasswordVal.length >= 8) {
        inpLoginPassword.style.borderColor = '#BB945F';
    };

    // проверка на совпадение с ЛС (емаил и пароль) (если нет совпадений)//
    if (inpModalLogMailVal !== localItemEmail) {
        inpLoginMail.style.borderColor = 'red';
        labelModalLoginEmail.setAttribute('title', 'This email is not registered');
    };
    if (inpModalLogPasswordVal !== localItemPassword) {
        inpLoginPassword.style.borderColor = 'red';
        labelModalLoginPassword.setAttribute('title', "The password doesn't match. Try again");   
    };
    
    // проверка на совпадение с ЛС (емаил и пароль)(если все совпало)//
    if (inpModalLogMailVal === localItemEmail && inpModalLogPasswordVal === localItemPassword) {
        nextVisits();
        changeSection();
        backgroundModal.style.display = 'none';                       
        loginMain.style.display = 'none';                       
        btnProfile.style.display = 'none';                      
        btnProfile2.style.display = 'none';                     
        imgProf.style.display = 'block';                        
        imgProf.style.zIndex = '3';                              
        nav.style.marginRight = '30px';                         
    };

    // заглавные буквы имени и фамилии в иконке профиля //
    ofTextSvg.innerHTML = localItemName[0] + localItemLastName[0];

    // заглавные буквы имени и фамилии в аватарке в модалке My Profile // 
    textAvatarModalMyProfile.innerHTML = localItemName[0] + localItemLastName[0];

    // атрибут титле к иконке профиля, из имени и фамилии //
    titleProf.innerHTML = localItemName + ' ' + localItemLastName;   

    //имя и фамилия в инпуте в секции Либрари Кард //
    inpCardName.value = localItemName + ' ' + localItemLastName;

    //номер карты в инпуте в секции Либрари Кард //
    inpCardNumber.value = localItemNumberCard;

    // имя и фамилия в модалке My Profile //
    textNameModalMyProfile.innerHTML = localItemName + ' ' + localItemLastName;
    
    // номер карты в меню профиля//
    numCardMainProf.innerHTML = localItemNumderCard;                 
   
    // количество визитов в модалке My Profile //
    numberOfSessionsMyProfile.innerHTML = localStorage.getItem('if-library:numberOfSessions');

    // количество визитов в секции Library Card //
    numberSessionsLibraryCard.innerHTML = localStorage.getItem('if-library:numberOfSessions');

    // количество книг в модалке My Profile //
    numberBooksMyProfile.innerHTML = lsButtonsBuy.length;

    // количество визитов в секции Library Card //
    numberBooksLibraryCard.innerHTML = lsButtonsBuy.length; 

    // открыть меню профиля2 //
    imgProf.addEventListener('click', () => {       
        menuProfRegister.style.display = 'block';   
        header.classList.remove('open'); 
        imgProf2.style.display = 'block';
        imgProf2.style.zIndex = '4';                                    
    });
    imgProf2.addEventListener('click', () => {      
        header.classList.remove('open');            
        menuProfRegister.style.display = 'none';
        imgProf2.style.display = 'none';
        imgProf2.style.zIndex = '1';                               
    });

    // закрыть меню профиля2 //
    main.addEventListener('click', () => {        
        menuProfRegister.style.display = 'none'; 
        imgProf2.style.display = 'none';
        imgProf2.style.zIndex = '1';                                             
    });                                             
    header.addEventListener('click', () => {      
        menuProfRegister.style.display = 'none';
        imgProf2.style.display = 'none';    
        imgProf2.style.zIndex = '1';                  
    });

    // кнопки бай в секции Фаворитс //
    btnBuyAll.forEach((elem) => {
        const arr = Array.prototype.slice.call(btnBuyAll);             
        const arrAutors = Array.prototype.slice.call(titleAutorBooks); 
        const arrNames = Array.prototype.slice.call(titleNameBooks);   
        
        if (lsButtonsBuy.includes(arr.indexOf(elem))) {
            elem.innerHTML = 'Own';
            elem.classList.add('favorites_btm_own');
            elem.style.pointerEvents = 'none';  
        };
        
        elem.addEventListener('click', () => {
            if (localStorage.getItem('if-library:Library Card') === 'Buy') {
                backgroundModal.style.display = 'none';                      // то закрываем модалку Покупки абонемента
                modalByCard.style.display = 'none';
                loginMain.style.display = 'none'; 
                elem.innerHTML = 'Own';
                elem.classList.add('favorites_btm_own');
                elem.style.pointerEvents = 'none';
                lsButtonsBuy.push(arr.indexOf(elem));
                localStorage.setItem('if-library:BooksBuy', JSON.stringify(lsButtonsBuy));
                numberBooksMyProfile.innerHTML = lsButtonsBuy.length;
                numberBooksLibraryCard.innerHTML = lsButtonsBuy.length;
                booksNameAndAutorBuy.push((arrNames[arr.indexOf(elem)].innerText).toLowerCase() + ',' + arrAutors[arr.indexOf(elem)].innerText);
                localStorage.setItem('if-library:BooksAndAutor', JSON.stringify(booksNameAndAutorBuy));
            } 
            else {
                backgroundModal.style.display = 'flex'; 
                modalByCard.style.display = 'block';
                loginMain.style.display = 'none'; 
            }; 
        });
    });

});

// Модалка My Profile //
const btnMyProfileMenuProf = document.querySelector('.dropMenu_myProfile_btn');
const btnCloseModalMyProfile = document.querySelector('.modal_profile_btn_close');
const modalMyProfile = document.querySelector('.modal-MyProfile');
const btnCopyCardModalMyProfile = document.querySelector('.modalProfile_iconCopy');
const btnProfileSectionlibraryCard = document.querySelector('.librarycard_request_btm-Profile');
const titleBtnCopyCard = document.querySelector('.btn_clipboard_title');


// функция добавления Li //
function getListConten() { 
    const li = document.createElement('li');
    li.className = 'some class';
    li.classList.add('profile_books__item');
    return li;
};
    
// открыть модалку Мой Профиль //
btnMyProfileMenuProf.addEventListener('click', () => {

    // купленные книги (название и автор) вызываем из ЛС //
    const booksNameAndAutorBuy = JSON.parse(localStorage.getItem('if-library:BooksAndAutor')) || [];

    // функция добавления автора и названия книги в модалку My Profile //
    function addTitleBuyBooks() { 
        for ( let i = 0; i < booksNameAndAutorBuy.length; i++){
            if(booksNameAndAutorBuy.length === itemBoobsNameInLink.length){
                itemBoobsNameInLink[i].innerText = booksNameAndAutorBuy[i];
            } 
            else {     
                linkBooksName.append(getListConten());
                itemBoobsNameInLink[i].innerText = booksNameAndAutorBuy[i];
            };
        };
    };

    addTitleBuyBooks()
    modalMyProfile.style.display = 'flex';
    backgroundModal.style.display = 'flex';
    menuProfRegister.style.display = 'none';
});
btnProfileSectionlibraryCard.addEventListener('click', () => {

    // купленные книги (название и автор) вызываем из ЛС //
    const booksNameAndAutorBuy = JSON.parse(localStorage.getItem('if-library:BooksAndAutor')) || [];

     // функция добавления автора и названия книги в модалку My Profile //
    function addTitleBuyBooks() { 
        for ( let i = 0; i < booksNameAndAutorBuy.length; i++){
            if(booksNameAndAutorBuy.length === itemBoobsNameInLink.length){
                itemBoobsNameInLink[i].innerText = booksNameAndAutorBuy[i];
            } 
            else {     
                linkBooksName.append(getListConten());
                itemBoobsNameInLink[i].innerText = booksNameAndAutorBuy[i];
            };
        };
    };

    addTitleBuyBooks()
    modalMyProfile.style.display = 'flex';
    backgroundModal.style.display = 'flex';
});

// закрыть модалку Мой Профиль //
btnCloseModalMyProfile.addEventListener('click', () => {
    modalMyProfile.style.display = 'none';
    backgroundModal.style.display = 'none';
    imgProf2.style.display = 'none';
});
backgroundModal.addEventListener('click', () => {
    modalMyProfile.style.display = 'none';
    backgroundModal.style.display = 'none';
    imgProf2.style.display = 'none';
});

// кнопка буфера обмена в модалке My Profile//
btnCopyCardModalMyProfile.onclick = function copyText() {
      navigator.clipboard.writeText(numberCardModalMyProfile.innerHTML);
      titleBtnCopyCard.innerHTML = "The card number has been copied";
};


// Модалка Buy a Library Card //

const btnCloseModalBuyCard = document.querySelector('.modal_buyCard_button__close');

// закрыть модалку Buy a Library Card //
btnCloseModalBuyCard.addEventListener('click', () => {
    modalByCard.style.display = 'none';
    backgroundModal.style.display = 'none';
    loginMain.style.display = 'none';              
});
backgroundModal.addEventListener('click', () => {
    modalByCard.style.display = 'none';
    backgroundModal.style.display = 'none';
    loginMain.style.display = 'none';
});

// покупка абонемента //

const inpNumberCardModalBuyCard = document.querySelector('.input-bankCardNumder');
const inpLeftExpNodeModalBuyCard = document.querySelector('.input-expirationode_left');
const inpRightExpNodeModalBuyCard = document.querySelector('.input-expirationode_right');
const inpCVCModalBuyCard = document.querySelector('.input-CVC');
const inpCardHolderNameModalByCard = document.querySelector('.input-cardholderName');
const inpPostalCodeModalBuyCard = document.querySelector('.input-postalCode');
const inpCityTowerModalBuyCard = document.querySelector('.input-cityTown');
const btnBuyModalBuyCard = document.querySelector('.modal_buyCard_button-buy');
const labelNumberCardModalBuyCard = document.querySelector('.label-bankCardNumder');     
const labelExpNodeModalByCard = document.querySelector('.label-expirationode');
const labelCVCModalByCard = document.querySelector('.label-CVC');

btnBuyModalBuyCard.addEventListener('click', (k) => {

    k.stopPropagation();
    k.preventDefault();
    
    // проверка всех инпутов на пустоту //
    checkFillInput(inpNumberCardModalBuyCard.value, inpNumberCardModalBuyCard);
    checkFillInput(inpLeftExpNodeModalBuyCard.value, inpLeftExpNodeModalBuyCard);
    checkFillInput(inpRightExpNodeModalBuyCard.value, inpRightExpNodeModalBuyCard);
    checkFillInput(inpCVCModalBuyCard.value, inpCVCModalBuyCard);
    checkFillInput(inpCardHolderNameModalByCard.value, inpCardHolderNameModalByCard);
    checkFillInput(inpPostalCodeModalBuyCard.value, inpPostalCodeModalBuyCard);
    checkFillInput(inpCityTowerModalBuyCard.value, inpCityTowerModalBuyCard);

    // валидация импута номер карты //
    if (inpNumberCardModalBuyCard.value.length > 19 || inpNumberCardModalBuyCard.value.length < 19) {
        inpNumberCardModalBuyCard.style.borderColor = 'red';
        labelNumberCardModalBuyCard.title = 'Please enter the card number in the format: 0000 0000 0000 0000';
    }
    else if (inpNumberCardModalBuyCard.value.length === 19) {
        inpNumberCardModalBuyCard.style.borderColor = '#BB945F';
        labelNumberCardModalBuyCard.title = 'Thank you. The field is filled in correctly';
    };
    
    // длина импутов срок действия карты //
    if (inpLeftExpNodeModalBuyCard.value.length > 2 || inpLeftExpNodeModalBuyCard.value.length < 2 ) {
        inpLeftExpNodeModalBuyCard.style.borderColor = 'red';
        labelExpNodeModalByCard.title = 'This field must contain 2 digits';
    };
    if (inpRightExpNodeModalBuyCard.value.length > 2 || inpRightExpNodeModalBuyCard.value.length < 2 ) {
        inpRightExpNodeModalBuyCard.style.borderColor = 'red';
        labelExpNodeModalByCard.title = 'This field must contain 2 digits'; 
    } 
    else if (inpLeftExpNodeModalBuyCard.value.length === 2 && inpRightExpNodeModalBuyCard.value.length === 2) {
        inpLeftExpNodeModalBuyCard.style.borderColor = '#BB945F';
        labelExpNodeModalByCard.title = 'Thank you. The field is filled in correctly';
    };
    
    // длина инпута CVC //
    if (inpCVCModalBuyCard.value.length > 3 || inpCVCModalBuyCard.value.length < 3) {
        inpCVCModalBuyCard.style.borderColor = 'red';
        labelCVCModalByCard.title = 'This field must contain 3 digits';
    } 
    else if (inpCVCModalBuyCard.value.length === 3) {
        inpCVCModalBuyCard.style.borderColor = '#BB945F';
        labelCVCModalByCard.title = 'Thank you. The field is filled in correctly';
    };
    
    // если все знаечния верны то закрываем модалку покупки абонемента
    if (inpCVCModalBuyCard.value.length === 3 && inpLeftExpNodeModalBuyCard.value.length === 2 
        && inpRightExpNodeModalBuyCard.value.length === 2 && inpNumberCardModalBuyCard.value.length === 19 
        && inpCardHolderNameModalByCard.value !== '' && inpPostalCodeModalBuyCard.value !== ''
        && inpCityTowerModalBuyCard.value !== '') {
            backgroundModal.style.display = 'none';
            modalByCard.style.display = 'none';
        };

    // заносим данные о покупле в LS //
    localStorage.setItem('if-library:Library Card', 'Buy');
});

// кнопка Log Out (выход из авторизации)

const btnLogOutProfileMenu = document.querySelector('.btn-LogOut');

btnLogOutProfileMenu.addEventListener('click', () => {
    location.reload()
});





 




