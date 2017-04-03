const fs = require('fs');
const Fontmin = require('fontmin');
const config = require("../config");

const OUTPUT_DIR = `${config.output}/assets/fonts`;
require('mkpath').sync(OUTPUT_DIR);

const text = fs.readFileSync(`${config.output}/index.html`, 'utf8');
const fontmin = new Fontmin()
    .src('src/fonts/*.ttf')
    .use(Fontmin.glyph({ text }))
    .use(Fontmin.ttf2eot())
    .use(Fontmin.ttf2svg())
    .use(Fontmin.ttf2woff())
    .dest(OUTPUT_DIR);

fontmin.run(function (err, files) {
    if (err) {
        throw err;
    }
});
