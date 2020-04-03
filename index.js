const mongoose = require('mongoose');
const express = require('express');

const sassMiddleware = require('node-sass-middleware');
const path = require('path')
const app = express();

const dbConfig = require('./config/config');
const port = process.env.PORT || 4000;

// cookie-parser for loginRoute
const cookieParser = require("cookie-parser");

// middlewares
app.use(sassMiddleware({ // tell sassMiddleware where src file and dest directory is
    src: 'sass',
    dest: 'public',
    // debug: true, // för att skriva ut data till konsollen
    outputStyle: 'compressed'
}));
// define a static folder, 'public'
app.use(express.static(path.join(__dirname + '/public')));
// express body-parser
app.use(express.urlencoded({ extended: true }));
// cookie-parser
app.use(cookieParser());
// view engine to use, ejs in this case
app.set('view engine', 'ejs');

// routes variables
const mainRoute = require("./src/routes/mainRoute");
const adminRoute = require("./src/routes/adminRoute");
const albumRoute = require("./src/routes/albumRoute");
const signupRoute = require("./src/routes/signupRoute");
const loginRoute = require("./src/routes/loginRoute");
const addToCartRoute = require("./src/routes/addToCartRoute");
const userProfileRoute = require("./src/routes/userProfileRoute");
const cartRoute = require("./src/routes/cartRoute");
const checkoutRoute = require("./src/routes/checkoutRoute");
const confirmationRoute = require("./src/routes/confirmationRoute");
const logoutRoute = require("./src/routes/logoutRoute");
const removeItemRoute = require("./src/routes/removeItemRoute");
const error403Route = require("./src/routes/error403Route");
const resetRoute = require("./src/routes/resetRoute");
const resetTokenRoute = require("./src/routes/resetTokenRoute");
const resetSuccessRoute = require("./src/routes/resetSuccessRoute");
const removeAdminAlbumRoute = require("./src/routes/removeAdminAlbumRoute");
// routes use
app.use(mainRoute);
app.use(adminRoute);
app.use(albumRoute);
app.use(signupRoute);
app.use(loginRoute);
app.use(addToCartRoute);
app.use(userProfileRoute);
app.use(cartRoute);
app.use(checkoutRoute);
app.use(confirmationRoute);
app.use(logoutRoute);
app.use(removeItemRoute);
app.use(error403Route);
app.use(resetRoute);
app.use(resetTokenRoute);
app.use(resetSuccessRoute);
app.use(removeAdminAlbumRoute);

// Start servern
const dbOptions = { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false };
mongoose.connect(dbConfig.databaseURL, dbOptions).then(() => {
    app.listen(port, () => console.log(`App listening on port ${port}! http://localhost:4000`))
});