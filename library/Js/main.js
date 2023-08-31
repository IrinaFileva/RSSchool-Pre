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

let inpCardName = document.querySelector('.libcard_inp_name');      // импут Имя в секции Либрари Кард
let inpCardNumber = document.querySelector('.libcard_inp_number');  // импут Номер карты в секции Либрари Кард
let btnLibCard = document.querySelector('.libcard_table_btm');      // кнопка проверки карты в секции Либрари Кард
let iconsBlock = document.querySelector('.librarycard_icons');      // блок из иконок Визиты, Бонусы, Книги
let localItemName = localStorage.getItem('if-library:UserName');        // вызызaем значение имени с локального сервера
let localItemLastName = localStorage.getItem('if-library:lastName');    // вызываем знавение фамилии из локального сервера
let localItemNumberCard = localStorage.getItem('if-library:cardNumber');  // вызываем значение Номера карты из локального хранилища

btnLibCard.removeAttribute('disabled');       // сброс с кнопки проверки карты атрибута disabled 

function hideIcons () {                      // функция включения кнопки проверки карты
    btnLibCard.style.display = 'block';      // показываем кнопку проверки карты
    iconsBlock.style.display = 'none';       // не показываем блок из иконок        
}

function clearInputs () {                    // функция очистки инпутов
    inpCardName.value = '';
    inpCardNumber.value = '';
}

btnLibCard.addEventListener('click', () => {      // клик по кнопке проверки карты   
    
    if (inpCardName.value === localItemName && inpCardNumber.value === localItemNumberCard) { // если значение инпута совпадает co значением в локальном хранилище
        btnLibCard.style.display = 'none';                                                    // убираем кнопку проверки карты 
        iconsBlock.style.display = 'flex';                                                    // показываем блок из иконок    
        setTimeout(() => {                                                                    // задержка вызова функции на 10 секунд
            hideIcons();
            clearInputs();
        }, 10000);
    }                 
});

// Profile Main//

const main = document.querySelector('.main');               // main 
const header = document.querySelector('.header');           // хедер
const btnProfile2 = document.querySelector('.profile_div'); // доп.кпопка для открытия меню профиля
const startMenu = document.querySelector('.dm_noAuth');     // меню профиля до регистрации и авторизации
const btnProfile = document.querySelector('.img1');         // иконка профиля

btnProfile2.addEventListener('click', () => {  // клик на доп.кнопку (т.к клик на хедер закрывает меню профиля)
    startMenu.style.display = 'flex';          // открываем меню профиля
    header.classList.remove('open');           // закрываем бургер меню при открытие меню профиля
    btnProfile2.style.display = 'none';        // скрываем доп.кпопку                      
});
btnProfile.addEventListener('click', () => {   // клик на иконку профиля (после скрытия доп.кнопки)
    startMenu.style.display = 'flex';          // открываем меню профиля
    header.classList.remove('open');           // закрываем бургер меню при открытие меню профиля
    btnProfile2.style.display = 'block';       // активируем доп.кнопку
});
main.addEventListener('click', () => {
    startMenu.style.display = 'none';          // закрываем меню профиля кликом на main
    btnProfile2.style.display = 'block';       // активируем доп.кнопку
});                                           
header.addEventListener('click', () => {
    startMenu.style.display = 'none';          // закрываем меню профиля кликом на хедер
    btnProfile2.style.display = 'block';       // активируем доп.кнопку
});



// Modal Register //

const backgroundModal = document.querySelector('.modal_background');  // фон модалки регистрации
const registerMain = document.querySelector('.modal_register');             // модалка регистрации
const btnRegister = document.querySelector('.btn_reg');                     // кнопка регистер в меню профиля
const btnRegisterLC = document.querySelector('.librarycard_request_btm');   // кнопка sing up в секции либрари кард 
const btnClose = document.querySelector('.register_button_close');          // кнопка-крестик в модалке регистрации
const aRegister = document.querySelector('.login_a');                       // ссылка на модалку регистрации в модалке логин

btnRegister.addEventListener('click', () => {   // клик на кнопку регистр в меню профиля
    backgroundModal.style.display = 'flex';        // открываем фон модалки регистрации
    registerMain.style.display = 'flex';        // открываем модалку регистрации
    startMenu.style.display = 'none';           // закрываем меню профиля 
    btnProfile2.style.display = 'block';        // активируем доп.кнопку для открытия меню профиля
});
btnRegisterLC.addEventListener('click', () => { // клик на кпопку sing up в секции либрари кард
    backgroundModal.style.display = 'flex';        // открываем фон модалки регистрации
    registerMain.style.display = 'flex';        // открываем модалку регистрации
    startMenu.style.display = 'none';           // закрываем меню профиля
});
btnClose.addEventListener('click', () => {      // клик по кнопке-крестику в модалке регистрации
    backgroundModal.style.display = 'none';        // убираем фон модалки регистрации
    registerMain.style.display = 'none';        // убираем модалку
});
backgroundModal.addEventListener('click', () => {  // клик на фон модалки регистрации
    backgroundModal.style.display = 'none';        // убираем фон модалки регистрации
    registerMain.style.display = 'none';           // убираем модалку регистрации
});
aRegister.addEventListener('click', () => {     // клик по ссылке в модалке логин
    backgroundModal.style.display = 'flex';        // открываем фон модалки регистрации
    registerMain.style.display = 'flex';        // открываем модалку регистрации           
    loginMain.style.display = 'none';           // убираем модалку логин
});

// Submit Form //

const buttonSubmitRegister = document.querySelector('.register_form_button'); // кнопка sung up в модалке регистрации
const inputFirstName = document.querySelector('.first_Name');                 // инпут Имя
const inputLastName = document.querySelector('.last_Name');                   // инпут Фамилия
const inputEmail = document.querySelector('.email');                          // инпут Емаил
const inputPassword = document.querySelector('.password');                    // инпут Пароль
const labelModalRegisEmail = document.querySelector('.modalReg_label_email');
const labelModalRegisPassword = document.querySelector('.modalReg_label_password');
const imgProf = document.querySelector('.img_prof');                          // иконка профиля после регистрации
const imgProf2 = document.querySelector('.profile_div2');                      // доп.кнопка иконки профиля после регистрации
const menuProfRegister = document.querySelector('.dm_withAuth');              // меню профиля после регистации
const numCardMainProf = document.querySelector('.text_number_card');          // номер карты в меню профиля после регистрации
const numberCardModalMyProfile = document.querySelector('.modalProfile_cardNumber_linkCard')
const numberSessionsLibraryCard = document.querySelector('.visits_number')

let titleProf = document.querySelector('.prof_title-text');                   // атрибут титле у иконки профиля после регистрации
let ofTextSvg = document.querySelector('.svg_prof_text');                     // текст в иконки профиля после регистрации
let nav = document.querySelector('.nav-links');
let counter = 0                               // панель навигации в хедере 


function checkFillInput(elem, color) {             // функция проверки заполнения инпутов перед отправкой, чтоб не было пустых полей
    if (elem === '') {
        color.style.borderColor = 'red';      
    }
     else if (elem !== '') {
        color.style.borderColor = '#BB945F';       
    }
};

function counterVisits () {
    return counter+= 1;
}

// регистрируем пользователя //

buttonSubmitRegister.addEventListener('click', (g) => {    // клик на кнопку sung up 
    
    g.stopPropagation();
    g.preventDefault();

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
    

    if (passwordVal.length >= 8 && firstNameVal !== '' && lastNameVal !== ''&& valideEmail(EmailVal) ) {  // если все строки в инпуте заполнены 
        counterVisits ()
        backgroundModal.style.display = 'none';     // убираем фон модалки 
        registerMain.style.display = 'none';        // убираем модалку регистрации 
        btnProfile.style.display = 'none';          // скрываем иконку профиля до регистрации
        btnProfile2.style.display = 'none';         // скрываем доп.кпопку до регистрации
        imgProf.style.display = 'block';            // открываем иконку профиля после регистрации
        imgProf.style.zIndex = '3';                 // подымаем иконку 
        nav.style.marginRight = '30px';             // отодвигаем навигацию от иконки
    } 
    
    let firstNameLoc = firstNameVal[0].toUpperCase() + firstNameVal.slice(1);   // значение импута Имя с заглавной буквы
    let lastNameLoc = lastNameVal[0].toUpperCase() + lastNameVal.slice(1);      // значение импута Фамилия с заглавной буквы
    
    localStorage.setItem('if-library:UserName', firstNameLoc);           // отправка значения интупа Имя в хранилище 
    localStorage.setItem('if-library:lastName', lastNameLoc);            // отправка значения инпута Фамилия в хранилище
    localStorage.setItem('if-library:email', EmailVal);                  // отправка значения инпута Емаил в хранилище
    localStorage.setItem('if-library:password', passwordVal);            // отправка значения инпута Пароль в хранилище
    localStorage.setItem('if-library:numberOfSessions', counter);
   
    const letters = 'ABCDEF0123456789';
    let cardNumber = '';
    for (let i = 0; i < 9; i += 1) {
        const randomIdx = Math.floor(Math.random() * letters.length);     // генерация рандомного 9-тизначного числа в 16-тиричной системе
        const randomValue = letters[randomIdx];
        cardNumber += randomValue;
    };

    localStorage.setItem('if-library:cardNumber', cardNumber);             // отправка значения карты в хранилище 
    
    let localItemName = localStorage.getItem('if-library:UserName');        // вызызaем значение имени с локального сервера
    let localItemLastName = localStorage.getItem('if-library:lastName');    // вызываем знавение фамилии из локального сервера
    let localItemNumberCard = localStorage.getItem('if-library:cardNumber');  // вызываем значение Номера карты из локального хранилища

    ofTextSvg.innerHTML = localItemName[0] + localItemLastName[0];   // меняем текст в иконки профиля на заглавные буквы имени и фамилии

    textAvatarModalMyProfile.innerHTML = localItemName[0] + localItemLastName[0];

    textNameModalMyProfile.innerHTML = localItemName + ' ' + localItemLastName;
    
    titleProf.innerHTML = localItemName + ' ' + localItemLastName;   // назначение атрибута титле для иконки профиля из имени и фамилии

    numCardMainProf.innerHTML = localItemNumberCard;                 // отображение Номера карты в меню профиля после регистрации

    numberCardModalMyProfile.innerHTML = localItemNumberCard; 

    numberSessionsLibraryCard.innerHTML = localStorage.getItem('if-library:numberOfSessions')
    
    imgProf.addEventListener('click', () => {       // клик на иконку профиля после регистрации
        menuProfRegister.style.display = 'block';   // убирает меню профиля
        header.classList.remove('open'); 
        imgProf2.style.display = 'block'
        imgProf2.style.zIndex = '4'          // закрываем бургер меню при открытие меню профиля                           
    });
    imgProf2.addEventListener('click', () => {      // клик по доп.кнопки иконки профиля псоле регистрации
        header.classList.remove('open');            // закрываем бургер меню при открытие меню профиля
        menuProfRegister.style.display = 'none';
        imgProf2.style.display = 'none'
        imgProf2.style.zIndex = '1'    // скрываем меню профиля                            
    });
    main.addEventListener('click', () => {
        menuProfRegister.style.display = 'none'; 
        imgProf2.style.display = 'none';
        imgProf2.style.zIndex = '1'                                             
    });                                             
    header.addEventListener('click', () => {
        menuProfRegister.style.display = 'none';
        imgProf2.style.display = 'none';    // закрываем меню профиля кликом на хедер 
        imgProf2.style.zIndex = '1'                  
    });
    
    let inpCardName = document.querySelector('.libcard_inp_name');      // импут Имя в секции Либрари Кард
    let inpCardNumber = document.querySelector('.libcard_inp_number');  // импут Номер карты в секции Либрари Кард
    let btnLibCard = document.querySelector('.libcard_table_btm');      // кнопка проверки карты в секции Либрари Кард
    let iconsBlock = document.querySelector('.librarycard_icons');      // блок из иконок Визиты, Бонусы, Книги

    btnLibCard.removeAttribute('disabled');       // сброс с кнопки проверки карты атрибута disabled 
   
    function hideIcons () {                      // функция включения кнопки проверки карты
        btnLibCard.style.display = 'block';      // показываем кнопку проверки карты
        iconsBlock.style.display = 'none';       // не показываем блок из иконок        
    }

    function clearInputs () {                    // функция очистки инпутов
        inpCardName.value = '';
        inpCardNumber.value = '';
    }

    btnLibCard.addEventListener('click', () => {      // клик по кнопке проверки карты   
        
        if (inpCardName.value === localItemName && inpCardNumber.value === localItemNumberCard) { // если значение инпута совпадает co значением в локальном хранилище
            btnLibCard.style.display = 'none';                                                    // убираем кнопку проверки карты 
            iconsBlock.style.display = 'flex';                                                    // показываем блок из иконок    
            setTimeout(() => {                                                                    // задержка вызова функции на 10 секунд
                hideIcons();
                clearInputs();
            }, 10000);
        }                 
    }); 
});
    
// Modal Login //
    
const btnLogin = document.querySelector('.btn_login');                   // кнопка логин в меню профиля до авторизации
const btnLogin2 = document.querySelector('.loginLC');                    // кнопка log In в секциии Либрари Кард
const loginRegister = document.querySelector('.login_register');         // кнопка Логин в модалке регистер
const btnCloseModLogin = document.querySelector('.login_button_close');  // кнопка-крестик в модалке логин
const loginMain = document.querySelector('.modal_login');                // модалка логин
let btnBuyAll = document.querySelectorAll('.favorites_btm_book');        // все кнопки Buy в секции Фаворитс


btnLogin.addEventListener('click', () => {      // клик на кнопку в меню профиля
    backgroundModal.style.display = 'flex';           // открываем фон модалки логин
    loginMain.style.display = 'flex';           // открываем модалку логин
    startMenu.style.display = 'none';           // закрываем меню профил
});
btnLogin2.addEventListener('click', () => {     // клик на кнопку в секции Либрари кард
    backgroundModal.style.display = 'flex';           // открываем фон модалки логин
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


btnSubmitLogin.addEventListener ('click', (e) => {                    
    e.stopPropagation();
    e.preventDefault();

    let localItemName = localStorage.getItem('if-library:UserName');         
    let localItemEmail = localStorage.getItem('if-library:email');           
    let localItemPassword = localStorage.getItem('if-library:password');     
    let localItemLastName = localStorage.getItem('if-library:lastName');     
    let localItemNumderCard = localStorage.getItem('if-library:cardNumber'); 
    let inpModalLogMailVal = inpLoginMail.value;
    let inpModalLogPasswordVal = inpLoginPassword.value;

    checkFillInput(inpModalLogMailVal, inpLoginMail);               // проверка инпута Емаил на заполнение
    checkFillInput(inpModalLogPasswordVal, inpLoginPassword);       // проверка инпута Пароль на заполнение
     
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
  
    // валидация пароля 
    if (inpModalLogPasswordVal.length < 8) {
        inpLoginPassword.style.borderColor = 'red';   
    }; 
    if (inpModalLogPasswordVal === '') {                                             
        inpLoginPassword.style.borderColor = 'red';
    };
    if (inpModalLogPasswordVal.length >= 8) {
        inpLoginPassword.style.borderColor = '#BB945F';
    };
    
    let i = localStorage.getItem('if-library:numberOfSessions');
    let nextVisit = Number(i) + 1;
     
    if (inpModalLogMailVal === localItemEmail && inpModalLogPasswordVal === localItemPassword) { // проверка совпадения введенного емаил и пароля
        localStorage.setItem('if-library:numberOfSessions', nextVisit)
        backgroundModal.style.display = 'none';                       
        loginMain.style.display = 'none';                       
        btnProfile.style.display = 'none';                      
        btnProfile2.style.display = 'none';                     
        imgProf.style.display = 'block';                        
        imgProf.style.zIndex = '3';                              
        nav.style.marginRight = '30px';                         
    } else if (inpModalLogMailVal !== localItemEmail) {
        inpLoginMail.style.borderColor = 'red';
        labelModalLoginEmail.setAttribute('title', 'This email is not registered');
    } else if (inpModalLogPasswordVal !== localItemPassword) {
        inpLoginPassword.style.borderColor = 'red';
        labelModalLoginPassword.setAttribute('title', "The password doesn't match. Try again");   
    };
    
    ofTextSvg.innerHTML = localItemName[0] + localItemLastName[0];   // меняем текст в иконки профиля на заглавные буквы имени и фамилии

    textAvatarModalMyProfile.innerHTML = localItemName[0] + localItemLastName[0];
    
    titleProf.innerHTML = localItemName + ' ' + localItemLastName;   // назначение атрибута титле для иконки профиля из имени и фамилии

    textNameModalMyProfile.innerHTML = localItemName + ' ' + localItemLastName;

    numCardMainProf.innerHTML = localItemNumderCard;                 // отображение Номера карты в меню профиля после регистрации

    numberOfSessionsMyProfile.innerHTML = localStorage.getItem('if-library:numberOfSessions');

    imgProf.addEventListener('click', () => {       // клик на иконку профиля после регистрации
        menuProfRegister.style.display = 'block';   
        header.classList.remove('open'); 
        imgProf2.style.display = 'block';
        imgProf2.style.zIndex = '4';                                    
    });
    imgProf2.addEventListener('click', () => {      // клик по доп.кнопки иконки профиля пocле регистрации
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

    btnBuyAll.forEach((elem) => {                   
        elem.addEventListener('click', () => {      // клик по любой кнопки Buy в секции фаворит открываем модалку Покупки абонимента
            backgroundModal.style.display = 'flex'; 
            modalByCard.style.display = 'block';
            loginMain.style.display = 'none';               // убираем модалку логин
         });
    });

})

// Модальное окно My Profile //

const btnMyProfileMenuProf = document.querySelector('.dropMenu_myProfile_btn');
const btnCloseModalMyProfile = document.querySelector('.modal_profile_btn_close');
const modalMyProfile = document.querySelector('.modal-MyProfile');
const btnCopyCardModalMyProfile = document.querySelector('.modalProfile_iconCopy')

btnMyProfileMenuProf.addEventListener('click', () => {
    modalMyProfile.style.display = 'flex';
    backgroundModal.style.display = 'flex';
    menuProfRegister.style.display = 'none'; 
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
})
backgroundModal.addEventListener('click', () => {
    modalByCard.style.display = 'none';
    backgroundModal.style.display = 'none';
    loginMain.style.display = 'none';
})

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
    
    if (inpNumberCardModalBuyCard.value > 19) {
        inpNumberCardModalBuyCard.style.borderColor = 'red';
        labelNumberCardModalBuyCard.title = 'Please enter the card number in the format: 0000 0000 0000 0000'
    }
    if (inpNumberCardModalBuyCard.value < 19) {
        inpNumberCardModalBuyCard.style.borderColor = 'red';
        labelNumberCardModalBuyCard.title = 'Please enter the card number in the format: 0000 0000 0000 0000'
    }else if (inpNumberCardModalBuyCard.value === 19) {
        inpNumberCardModalBuyCard.style.borderColor = '#BB945F';
        labelNumberCardModalBuyCard.title = 'Thank you. The field is filled in correctly'
    };
    
    // длина импутов срок действия карты //

    if (inpLeftExpNodeModalBuyCard.value.length > 2 || inpLeftExpNodeModalBuyCard.value.length < 2 ) {
        inpLeftExpNodeModalBuyCard.style.borderColor = 'red';
        labelExpNodeModalByCard.title = 'This field must contain 2 digits';
    };
    if (inpRightExpNodeModalBuyCard.value.length > 2 || inpRightExpNodeModalBuyCard.value.length < 2 ) {
        inpRightExpNodeModalBuyCard.style.borderColor = 'red';
        labelExpNodeModalByCard.title = 'This field must contain 2 digits'; 
    } else if (inpLeftExpNodeModalBuyCard.value.length === 2 && inpRightExpNodeModalBuyCard.value.length === 2) {
        inpLeftExpNodeModalBuyCard.style.borderColor = '#BB945F';
        labelExpNodeModalByCard.title = 'Thank you. The field is filled in correctly';
    };
    
    // длина инпута CVC //
    
    if (inpCVCModalBuyCard.value.length > 3) {
        inpCVCModalBuyCard.style.borderColor = 'red';
        labelCVCModalByCard.title = 'This field must contain 3 digits';
    }; 
    if (inpCVCModalBuyCard.value.length < 3) {
        inpCVCModalBuyCard.style.borderColor = 'red';
        labelCVCModalByCard.title = 'This field must contain 3 digits';
    } else if (inpCVCModalBuyCard.value === 3) {
        inpCVCModalBuyCard.style.borderColor = '#BB945F';
        labelCVCModalByCard.title = 'Thank you. The field is filled in correctly';
    };

})



    

 




