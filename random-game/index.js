const scoreModalGameOver = document.querySelector('.gameOver__total-score');
const blockGameOver = document.querySelector('.gameOver__wrapper');
const audioGameOver = document.querySelector('.audio-game-over');
const audioApple = document.querySelector('.audio-apple');
const buttonStart = document.querySelector('.button-start');
const buttonPause = document.querySelector('.button-pause');
const buttonMute = document.querySelector('.button-mute');
const buttonMuteCross = document.querySelector('.button-mute-cross')
const titleResults = document.querySelector('.title-result');
const sumScore = document.querySelector('.sum-score');
const modalGameOver = document.querySelector('.gameOver');
const modalPause = document.querySelector('.modal-pause');
const canvas = document.querySelector('.playing-field');
const context = canvas.getContext("2d");
const results = JSON.parse(localStorage.getItem('if-totalScore')) || [];

const maxResult = results.sort((x, y) => {
    if (x < y) return 1;
    if (x === y) return 0; 
    if (x > y) return -1; 
});

for(let i = 0; i < maxResult.length; i++){
    if(maxResult.length > 10){
        maxResult.pop()
    }
    if(maxResult.length <= 10){
        const p = document.createElement('p')
        p.className = 'number_result'
        p.innerText = maxResult[i];
        titleResults.append(p)
    }
};

let score = 0;  
     
let totalScore = [];

let cell = 20;   

let count = 0;   

let speed  = 6;

let snake = {          
    x: 200,            
    y: 200,             
    dx: 20,          
    dy: 0,             
    cells: [],         
    startCells: 4        
};

let appleX = 400;     
let appleY = 400;
let radius = 10;      

function drawApple() {      
    context.beginPath();
    context.arc(appleX + radius, appleY + radius, radius, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
};

function getRandomNum(min, max) {                        
    return Math.floor(Math.random() * (max - min)) + min;    
};

buttonStart.addEventListener('click', function game() {
    buttonStart.classList.remove('active');
    buttonPause.classList.add('active');

    requestAnimationFrame(game);

    if (count++ < speed) {   // скорость змейки
        return;
    }

    count = 0;
     
    context.clearRect(0, 0, canvas.width, canvas.height); // очистка поля после змейки

    snake.x += snake.dx;    // движение змейки
    snake.y += snake.dy;

    if (snake.x < 0) {                      // стены влево и вправо
        snake.x = canvas.width - cell;
    }
    else if (snake.x >= canvas.width) {
        snake.x = 0;
    }
    
    if (snake.y < 0) {                     // стены вверх низ
        snake.y = canvas.height - cell;
    }
    else if (snake.y >= canvas.height) {
        snake.y = 0;
    }
      
    snake.cells.unshift({ x: snake.x, y: snake.y });  // двигаем голову
   
    if (snake.cells.length > snake.startCells) {  // чистим хвост
        snake.cells.pop();
    }
    
    drawApple(); // добавляем яблоко

    sumScore.innerHTML = score; 

    scoreModalGameOver.innerHTML = 'Your score: ' + String(score);

    context.fillStyle = 'rgb(8, 30, 10)';  // цвет змеи

    snake.cells.forEach((part, index) => {
        context.fillRect(part.x, part.y, cell - 1, cell - 1);

        if (part.x ===  appleX  && part.y === appleY ) {
            score += 100;    
            snake.startCells++; 
            speed -= 0.2;
            appleX = getRandomNum(0, 20) * cell;
            appleY = getRandomNum(0, 20) * cell; 
            if(buttonMuteCross.classList.contains('active')){
                audioApple.mute()
            }else{
                audioApple.play();
            }
        }

        for (var i = index + 1; i < snake.cells.length; i++) {
            if (part.x === snake.cells[i].x && part.y === snake.cells[i].y) {
                count = 0;
                speed = 10000000;
                context.clearRect(0, 0, canvas.width, canvas.height);
                snake.x = 200;
                snake.y = 200;
                snake.startCells = 0;
                snake.cells = [];
                snake.dx = 0;
                snake.dy = 0;
                modalGameOver.classList.add('active');
                blockGameOver.classList.add('active');
                maxResult.push(score);
                localStorage.setItem('if-totalScore', JSON.stringify(maxResult));
                if(buttonMuteCross.classList.contains('active')){
                    audioGameOver.mute()
                }else{
                    audioGameOver.play();
                }
            }
        } 
    });

    buttonPause.addEventListener('click', () => {
        speed = speed + 100000;
        modalPause.classList.add('active');
    });
    modalPause.addEventListener('click',() => {
        if (speed > 100000){
            speed = speed - 100000;
            modalPause.classList.remove('active') ;
        }
    });    
});

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 37 && snake.dx === 0) {
        snake.dx = -cell;
        snake.dy = 0;
    }
    else if (event.keyCode === 38 && snake.dy === 0) {
        snake.dy = -cell;
        snake.dx = 0;
    }
    else if (event.keyCode === 39 && snake.dx === 0) {
        snake.dx = cell;
        snake.dy = 0;
    }
    else if (event.keyCode === 40 && snake.dy === 0) {
        snake.dy = cell;
        snake.dx = 0;
    }  
});

buttonMute.addEventListener('click',() => {
    buttonMuteCross.classList.toggle('active');
})