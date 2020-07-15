(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./config-file"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const config_file_1 = require("./config-file");
    function ConfigDirectory(directory, file, example) {
        return config_file_1.default(directory.toString() + file.toString(), directory.toString() + example.toString());
    }
    exports.default = ConfigDirectory;
});
//# sourceMappingURL=config-directory.js.map