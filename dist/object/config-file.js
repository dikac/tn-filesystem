(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "fs", "./json"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const fs_1 = require("fs");
    const json_1 = require("./json");
    function ConfigFile(file, example) {
        if (fs_1.existsSync(file)) {
            return json_1.default(file);
        }
        let object = json_1.default(example);
        fs_1.copyFileSync(example, file);
        return object;
    }
    exports.default = ConfigFile;
});
//# sourceMappingURL=config-file.js.map