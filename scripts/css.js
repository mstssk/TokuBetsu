const fs = require('fs');
const sass = require('node-sass');
const config = require("./config");

const OUTPUT_DIR = `${config.output}/assets`;
require('mkpath').sync(OUTPUT_DIR);

const result = sass.renderSync({
    file: "src/styles/style.scss",
    outFile: `./style.css`,
    outputStyle: "compressed",
    sourceMap: true,
    sourceMapContents: true,
});

// console.info(result.stats);
fs.writeFileSync(`${OUTPUT_DIR}/style.css`, result.css, { encoding: "utf-8" });
if (result.map) {
    fs.writeFileSync(`${OUTPUT_DIR}/style.css.map`, result.map, { encoding: "utf-8" });
}
