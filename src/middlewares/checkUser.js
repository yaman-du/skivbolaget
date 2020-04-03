const jwt = require("jsonwebtoken");
const config = require("../../config/config")
const { ROUTE, VIEW } = require("../routes/variables");

module.exports = (req, res, next) => {

    if (!req.validCookie) return res.redirect(ROUTE.error403);
    
    if (req.validCookie.user.status == "user") {
        next();
        return
    } else {
        return res.redirect(ROUTE.error403);
    }
    
}