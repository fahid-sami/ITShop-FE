
const request = require('request');
const async = require('async');

module.exports = connection => {

    return {

        getAdressesWithAsync: addresses => {
            let foundAddresses = [];
            return new Promise((resolve, reject) => {
                async.eachSeries(addresses, function iteratee(item, cb) {
                    let url = "http://" + item;
                    request(url, function (error, response, body) {
                        if(response && response.statusCode == 200) {
                            let startIndex = body.indexOf("<title>");
                            startIndex = startIndex + 7;
                            let lastIndex = body.indexOf("</title>");
                            let title = body.substring(startIndex, lastIndex);
                            title = item + " - " + title;
                            foundAddresses.push(title);
                            cb(null);
                        }
                        else {
                            let title = item + " - " + "NO RESPONSE";
                            foundAddresses.push(title);
                            cb(null);
                        }
                    });
                }, function done() {
                    resolve(foundAddresses);
                });
            })
        },

        getAdressesWithPromises: addresses => {
            let foundAddresses = [];
            let a = [];
            return new Promise((resolve, reject) => {
                for (let item = 0; item < addresses.length; item++) {
                    a.push(new Promise((resolve, reject) => {
                        let url = "http://" + addresses[item];
                        request(url, function (error, response, body) {
                            if(response && response.statusCode == 200) {
                                let startIndex = body.indexOf("<title>");
                                startIndex = startIndex + 7;
                                let lastIndex = body.indexOf("</title>");
                                let title = body.substring(startIndex, lastIndex);
                                title = addresses[item] + " - " + title;
                                resolve(title);
                            }
                            else {
                                let title = addresses[item] + " - " + "NO RESPONSE";
                                resolve(title);
                            }
                        });
                    }));
                }
                Promise.all(a)
                    .then(foundAddresses => {
                        resolve(foundAddresses);
                    }).catch(err => {
                        reject(err);
                    });
            });
        },

    }    
}