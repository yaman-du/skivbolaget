const User = require("../../model/user");

async function calcTotalPrice(userCart) {

    let totalPrice = 0;

    userCart.forEach(item => {
        totalPrice += item.price;
    });

    return totalPrice;

}

module.exports = calcTotalPrice;