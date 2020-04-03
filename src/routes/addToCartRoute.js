const express = require("express");
const app = express.Router();
const { ROUTE, VIEW } = require("./variables");
const config = require("../../config/config");

const Album = require("../../model/album");
const User = require("../../model/user");

const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewares/verifyToken");


app.get(ROUTE.addToCart, verifyToken, async (req, res) => {

    // in the case of no cookie (no user logged in)
    if (!req.validCookie) {

        const user = {
            status: "guest",
            cart: [] 
        }
        const albumToAdd = await Album.findById({ _id: req.params.id });
        user.cart.push(albumToAdd);
        jwt.sign({ user }, config.secretKey, (err, token) => {
            if (err) return res.redirect(ROUTE.root);
            if (token) {
                if (!req.cookie) {
                    res.cookie("jsonwebtoken", token, { maxAge: 3600000, httpOnly: true })
                };
                return res.redirect(ROUTE.root);
            }
        });
        return

    } else if (req.validCookie.user.status == "guest") {
        
        // in the case the user is not logged in, but there is a cookie (status 'guest')
        const cart = req.validCookie.user.cart;
        const albumToAdd = await Album.findById({ _id: req.params.id });
        cart.push(albumToAdd);
        const user = {
            status: "guest",
            cart: cart 
        }
        jwt.sign({ user }, config.secretKey, (err, token) => {
            if (err) return res.redirect(ROUTE.root);
            if (token) {
                res.cookie("jsonwebtoken", token, { maxAge: 3600000, httpOnly: true })
                return res.redirect(ROUTE.root);
            }
        });
        return

    } else {    

        // in the case that the user is already logged in, there is a cookie, status 'user'
        const user = await User.findById({ _id: req.validCookie.user._id });
        const albumToAdd = await Album.findById({ _id: req.params.id });

        await user.addToCart(albumToAdd);

        const updatedUser = await User.findById({ _id: req.validCookie.user._id });
        console.log(updatedUser);

        res.redirect(ROUTE.root);

    }

});

module.exports = app;