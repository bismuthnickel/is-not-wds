const isWds = require("is-wds")

function isNotWds(string) {
    return !isWds(string);
}

module.exports = isNotWds