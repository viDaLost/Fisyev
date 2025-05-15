let health = 100;
let energy = 100;
let stars = 10;
let homeworkCompleted = false;

function updateStats() {
    document.getElementById("health").textContent = health + '%';
    document.getElementById("energy").textContent = energy + '%';
    document.getElementById("stars").textContent = stars;
}

function openHomework() {
    document.querySelector(".main-screen").classList.add("hidden");
    document.getElementById("homework-section").classList.remove("hidden");
}

function completeHomework() {
    if (!homeworkCompleted) {
        stars += 3;
        homeworkCompleted = true;
        alert("Вы заработали 3 звезды за выполнение задания!");
        updateStats();
    } else {
        alert("Задание уже выполнено!");
    }
}

function setReminder() {
    alert("Напоминание установлено!");
}

function openStore() {
    document.querySelector(".main-screen").classList.add("hidden");
    document.getElementById("store-section").classList.remove("hidden");
}

function buyFood(item, cost) {
    if (stars >= cost) {
        stars -= cost;
        alert("Вы купили " + (item === 'berry' ? 'ягоду' : 'орех'));
        updateStats();
    } else {
        alert("Недостаточно звезд!");
    }
}

function rickySleep() {
    energy = 100;
    alert("Рикки выспался!");
    updateStats();
}

function startGame() {
    if (health > 0 && energy > 0) {
        alert("Началась игра!");
        health -= 10;
        energy -= 10;
        updateStats();
    } else {
        alert("Рикки устал или голоден!");
    }
}

function goBack() {
    document.querySelectorAll(".hidden").forEach(el => el.classList.add("hidden"));
    document.querySelector(".main-screen").classList.remove("hidden");
    updateStats();
}
