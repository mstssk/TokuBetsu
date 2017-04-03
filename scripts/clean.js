const config = require("./config");
const rimraf = require("rimraf");
const glob = require('glob');
glob(`${config.output}/+(assets|index.html)`,
    (err, matches) => {
        // console.log(matches);
        logError(err);
        matches.forEach(p => rimraf(p, e => logError(e)));
    });

function logError(err) {
    if (err) {
        console.error(err);
    }
}
