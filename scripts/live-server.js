const liveServer = require("live-server");
const config = require("./config");
const packageJson = require("../package.json");

const mountPath = `/${packageJson.name}/`;
const output = `${config.output}/`;
liveServer.start({
    wait: 3000,
    mount: [[mountPath, output]],
    open: [mountPath],
    root: '__dummy__',
});
