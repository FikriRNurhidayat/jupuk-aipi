const dns = require('dns');

exports.getIPAddress = function(hostname) {
    return new Promise((resolve, reject) => {
        dns.resolve4(hostname, function(err, address) {
            if (!!err) return reject(err);

            resolve(address);
        });
    });
}