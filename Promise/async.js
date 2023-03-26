function orderPizza(callback) {
    setTimeout(() => {
        const pizza = `pizza`;
        callback(pizza);
    }, 3000);
}

function pizzaReady(pizza) {
    console.log(`Eat the ${pizza}`);
}

orderPizza(pizzaReady);
console.log(`Call james`);