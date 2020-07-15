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
    function Config(file, suffix) {
        return config_file_1.default(file, file.toString() + suffix.toString());
    }
    exports.default = Config;
});
//# sourceMappingURL=config-suffix.js.map