const express = require("express");
const app = express.Router();
const { ROUTE } = require("./variables");

app.get(ROUTE.resetSuccess, async (req, res) => {

    res.send(`Your password has now been reset!<br /><br />Please go to the <a href="${ROUTE.login}">Log-in page</a>.`);

});

module.exports = app;