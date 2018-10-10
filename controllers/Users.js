
const models = require("../models");

const { createSuccessResObject, sendErrorRes, createUnauthorizedResObject} = require('../utils/responseHelper');

module.exports = controller => {

    const userController = controller.user = {};

    userController.getAdressesWithAsync = (req, res) => {
        models.User.getAdressesWithAsync(req.query.address)
            .then(results => {
                let htmlResponseObj = "<html> <head></head> <body> <h1> Following are the titles of given websites: </h1> <ul>";
                for(let obj in results) {
                    htmlResponseObj = htmlResponseObj + "<li>" + results[obj] + "</li>";
                }
                htmlResponseObj = htmlResponseObj + "</ul> </body> </html>";
                res.status(200).send(createSuccessResObject(htmlResponseObj, 'Addresses found successfully with Async'));
            }).catch(err => {
                sendErrorRes(res, "Error occured in finding Addresses", 400);
            });
    }

    userController.getAdressesWithPromises = (req, res) => {
        models.User.getAdressesWithPromises(req.query.address)
            .then(results => {
                let htmlResponseObj = "<html> <head></head> <body> <h1> Following are the titles of given websites: </h1> <ul>";
                for(let obj in results) {
                    htmlResponseObj = htmlResponseObj + "<li>" + results[obj] + "</li>";
                }
                htmlResponseObj = htmlResponseObj + "</ul> </body> </html>";
                res.status(200).send(createSuccessResObject(htmlResponseObj, 'Addresses found successfully with Promises'));
            }).catch(err => {
                sendErrorRes(res, "Error occured in finding Addresses", 400);
            });
    }

    userController.getAdressesWithCallback = (req, res) => {
        models.User.getAdressesWithCallback(req.query.address, results => {
            let htmlResponseObj = "<html> <head></head> <body> <h1> Following are the titles of given websites: </h1> <ul>";
                for(let obj in results) {
                    htmlResponseObj = htmlResponseObj + "<li>" + results[obj] + "</li>";
                }
                htmlResponseObj = htmlResponseObj + "</ul> </body> </html>";
                res.status(200).send(createSuccessResObject(htmlResponseObj, 'Addresses found successfully with Callback'));
            }, () => {
                sendErrorRes(res, "Error occured in finding Addresses", 400);
            });
    }
}
