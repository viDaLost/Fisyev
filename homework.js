function openHomework() {
    let homeworkContent = prompt("Введите новое задание для игроков:");
    if (homeworkContent) {
        localStorage.setItem("homework", homeworkContent);
        alert("Задание обновлено!");
    }
}

function setReminder() {
    let reminderTime = prompt("Введите время напоминания (например, '15:00')");
    if (reminderTime) {
        alert(`Напоминание установлено на ${reminderTime}.`);
    }
}

function completeHomework() {
    let stars = parseInt(localStorage.getItem("stars")) || 10;
    stars += 3;
    localStorage.setItem("stars", stars);
    alert("Задание выполнено! Вы получили 3 звезды.");
} 
