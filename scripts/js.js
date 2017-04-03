const fs = require("fs");
const config = require("../config");

const OUTPUT_DIR = `${config.output}/assets/js`;
require('mkpath').sync(OUTPUT_DIR);

fs.createReadStream('src/js/main.js').pipe(fs.createWriteStream(`${OUTPUT_DIR}/main.js`));
