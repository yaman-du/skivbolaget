const express = require("express");
const app = express.Router();
const { ROUTE, VIEW } = require("./variables");

const User = require("../../model/user");
const Album = require("../../model/album");
const Order = require("../../model/order");

const verifyToken = require("../middlewares/verifyToken");
const checkUser = require("../middlewares/checkUser");
const calcTotalPrice = require("../functions/calcTotalPrice");

// app.get(ROUTE.confirmation, verifyToken, checkUser, async (req, res) => {

// const order = await Order.findById({ })

// // where are coming the data from here?
// const user = await User.findById({})

// // pull the order number created in the database for this specific user and send it to the ejs

// res.render(VIEW.confirmation, { user });

// });

app.post(ROUTE.confirmation, verifyToken, checkUser, async (req, res) => {
    
    console.log("post on confirmation route");
    const user = await User.findById({ _id: req.validCookie.user._id });
    console.log(user._id);
    console.log(user.username);

    // create an order number
    const numberOfOrder = await Order.countDocuments();
    console.log(numberOfOrder);
    const orderNumber = 10000 + numberOfOrder + 1;

    const totalPrice = await calcTotalPrice(user.cart);

    const newOrder = await new Order({
        orderNumber: orderNumber,
        userId: user._id,
        username: user.username,
        email: user.email,
        invoiceInfo: {
            fullName: req.body.fullname,
            email: req.body.email,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip
        },
        totalPrice: totalPrice
    }).save();

    const order = await Order.findById({ _id: newOrder._id });

    const cart = user.cart;

    cart.forEach(item => {
        order.addItemFromCartToOrder(item);
    });

    res.render(VIEW.confirmation, { order });
    
});

module.exports = app;