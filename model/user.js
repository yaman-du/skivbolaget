const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true, minlength: 4, maxlength: 24, trim: true },
    password: { type: String, required: true },
    status: { type: String, enum: ["user", "admin"], default: "user" },
    cart: [{
        itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Album' },
        name: { type: mongoose.Schema.Types.String, ref: 'Album' },
        artist: { type: mongoose.Schema.Types.String, ref: 'Album' },
        price: { type: mongoose.Schema.Types.Number, ref: 'Album' },
        imgUrl: { type: mongoose.Schema.Types.String, ref: 'Album' }        
    }],
    order: [],// not ready yet
    adminAlbums: [{
        itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Album' },
        name: { type: mongoose.Schema.Types.String, ref: 'Album' },
        artist: { type: mongoose.Schema.Types.String, ref: 'Album' }
    }],
    resetToken: { type: String },
    expirationToken: Date
})

userSchema.methods.addToCart = function (item) {
    this.cart.push({ 
        itemId: item._id,
        name: item.name,
        artist: item.artist,
        price: item.price,
        imgUrl: item.imgUrl
    });
    return this.save();
}

userSchema.methods.removeFromCart = function (itemId) {
    this.cart.id({ _id: itemId }).remove();
    return this.save();
}

// for admin user to add album to their "adminAlbums" property
userSchema.methods.addAdminAlbums = function (item) {
    this.adminAlbums.push({ 
        itemId: item._id,
        name: item.name,
        artist: item.artist
    });
    return this.save();
}

// for admin user to remove an album from their "adminAlbums" property
userSchema.methods.removeFromAdminAlbums = function (itemId) {
    this.adminAlbums.id({ _id: itemId }).remove();
    return this.save();
}

const User = mongoose.model("User", userSchema);

module.exports = User;