const express = require("express");
const app = express.Router();
const { ROUTE, VIEW } = require("./variables");

const User = require("../../model/user");

// middlewares
const verifyToken = require("../middlewares/verifyToken");
const checkUser = require("../middlewares/checkUser");

app.get(ROUTE.userProfile, verifyToken, checkUser, async (req, res) => {

    const user = await User.findById({ _id: req.validCookie.user._id });

    res.render(VIEW.userProfile, { user });
});

module.exports = app;