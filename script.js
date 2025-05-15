let energy = 100;
let health = 100;
let stars = 10;

function feedRicky() {
    if (stars >= 1) {
        health += 30;
        stars -= 1;
        updateStatus();
    } else {
        alert("У вас недостаточно звёзд!");
    }
}

function putToSleep() {
    energy = 100;
    alert("Рикки уснул и восстановил энергию!");
    updateStatus();
}

function playGames() {
    if (health > 0) {
        energy -= 10;
        stars += 2;
        updateStatus();
    } else {
        alert("Рикки хочет кушать, покорми его чтобы продолжить!");
    }
}

function updateStatus() {
    document.getElementById("energy").innerText = `${energy}%`;
    document.getElementById("health").innerText = `${health}%`;
    document.getElementById("stars").innerText = `${stars}`;
}
