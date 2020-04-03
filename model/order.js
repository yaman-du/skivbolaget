const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const orderSchema = new Schema({
    orderNumber: { type: Number, required: true, unique: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    username: { type: mongoose.Schema.Types.String, ref: 'User' },
    email: { type: mongoose.Schema.Types.String, ref: 'User' },
    invoiceInfo: {
        fullName: { type: String, required: true, minlength: 4, maxlength: 24, trim: true },
        email: { type: String, required: true, minlength: 4, maxlength: 24, trim: true },
        address: { type: String, required: true, minlength: 4, maxlength: 24, trim: true },
        city: { type: String, required: true, minlength: 4, maxlength: 24, trim: true },
        state: { type: String, required: true, minlength: 2, maxlength: 24, trim: true },
        zip: { type: String, required: true, minlength: 4, maxlength: 24, trim: true }
    },
    cart: [{
        itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Album' },
        name: { type: mongoose.Schema.Types.String, ref: 'Album' },
        artist: { type: mongoose.Schema.Types.String, ref: 'Album' },
        price: { type: mongoose.Schema.Types.String, ref: 'Album' }
    }],
    totalPrice: { type: Number, required: true }
});

orderSchema.methods.addItemFromCartToOrder = function (item) {    
    this.cart.push({ 
        itemId: item._id,
        name: item.name,
        artist: item.artist,
        price: item.price
    });
    return this.save();
}

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;