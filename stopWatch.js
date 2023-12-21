let timer = document.querySelector('.timer');
let startTime;
let elapsedTime = 0;
let interval;
let isStart = false;

function start() {
    if (!isStart) {
        isStart = true;
        startTime = Date.now() - elapsedTime;
        interval = setInterval(updateTime, 10);
    }
}

function updateTime() {
    elapsedTime = Date.now() - startTime;
    timerUpdate();
}

function timerUpdate() {
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
    let hours = Math.floor((elapsedTime / 1000 / 60 / 60) % 24);


    timer.textContent = `
    ${hours < 10 ? '0' + hours : hours} : 
    ${minutes < 10 ? '0' + minutes : minutes} : 
    ${seconds < 10 ? '0' + seconds : seconds} : 
    ${milliseconds < 10 ? '0' + milliseconds : milliseconds}`;
}

function stop() {
    if (isStart) {
        isStart = false;
        clearInterval(interval);
    }
}

function reset() {
    stop();
    elapsedTime = 0;
    timerUpdate();
}