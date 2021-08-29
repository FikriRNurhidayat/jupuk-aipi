const addressService = require("../services/addressService");

exports.getIPAddressHandler = function (req, res) {
  return addressService
    .getIPAddress(req.query.hostname)
    .then((address) => {
      res.status(200).json({
        status: "OK",
        data: {
          ip_addresses: address,
        },
      });
    })
    .catch((err) => {
      res.status(400).json({
        status: "FAIL",
        data: { hostname: err.message },
      });
    });
};
