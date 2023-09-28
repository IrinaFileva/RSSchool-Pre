const urlImgRandom = 'https://api.unsplash.com/photos/random?client_id=_ngSKbsyuDa8RbOaPykLneV6xz1xq7BW9E4NNpuvizU&count=30';
const urlImgSearch = 'https://api.unsplash.com/search/photos?client_id=_ngSKbsyuDa8RbOaPykLneV6xz1xq7BW9E4NNpuvizU&orientation=landscape&extras=url_s&per_page=30&page=3&tag_mode=all&query=';
const body = document.querySelector('.body');
const containerImgs = document.querySelector('.main__wrapper-gallery');
const inputField = document.querySelector('.input-field');
const backgroundImg = document.querySelector('.background-img');
const buttonContainer = document.querySelector('.button');
const buttonSearch = document.querySelector('.button_search');
const buttonClean = document.querySelector('.button_clean');
const buttonIconCat = document.querySelector('.header__svg-cat');
const buttonIconDog = document.querySelector('.header__svg-dog');
const buttonIconRabbit = document.querySelector('.header__svg-rabbit');

function puttingImagesOnPage(arr){
    arr.forEach((item)=>{
        const img = document.createElement('img');
        img.className = 'wrapper-gallery__img';
        img.src = item.urls.regular;
        containerImgs.append(img);
        img.addEventListener('click', () => {
            img.classList.toggle('big-size');
            body.classList.toggle('overflow');
            backgroundImg.classList.toggle('active');
            inputField.classList.toggle('padding_input');
            buttonContainer.classList.toggle('padding_button');
        });
    });
};

async function loadImagesSearch(url) {
    const resp = await fetch(url);
    let imgJson = await resp.json();
    if (inputField.value !== ''){
        containerImgs.innerHTML = '';
        puttingImagesOnPage(imgJson.results);  
    };
};

async function loadImagesRandom(url) {
    const resp = await fetch(url);
    let imgJson = await resp.json();
    puttingImagesOnPage(imgJson); 
};

async function loadImagesAnimals(url) {
    const resp = await fetch(url);
    let imgAnimals = await resp.json();
    puttingImagesOnPage(imgAnimals.results);
};

loadImagesRandom(urlImgRandom);

inputField.addEventListener('keyup', (event) =>{
    if (event.keyCode === 13){
        event.preventDefault();
        buttonContainer.click();
    };
});

buttonContainer.addEventListener('click', () => {
    loadImagesSearch(urlImgSearch + inputField.value);
    if (inputField.value !== '' ){
        buttonSearch.classList.toggle('active');
        buttonClean.classList.toggle('active');
    };
    if(buttonSearch.classList.contains('active')){
        inputField.value = '';
    };
});

buttonIconCat.addEventListener('click', () => {
    containerImgs.innerHTML = '';
    loadImagesAnimals(urlImgSearch + 'cat');
});
buttonIconDog.addEventListener('click', () => {
    containerImgs.innerHTML = '';
    loadImagesAnimals(urlImgSearch + 'dog');
});
buttonIconRabbit.addEventListener('click', () => {
    containerImgs.innerHTML = '';
    loadImagesAnimals(urlImgSearch + 'rabbit');
});