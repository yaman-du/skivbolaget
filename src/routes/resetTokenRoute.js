const express = require("express");
const app = express.Router();
const { ROUTE, VIEW } = require("./variables");

const User = require("../../model/user");

const bcrypt = require("bcryptjs");

app.get(ROUTE.resetToken, async (req, res) => {

    const user = await User.findOne({ resetToken: req.params.token, expirationToken: { $gt: Date.now() } })

    if (!user) return res.redirect(ROUTE.signup);

    res.render(VIEW.resetToken, { user });

});

app.post(ROUTE.resetToken, async (req, res) => {

    const user = await User.findOne({ _id: req.body.userId })

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    
    user.password = hashPassword;
    user.resetToken = undefined;
    user.expirationToken = undefined;

    await user.save();

    res.redirect(ROUTE.resetSuccess);

});

module.exports = app;