const fs = require('fs-extra');

const serverjsPath = "./build/server.js";

if (fs.existsSync(serverjsPath)) {
    fs.unlinkSync(serverjsPath);
}

fs.copySync("./serverjs/server.js", serverjsPath);