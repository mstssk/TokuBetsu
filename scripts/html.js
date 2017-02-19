"use strict";

const fs = require("fs");
const yaml = require("yaml");
const mustache = require("mustache");
const config = require("../config");

const template = fs.readFileSync("src/index.html").toString();
const data = yaml.eval(fs.readFileSync("src/data.yml").toString());
const rendered = mustache.render(template, data);
fs.writeFileSync(`${config.output}/index.html`, rendered, { encoding: "utf-8" });
