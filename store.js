let store = {
    food: [
        { name: "Ягода", price: 1, healthBoost: 30 },
        { name: "Орех", price: 2, healthBoost: 50 }
    ],
    furniture: [
        { name: "Простая кровать", price: 3 },
        { name: "Красивая кровать", price: 8 }
    ],
    clothing: [
        { name: "Римский воин", price: 9 }
    ]
};

function buyItem(category, itemName) {
    let item = store[category].find(i => i.name === itemName);
    if (item && stars >= item.price) {
        stars -= item.price;
        alert(`Вы купили ${itemName}!`);
        updateStatus();
    } else {
        alert("Недостаточно звёзд!");
    }
}
