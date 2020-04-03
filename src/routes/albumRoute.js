const express = require("express");
const app = express.Router();
const { ROUTE, VIEW } = require("./variables");

const Album = require("../../model/album");

app.get(ROUTE.album, async (req, res) => {

    const album = await Album.findOne( { _id: req.params.id });
    console.log(album);

    res.render(VIEW.album, { album });
});

module.exports = app;