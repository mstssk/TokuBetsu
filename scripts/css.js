"use strict";

const fs = require('fs');
const sass = require('node-sass');
const config = require("../config");

const result = sass.renderSync({
    file: "src/styles/style.scss",
    outFile: `./style.css`,
    outputStyle: "compressed",
    sourceMap: true,
    sourceMapContents: true,
});

// console.info(result.stats);
fs.writeFileSync(`${config.output}/style.css`, result.css, { encoding: "utf-8" });
if (result.map) {
    fs.writeFileSync(`${config.output}/style.css.map`, result.map, { encoding: "utf-8" });
}
