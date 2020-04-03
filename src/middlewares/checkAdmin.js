const jwt = require("jsonwebtoken");
const config = require("../../config/config")
const { ROUTE, VIEW } = require("../routes/variables");

module.exports = (req, res, next) => {

    // console.log("**** CHECK ADMIN START ****")

    if (!req.validCookie) return res.redirect(ROUTE.error403);
    
    if (req.validCookie.user.status == "admin") {
        next();                
        // console.log("**** CHECK ADMIN END ****")
        return
    } else {
        // console.log("**** CHECK ADMIN END: STATUS BUT NOT ADMIN: ACCESS DENIED ****")
        return res.redirect(ROUTE.error403);
    }
    
}