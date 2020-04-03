const express = require("express");
const app = express.Router();
const { ROUTE, VIEW } = require("./variables");
const config = require("../../config/config");

const User = require("../../model/user");

const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewares/verifyToken");
const checkUser = require("../middlewares/checkUser");

app.get(ROUTE.removeItem, verifyToken, checkUser, async (req, res) => {
        
        const user = await User.findById({ _id: req.validCookie.user._id });

        await user.removeFromCart(req.params.id);

        // user.cart.id({ _id: req.params.id }).remove();
        // await user.save();

        res.redirect(ROUTE.cart);

});

module.exports = app;