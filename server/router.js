const addressController = require("./controllers/addressController");

exports.applyRouter = function(router) {
    router.get('/ip-addresses', addressController.getIPAddressHandler)

    return router;
}