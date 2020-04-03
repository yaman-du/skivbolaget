const express = require("express");
const app = express.Router();
const { ROUTE, VIEW } = require("./variables");

const Album = require("../../model/album");

app.get(ROUTE.root, async (req, res) => {
    
    // pagination
    const totalAlbums = await Album.countDocuments();
    const albumsByPage = 6;
    const currentPage = Number(req.query.page) || 1;

    // get the albums data, limited to 6 by pages.
    const albums = await Album.find().skip(albumsByPage * (currentPage-1)).limit(albumsByPage);

    // render the page with albums and pagination variables. 
    res.render(VIEW.root, { 
        albums, 
        currentPage,
        hasPreviousPage: currentPage > 1,
        hasNextPage: currentPage * albumsByPage < totalAlbums,
        previousPage: currentPage - 1, 
        nextPage: currentPage + 1,
        lastPage: Math.ceil(totalAlbums / albumsByPage)
    });
    
});

module.exports = app;