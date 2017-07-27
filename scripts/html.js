const fs = require("fs");
const yaml = require("js-yaml");
const mustache = require("mustache");
const config = require("./config");

require('mkpath').sync(config.output);

const template = fs.readFileSync("src/index.html", 'utf8');
const data = yaml.safeLoad(fs.readFileSync("src/data.yml", 'utf8'));
data.books.forEach((book, i) => {
    const even = i % 2 === 0;
    book.__swap_right__ = even ? 'swap-right' : '';
    book.abbr_name = book.abbr_name || book.name;
});
const rendered = mustache.render(template, data);
fs.writeFileSync(`${config.output}/index.html`, rendered, { encoding: "utf-8" });
