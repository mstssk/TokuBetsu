const config = require("./config");
const rimraf = require("rimraf");
const glob = require('glob');
glob(`${config.output}/**/*`,
    { ignore: `${config.output}/images/**` },
    (err, matches) => {
        logError(err);
        matches.forEach(p => rimraf(p, e => logError(e)));
    });

function logError(err) {
    if (err) {
        console.error(err);
    }
}
