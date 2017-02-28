const fs = require("fs");
const yaml = require("js-yaml");
const mustache = require("mustache");
const config = require("../config");

require('mkpath').sync(config.output);

const template = fs.readFileSync("src/index.html", 'utf8');
const data = yaml.safeLoad(fs.readFileSync("src/data.yml", 'utf8'));
const rendered = mustache.render(template, data);
fs.writeFileSync(`${config.output}/index.html`, rendered, { encoding: "utf-8" });
