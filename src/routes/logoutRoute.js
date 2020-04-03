const express = require("express");
const app = express.Router();
const { ROUTE, VIEW } = require("./variables");

app.get("/logout", (req, res) => {
    
    // clear the named cookie and then redirect.
    res.clearCookie("jsonwebtoken").redirect("/login");

});

module.exports = app;