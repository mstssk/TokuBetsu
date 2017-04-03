const fs = require("fs");
const glob = require("glob");
const config = require("./config");

const files = glob.sync('src/+(images|js)/*');
files.forEach(file => {
    const path = file.slice('src/'.length);
    const output = `${config.output}/assets/${path}`;
    const outputDir = output.substr(0, output.lastIndexOf('/'));
    // console.log(file, path, output, outputDir);
    require('mkpath').sync(outputDir);
    fs.createReadStream(file).pipe(fs.createWriteStream(output));
});
