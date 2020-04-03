const Album = require("../../model/album");

async function setPrice(albumListeners) {

    const albums = await Album.find();

    const allListeners = [];

    albums.forEach(album => {
        allListeners.push(album.numListeners);
    });

    console.log("allListeners ->", allListeners);

    const maxListeners = Math.max(...allListeners);
    const minListeners = Math.min(...allListeners);

    const albumPrice = Math.round((albumListeners * (300 - 200) / (maxListeners - minListeners)) + 200);

    return albumPrice;

}

module.exports = setPrice;