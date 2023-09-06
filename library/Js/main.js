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

// Дроп меню до регистрации и авторизации //

const main = document.querySelector('.main');                
const header = document.querySelector('.header');           
const btnProfile2 = document.querySelector('.profile_div'); 
const startMenu = document.querySelector('.dm_noAuth');     
const btnProfile = document.querySelector('.img1');         

btnProfile2.addEventListener('click', () => {  // клик на доп.кнопку 
    startMenu.style.display = 'flex';          // открываем меню профиля
    header.classList.remove('open');           
    btnProfile2.style.display = 'none';                             
});
btnProfile.addEventListener('click', () => {   // клик на иконку профиля 
    startMenu.style.display = 'flex';          // открываем меню профиля
    header.classList.remove('open');           
    btnProfile2.style.display = 'block';       
});
main.addEventListener('click', () => {         // закрываем меню профиля кликом на main
    startMenu.style.display = 'none';          
    btnProfile2.style.display = 'block';       
});                                           
header.addEventListener('click', () => {       // закрываем меню профиля кликом на хедер
    startMenu.style.display = 'none';          
    btnProfile2.style.display = 'block';       
});

const numberSessionsLibraryCard = document.querySelector('.visits_number');
const numberBooksLibraryCard = document.querySelector('.librarycard_number_books');
const inpCardName = document.querySelector('.libcard_inp_name');      // импут Имя в секции Либрари Кард
const inpCardNumber = document.querySelector('.libcard_inp_number');  // импут Номер карты в секции Либрари Кард
const btnLibCard = document.querySelector('.libcard_table_btm');      // кнопка проверки карты в секции Либрари Кард
const iconsBlock = document.querySelector('.librarycard_icons');      // блок из иконок Визиты, Бонусы, Книги

let localItemName = localStorage.getItem('if-library:UserName');        
let localItemLastName = localStorage.getItem('if-library:lastName');    
let localItemNumberCard = localStorage.getItem('if-library:cardNumber'); 

btnLibCard.removeAttribute('disabled');       // сброс с кнопки проверки карты атрибута disabled 

function hideIcons () {                      // функция включения кнопки проверки карты
    btnLibCard.style.display = 'block';      // показываем кнопку проверки карты
    iconsBlock.style.display = 'none';       // не показываем блок из иконок        
};

function clearInputs () {                    // функция очистки инпутов
    inpCardName.value = '';
    inpCardNumber.value = '';
};

btnLibCard.addEventListener('click', () => {  
    let lsButtonsBuy = JSON.parse(localStorage.getItem('if-library:BooksBuy')) || [];    // клик по кнопке проверки карты   
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

btnRegister.addEventListener('click', () => {   // клик на кнопку регистр в меню профиля
    backgroundModal.style.display = 'flex';     // открываем фон модалки регистрации
    registerMain.style.display = 'flex';        // открываем модалку регистрации
    startMenu.style.display = 'none';           
    btnProfile2.style.display = 'block';        
});
btnRegisterLC.addEventListener('click', () => { // клик на кпопку sing up в секции либрари кард
    backgroundModal.style.display = 'flex';     // открываем фон модалки регистрации
    registerMain.style.display = 'flex';        // открываем модалку регистрации
    startMenu.style.display = 'none';           
});
btnClose.addEventListener('click', () => {      // клик по кнопке-крестику в модалке регистрации
    backgroundModal.style.display = 'none';     // убираем фон модалки регистрации
    registerMain.style.display = 'none';        // убираем модалку
});
backgroundModal.addEventListener('click', () => {  // клик на фон модалки регистрации
    backgroundModal.style.display = 'none';        // убираем фон модалки регистрации
    registerMain.style.display = 'none';           // убираем модалку регистрации
});
aRegister.addEventListener('click', () => {     // клик по ссылке в модалке логин
    backgroundModal.style.display = 'flex';     // открываем фон модалки регистрации
    registerMain.style.display = 'flex';        // открываем модалку регистрации           
    loginMain.style.display = 'none';           // убираем модалку логин
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

// купленные книги ( название и автор) вызываем из ЛС //
const booksNameAndAutorBuy = JSON.parse(localStorage.getItem('if-library:BooksAndAutor')) || [];

// функция добавления Li //
function getListConten() { 
    const li = document.createElement('li');
        li.className = 'some class';
        li.classList.add('profile_books__item');
        return li;
};

// функция добавления автора и названия книги в модалку My Profile //
function addTitleBuyBooks() { 
    for ( let i = 0; i < booksNameAndAutorBuy.length; i++){
        if (booksNameAndAutorBuy.length > 2) {
            linkBooksName.classList.add('scroll_modal'); 
    };
    linkBooksName.append(getListConten());
    itemBoobsNameInLink[i].innerText = booksNameAndAutorBuy[i];
    };
};

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
   infoProfileSectionLibraryCard.style.display = 'none';        // убираем старую информацию и кнопки справа
   newInfoProfileSectionLibraryCard.style.display = 'block';    // добавляем новую информацию и кнопку справа
   formTitleSectionLibraryCard.innerHTML = 'Your Library card'; // меняем заголовок формы
   btnLibCard.style.display = 'none';                           // скрываем кнопку                         
   iconsBlock.style.display = 'flex';                           // показываем иконки
   inpCardName.setAttribute('disabled', 'dicabled');
   inpCardName.style.backgroundColor = 'white';
   inpCardNumber.setAttribute('disabled', 'dicabled');
   inpCardNumber.style.backgroundColor = 'white';
};

// регистрируем пользователя //

buttonSubmitRegister.addEventListener('click', (g) => {    // клик на кнопку sung up 
    
    g.stopPropagation();
    g.preventDefault();
    localStorage.clear();

    let firstNameVal = inputFirstName.value;                // значение внесенного текста в инпут Имя 
    let lastNameVal = inputLastName.value;                  // значение внесенного текста в инпут Фамилия
    let EmailVal = inputEmail.value;                        // значение внесенного текста в инпут Емаил
    let passwordVal = inputPassword.value;                  // значение внесенного текста в инпут Пароль

    // Проверка заполнения импутов Имя и Фамилия
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
    
    if (passwordVal.length >= 8 && firstNameVal !== '' && lastNameVal !== ''&& valideEmail(EmailVal) ) {
        counterVisits()
        changeSection()
        backgroundModal.style.display = 'none';     // убираем фон модалки 
        registerMain.style.display = 'none';        // убираем модалку регистрации 
        btnProfile.style.display = 'none';          // скрываем иконку профиля до регистрации
        btnProfile2.style.display = 'none';         // скрываем доп.кпопку до регистрации
        imgProf.style.display = 'block';            // открываем иконку профиля после регистрации
        imgProf.style.zIndex = '3';                 // подымаем иконку 
        nav.style.marginRight = '30px';             // отодвигаем навигацию от иконки
    }; 

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

    // отправка значения карты в хранилище //
    localStorage.setItem('if-library:cardNumber', cardNumber);             
 
    // вызов значений из хранилища //
    let localItemName = localStorage.getItem('if-library:UserName');        
    let localItemLastName = localStorage.getItem('if-library:lastName');    
    let localItemNumberCard = localStorage.getItem('if-library:cardNumber');  
    let localItemNumberVisits = localStorage.getItem('if-library:numberOfSessions');
    let lsButtonsBuy = JSON.parse(localStorage.getItem('if-library:BooksBuy')) || [];
    
    // заглавные буквы и иконке профиля//
    ofTextSvg.innerHTML = localItemName[0] + localItemLastName[0];   

    // заглавные буквы в аватарке в модалке My Profile //
    textAvatarModalMyProfile.innerHTML = localItemName[0] + localItemLastName[0];
  
    // имя и фамилия в модалке My Profile //
    textNameModalMyProfile.innerHTML = localItemName + ' ' + localItemLastName;

    inpCardName.value = localItemName + ' ' + localItemLastName;

    inpCardNumber.value = localItemNumberCard;
    
    // атрибут титле к иконке профиля //
    titleProf.innerHTML = localItemName + ' ' + localItemLastName;   
    
    // номер карты в меню профиля после регестрации //
    numCardMainProf.innerHTML = localItemNumberCard;                 
    
    // номер карты в модалке My Profile //
    numberCardModalMyProfile.innerHTML = localItemNumberCard; 
    
    // количество визитов в модалке My Profile
    numberOfSessionsMyProfile.innerHTML = localItemNumberVisits;

    // количество визитов в секции Library Card //
    numberSessionsLibraryCard.innerHTML = localItemNumberVisits;

    numberBooksMyProfile.innerHTML = lsButtonsBuy.length
    numberBooksLibraryCard.innerHTML = lsButtonsBuy.length

    imgProf.addEventListener('click', () => {       // клик на иконку профиля после регистрации
        menuProfRegister.style.display = 'block';   // открывает меню профиля
        header.classList.remove('open'); 
        imgProf2.style.display = 'block';
        imgProf2.style.zIndex = '4';                                    
    });
    imgProf2.addEventListener('click', () => {      // клик по доп.кнопки иконки профиля после регистрации
        header.classList.remove('open');            // скрываем меню профиля 
        menuProfRegister.style.display = 'none';
        imgProf2.style.display = 'none';
        imgProf2.style.zIndex = '1';                                           
    });
    main.addEventListener('click', () => {         // закрываем меню профиля кликом на майн
        menuProfRegister.style.display = 'none'; 
        imgProf2.style.display = 'none';
        imgProf2.style.zIndex = '1';                                             
    });                                             
    header.addEventListener('click', () => {       // закрываем меню профиля кликом на хедер
        menuProfRegister.style.display = 'none';
        imgProf2.style.display = 'none';     
        imgProf2.style.zIndex = '1';                  
    });

    

    btnBuyAll.forEach((elem) => {  
        const arr = Array.prototype.slice.call(btnBuyAll);                 
        elem.addEventListener('click', () => { 
            if (localItemNumberVisits === '1') {    // клик по любой кнопки Buy в секции фаворит
                backgroundModal.style.display = 'flex';
                modalByCard.style.display = 'block';    // открываем фон модалки логин
                loginMain.style.display = 'none';      // открываем модалку логин
                startMenu.style.display = 'none';      // закрываем меню профиля
            };
            if (localStorage.getItem('if-library:Library Card') === 'Buy') {
                backgroundModal.style.display = 'none';                      // то закрываем модалку Покупки абонемента
                modalByCard.style.display = 'none';
                loginMain.style.display = 'none';
                elem.innerHTML = 'Own';
                elem.classList.add('favorites_btm_own');
                elem.style.pointerEvents = 'none';
                lsButtonsBuy.push(arr.indexOf(elem));
                localStorage.setItem('if-library:BooksBuy', JSON.stringify(lsButtonsBuy))// [1,2]
                numberBooksMyProfile.innerHTML = lsButtonsBuy.length;
                numberBooksLibraryCard.innerHTML = lsButtonsBuy.length;
                addTitleBuyBooks()  
            }; 
        });
    });
});     

// Modal Login //
    
const btnLogin = document.querySelector('.btn_login');                   // кнопка логин в меню профиля до авторизации
const btnLogin2 = document.querySelector('.loginLC');                    // кнопка log In в секциии Либрари Кард
const loginRegister = document.querySelector('.login_register');         // кнопка Логин в модалке регистер
const btnCloseModLogin = document.querySelector('.login_button_close');  // кнопка-крестик в модалке логин
const loginMain = document.querySelector('.modal_login');                // модалка логин
const btnBuyAll = document.querySelectorAll('.favorites_btm_book');        // все кнопки Buy в секции Фаворитс
const titleAutorBooks = document.querySelectorAll('.favorites_name_author');
const titleNameBooks = document.querySelectorAll('.favorites_name_book')

btnLogin.addEventListener('click', () => {      // клик на кнопку в меню профиля
    backgroundModal.style.display = 'flex';     // открываем фон модалки логин
    loginMain.style.display = 'flex';           // открываем модалку логин
    startMenu.style.display = 'none';           // закрываем меню профил
});
btnLogin2.addEventListener('click', () => {     // клик на кнопку в секции Либрари кард
    backgroundModal.style.display = 'flex';     // открываем фон модалки логин
    loginMain.style.display = 'flex';           // открываем модалку логин
    startMenu.style.display = 'none';           // закрываем меню профил
});
loginRegister.addEventListener('click', () => { // клик по ссылке Логин в модалке регистрации
    registerMain.style.display = 'none';        // убираем модалку регистрации
    loginMain.style.display = 'flex';           // открываем модалку логин
});
btnBuyAll.forEach((elem) => {                   
    elem.addEventListener('click', () => {      // клик по любой кнопки Buy в секции фаворит
        backgroundModal.style.display = 'flex'; // открываем фон модалки логин
        loginMain.style.display = 'flex';       // открываем модалку логин
        startMenu.style.display = 'none';       // закрываем меню профиля
     });
});
btnCloseModLogin.addEventListener('click', () => {  // клик на кнопку-крестик в модалке логин
    backgroundModal.style.display = 'none';               // убираем фон модалку логин
    loginMain.style.display = 'none';               // убираем модалку логин
});
backgroundModal.addEventListener('click', () => {     // клик по фону модалки логин
    backgroundModal.style.display = 'none';           // убираем фон  модалки логин
    loginMain.style.display = 'none';           // убираем модалку логин
});

// авторизируем пользователя//

const btnSubmitLogin = document.querySelector('.login_form_button');         
const labelModalLoginEmail = document.querySelector('.modalLog_lbl_email');
const labelModalLoginPassword = document.querySelector('.modalLog_lbl_password');
const inpLoginMail = document.querySelector('.login_email');          
const inpLoginPassword = document.querySelector('.login_password');
const textAvatarModalMyProfile = document.querySelector('.modalMyProfile_avatar__text');
const textNameModalMyProfile = document.querySelector('.modalMyProfile_name__text')
const modalByCard = document.querySelector('.modal_buyCard')
const numberOfSessionsMyProfile = document.querySelector('.modal-MyProfile_numberSessions')
const numberBooksMyProfile = document.querySelector('.modal-MyProfile_numberBooks')


btnSubmitLogin.addEventListener ('click', (e) => {  

    e.stopPropagation();
    e.preventDefault();

    let localItemName = localStorage.getItem('if-library:UserName');         
    let localItemEmail = localStorage.getItem('if-library:email');           
    let localItemPassword = localStorage.getItem('if-library:password');     
    let localItemLastName = localStorage.getItem('if-library:lastName');     
    let localItemNumderCard = localStorage.getItem('if-library:cardNumber');
    let localItemNumberVisits = localStorage.getItem('if-library:numberOfSessions');
    let inpModalLogMailVal = inpLoginMail.value;
    let inpModalLogPasswordVal = inpLoginPassword.value;
    let lsButtonsBuy = JSON.parse(localStorage.getItem('if-library:BooksBuy')) || []
    
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

    // проверка на совпадение с локал сторедж (если нет совпадений)//
    if (inpModalLogMailVal !== localItemEmail) {
        inpLoginMail.style.borderColor = 'red';
        labelModalLoginEmail.setAttribute('title', 'This email is not registered');
    };
    if (inpModalLogPasswordVal !== localItemPassword) {
        inpLoginPassword.style.borderColor = 'red';
        labelModalLoginPassword.setAttribute('title', "The password doesn't match. Try again");   
    };
    
    // проверка на совпадение с локал сторедж (если все совпало)//
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

    // имя и фамилия в модалке My Profile //
    textNameModalMyProfile.innerHTML = localItemName + ' ' + localItemLastName;
    
    // номер карты в меню профиля//
    numCardMainProf.innerHTML = localItemNumderCard;                 
   
    // количество визитов в модалке My Profile //
    numberOfSessionsMyProfile.innerHTML = localStorage.getItem('if-library:numberOfSessions');

     // количество визитов в секции Library Card //
    numberSessionsLibraryCard.innerHTML = localStorage.getItem('if-library:numberOfSessions');

    
    numberBooksMyProfile.innerHTML = lsButtonsBuy.length;

    numberBooksLibraryCard.innerHTML = lsButtonsBuy.length; 

    imgProf.addEventListener('click', () => {       // клик на иконку профиля после регистрации ( открываем меню профиля)
        menuProfRegister.style.display = 'block';   
        header.classList.remove('open'); 
        imgProf2.style.display = 'block';
        imgProf2.style.zIndex = '4';                                    
    });
    imgProf2.addEventListener('click', () => {      // клик по доп.кнопки иконки профиля пocле регистрации (закрываем меню профиля)
        header.classList.remove('open');            
        menuProfRegister.style.display = 'none';
        imgProf2.style.display = 'none';
        imgProf2.style.zIndex = '1';                               
    });
    main.addEventListener('click', () => {        // закрываем меню профиля кликом на майн
        menuProfRegister.style.display = 'none'; 
        imgProf2.style.display = 'none';
        imgProf2.style.zIndex = '1';                                             
    });                                             
    header.addEventListener('click', () => {      // закрываем меню профиля кликом на хедер 
        menuProfRegister.style.display = 'none';
        imgProf2.style.display = 'none';    
        imgProf2.style.zIndex = '1';                  
    });
    


    // кнопки бай в секции Фаворитс //
    btnBuyAll.forEach((elem) => {
        const arr = Array.prototype.slice.call(btnBuyAll);             // массив кнопок Buy
        const arrAutors = Array.prototype.slice.call(titleAutorBooks); // массив Авторов книг
        const arrNames = Array.prototype.slice.call(titleNameBooks);   // массив названия книг
        
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
                booksNameAndAutorBuy.push(arrNames[arr.indexOf(elem)].innerText + ',' + arrAutors[arr.indexOf(elem)].innerText);
                localStorage.setItem('if-library:BooksAndAutor', JSON.stringify(booksNameAndAutorBuy));
                addTitleBuyBooks();
            } 
            else {
                backgroundModal.style.display = 'flex'; 
                modalByCard.style.display = 'block';
                loginMain.style.display = 'none'; 
            }; 
        });
    });

})
// Модальное окно My Profile //
const btnMyProfileMenuProf = document.querySelector('.dropMenu_myProfile_btn');
const btnCloseModalMyProfile = document.querySelector('.modal_profile_btn_close');
const modalMyProfile = document.querySelector('.modal-MyProfile');
const btnCopyCardModalMyProfile = document.querySelector('.modalProfile_iconCopy');
const btnProfileSectionlibraryCard = document.querySelector('.librarycard_request_btm-Profile');

btnMyProfileMenuProf.addEventListener('click', () => {
    modalMyProfile.style.display = 'flex';
    backgroundModal.style.display = 'flex';
    menuProfRegister.style.display = 'none';
    addTitleBuyBooks(); 
});
btnProfileSectionlibraryCard.addEventListener('click', () => {
    modalMyProfile.style.display = 'flex';
    backgroundModal.style.display = 'flex';
});
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
      btnCopyCardModalMyProfile.title = "The card number has been copied";
};

// Модальное окно Buy a Library Card //

const btnCloseModalBuyCard = document.querySelector('.modal_buyCard_button__close');

// закрытие модалки //
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
const labelCVCModalByCard = document.querySelector('.label-CVC')

btnBuyModalBuyCard.addEventListener('click', (k) => {

    k.stopPropagation();
    k.preventDefault();

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
    } else if (inpCVCModalBuyCard.value.length === 3) {
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





 




