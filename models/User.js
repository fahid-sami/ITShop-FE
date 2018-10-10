
const request = require('request');
const async = require('async');

const parseData = (rawHtml, response, item) => {
    let title = "";
    if(response && response.statusCode == 200) {
        const startIndex = rawHtml.indexOf("<title>") + 7;
        const lastIndex = rawHtml.indexOf("</title>");
        title = rawHtml.substring(startIndex, lastIndex);
        title = item + " - " + title;
    } else {
        title = item + " - " + "NO RESPONSE";
    }
    return title;
}

module.exports = connection => {

    return {

        getAdressesWithAsync: addresses => {
            let foundAddresses = [];
            return new Promise((resolve, reject) => {
                async.eachSeries(addresses, function iteratee(item, cb) {
                    let url = "http://" + item;
                    request(url, (error, response, body) => {
                        foundAddresses.push(parseData(body, response, item));
                        cb(null);
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
                        request(url, (error, response, body) => {
                            resolve(parseData(body, response, addresses[item]));
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

        getAdressesWithCallback: (addresses, callBack, errorCallBack) => {
            let foundAddresses = [];
            for (let i = 0; i < addresses.length; i++) {
                let url = "http://" + addresses[i];
                request(url, (error, response, body) => {
                    foundAddresses.push(parseData(body, response, addresses[i]));
                    if(foundAddresses.length === addresses.length) {
                        callBack(foundAddresses);
                    }
                });
            }
        },
        
    }    
}