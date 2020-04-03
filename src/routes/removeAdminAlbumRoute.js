const express = require("express");
const app = express.Router();
const { ROUTE, VIEW } = require("./variables");
const config = require("../../config/config");

const User = require("../../model/user");
const Album = require("../../model/album");

const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewares/verifyToken");
const checkAdmin = require("../middlewares/checkAdmin");

app.get(ROUTE.removeAdminAlbum, verifyToken, checkAdmin, async (req, res) => {

        const user = await User.findById({ _id: req.validCookie.user._id });

        await user.removeFromAdminAlbums(req.params.id);
        await Album.findByIdAndRemove({ _id: req.params.itemid });

        res.redirect(ROUTE.admin);

});

module.exports = app;