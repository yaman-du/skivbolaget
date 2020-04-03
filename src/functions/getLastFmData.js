const fetch = require('node-fetch');

async function getLastFmData (artist, album) {


    const artistDecoded = decodeURI(artist);
    const albumDecoded = decodeURI(album);    

    const url = "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=a9bd98edbf62437e2542a87294e156da&artist=" +
        artistDecoded +
        "&album=" +
        albumDecoded +
        "&format=json";

    // console.log(url);

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    return await fetch(url, requestOptions)
        .then(res => res.json())
        .catch(error => error);
}

module.exports = getLastFmData;


