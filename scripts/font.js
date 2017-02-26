"use strict";

const fs = require('fs');
const Fontmin = require('fontmin');
const config = require("../config");

let text = fs.readFileSync("src/index.html").toString();
text += fs.readFileSync("src/data.yml").toString();

const fontmin = new Fontmin()
    .src('src/assets/fonts/*.ttf')
    .use(Fontmin.glyph({ text }))
    .dest(`${config.output}/fonts`);

fontmin.run(function (err, files) {
    if (err) {
        throw err;
    }
});
