const mongoose = require('mongoose');
const Schema = require("mongoose").Schema;

const albumSchema = new Schema({
    name: { type: String, required: true, unique: true },
    artist: { type: String, required: true },
    price: { type: Number, required: true },
    released: { type: String },
    description: { type: String },
    imgUrl: { type: String },
    numListeners: { type: Number }
})

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;