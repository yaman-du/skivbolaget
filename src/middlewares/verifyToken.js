const jwt = require("jsonwebtoken");
const config = require("../../config/config")
const { ROUTE, VIEW } = require("../routes/variables");

module.exports = (req, res, next) => {

    const token = req.cookies.jsonwebtoken;

    // check whether the user has cookies
    if (token) {

        // jwt verifying method to check whether the cookie is valid or not
        const validCookie = jwt.verify(token, config.secretKey);        
        
        req.validCookie = validCookie;

        next(); // allow to continue to the next route/function
    } else {
        next();
    }

}