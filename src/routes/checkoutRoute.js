const express = require("express");
const app = express.Router();
const { ROUTE, VIEW } = require("./variables");
const User = require("../../model/user");
const verifyToken = require("../middlewares/verifyToken");
const checkUser = require("../middlewares/checkUser");
const calcTotalPrice = require("../functions/calcTotalPrice");

app.post(ROUTE.checkout, verifyToken, checkUser, async (req, res) => {

const user = await User.findById({ _id: req.validCookie.user._id });

const totalPrice = await calcTotalPrice(user.cart);

res.render(VIEW.checkout, { user, totalPrice });

});

module.exports = app;