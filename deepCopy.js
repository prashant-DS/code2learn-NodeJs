var pizzas = {
    margherita: {
        toppings: ['tomato sauce', 'mozzarella cheese'],
        prices: {
            small: '5.00',
            medium: '6.00',
            large: '7.00'
        }
    },
    prosciutto: {
        toppings: ['tomato sauce', 'mozzarella cheese', 'ham'],
        prices: {
            small: '6.50',
            medium: '7.50',
            large: '8.50'
        }
    }
};
function deepCopy(obj, result = {}) {
    for (let i in obj) {
        if (typeof obj[i] === 'object') {
            result[i] = Array.isArray(obj[i]) ? [] : {};
            deepCopy(obj[i], result[i]);
        } else {
            result[i] = obj[i];
        }
    }
    return result;
}

console.log(deepCopy(pizzas));