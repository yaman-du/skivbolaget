const express = require("express");
const app = express.Router();
const { ROUTE, VIEW } = require("./variables");
const config = require("../../config/config");

// User schema to database
const User = require("../../model/user");

// authentification modules
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewares/verifyToken");

app.get(ROUTE.login, verifyToken, (req, res) => {

    if (!req.validCookie || req.validCookie.user.status === "guest") return res.render(VIEW.login, { foundUser: true, invalidUser: false });

    if (req.validCookie.user.status === "user") return res.redirect(ROUTE.userProfile);

    if (req.validCookie.user.status == "admin") return res.redirect(ROUTE.admin);

});

app.post(ROUTE.login, async (req, res) => {

    const user = await User.findOne({ username: req.body.username });
    console.log("USER IS ->", user);

    if (!user) return res.render(VIEW.login, { foundUser: false, invalidUser: false });

    // compare with database info
    const validUser = await bcrypt.compare(req.body.password, user.password); // true?

    if (!validUser) return res.render(VIEW.login, { foundUser: true, invalidUser: true });

    jwt.sign({ user }, config.secretKey, (err, token) => { // the string secretKey must come from the config file. 

        if (err) return res.redirect("/login");

        if (token) {

            if (!req.cookie) {
                res.cookie("jsonwebtoken", token, { maxAge: 3600000, httpOnly: true })
            };

            if (user.status == "admin") {
                res.redirect(ROUTE.admin);
            } else {
                res.redirect(ROUTE.userProfile);
            }

        }

    });

});

module.exports = app;