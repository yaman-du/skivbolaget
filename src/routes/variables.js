// routes variables
const ROUTE = {
    root: '/',
    admin: '/admin',
    album: '/album/:id',
    signup: '/signup',
    login: '/login',
    addToCart: '/addtocart/:id',
    userProfile: '/userprofile',
    cart: '/cart',
    checkout: '/checkout',
    confirmation: '/confirmation',
    logout: '/logout',
    error403: '/error403',
    removeItem: '/removeitem/:id',
    reset: '/reset',
    resetToken: '/reset/:token',
    resetSuccess: '/resetsuccess',
    removeAdminAlbum: '/removeadminalbum/:id/:itemid',
};

// view variables
const VIEW = {
    root: 'main',
    admin: 'admin',
    album: 'album',
    signup: 'signup',
    login: 'login',
    userProfile: 'user-profile',
    cart: 'cart',
    checkout: 'checkout',
    confirmation: 'confirmation',
    logout: 'logout',
    error403: 'error-403',
    reset: 'reset',
    resetToken: 'reset-token'
};

module.exports = { ROUTE, VIEW };