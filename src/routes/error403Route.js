const express = require("express");
const app = express.Router();
const { ROUTE, VIEW } = require("./variables");

app.get(ROUTE.error403, (req, res) => {

res.render(VIEW.error403);

});

module.exports = app;