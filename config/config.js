
require('dotenv').config();

const config = {
    databaseURL: process.env.DATABASE,
    secretKey: '1C5CHFA',
    sendgridkey: process.env.MAIL
};


module.exports = config;
