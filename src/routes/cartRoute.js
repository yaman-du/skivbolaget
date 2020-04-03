const express = require("express");
const app = express.Router();
const { ROUTE, VIEW } = require("./variables");

const User = require("../../model/user");

const verifyToken = require("../middlewares/verifyToken");
const calcTotalPrice = require("../functions/calcTotalPrice");

app.get(ROUTE.cart, verifyToken, async (req, res) => {

    if (!req.validCookie) {
        const user = { status: 'visitor' };
        return res.render(VIEW.cart, { emptyCart: true, user })
    }
    
    if (req.validCookie.user.status === 'guest') {
        const user = req.validCookie.user;
        return res.render(VIEW.cart, { emptyCart: false, user })
    }
    
    const user = await User.findById({ _id: req.validCookie.user._id });

    const totalPrice = await calcTotalPrice(user.cart);

    res.render(VIEW.cart, { emptyCart: false, user, totalPrice });
});

module.exports = app;