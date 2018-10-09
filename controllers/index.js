
let libs = {};
const models = require("../models");
let controller = {};
const fs = require("fs");
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return(file.indexOf(".") !== 0) &&(file !== "index.js");
  })
  .forEach(function(file) {
      let cd = file.replace(".js", "");
      libs[cd] = require("./" + file)(controller);
  });

module.exports = controller;