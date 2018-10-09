
let db = {};
const fs = require("fs");
const Promise = require("bluebird");
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    let cd = file.replace(".js", "");
    db[cd] = Promise.promisifyAll(require("./" + file)());
  });

module.exports = db;