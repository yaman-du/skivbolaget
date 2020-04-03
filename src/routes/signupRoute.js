const express = require("express");
const app = express.Router();
const { ROUTE, VIEW } = require("./variables");
const config = require("../../config/config")

// authentification modules
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const verifyToken = require("../middlewares/verifyToken");

const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");

// Nodemailer
const transport = nodemailer.createTransport(sendGridTransport({
    auth: {
        api_key: config.mail
    }
})
);

// User schema to database
const User = require("../../model/user");

app.get(ROUTE.signup, verifyToken, (req, res) => {

    if (!req.validCookie || req.validCookie.user.status === 'guest') return res.render(VIEW.signup, { foundUser: false });

    if (req.validCookie.user.status === "user") return res.redirect(ROUTE.userProfile);

    if (req.validCookie.user.status == "admin") return res.redirect(ROUTE.admin);

});
 
app.post(ROUTE.signup, verifyToken, async (req, res) => {
    
    if (!req.validCookie) {
       
        // generate salt and hash the password input
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        // Does user already exist in DB?
        const foundUser = await User.exists({ username: req.body.username })
        if (foundUser) { 
            res.render(VIEW.signup, { foundUser: true });
        }

        // Can the new user become an admin?
        let status;
        const adminUsers = ["julia", "balthazar", "leon", "yamandu", "oskar"];
        if (adminUsers.includes(req.body.username)) {
            status = "admin";
        }

        // Create an user or admin user in the DB
        
        const user = await new User({
            email: req.body.email,
            username: req.body.username,
            password: hashPassword,
            status: status // status is either undefined or 'admin'
        }).save();

        console.log("USER (ADMIN OR USER) ->", user);
        return res.redirect(VIEW.login);

    } else {

        // when it's a guest (visitor who added item(s) to its cart, status 'guest')

        // Create an user //

        // generate salt and hash the password input
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        // Does user already exist in DB?
        const foundUser = await User.exists({ username: req.body.username })
        if (foundUser) { 
            res.render(VIEW.signup, { foundUser: true });
        }

        // take in data from cart in cookie
    
        const user = await new User({
            email: req.body.email,
            username: req.body.username,
            password: hashPassword 
        }).save();
        
        const cart = req.validCookie.user.cart;

        cart.forEach( async (item) => {
            await user.addToCart(item);
        })

        transport.sendMail({
            to: user.email,
            from: "no-reply@skivbolaget.com",
            subject: "Login succeeded",
            html: "<h1>It worked! Your email: " + user.email + "</h1>"
        })
        
        return res.redirect(ROUTE.login);
    }

});

module.exports = app;