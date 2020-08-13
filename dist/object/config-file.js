(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "fs", "./parse"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const fs_1 = require("fs");
    const parse_1 = require("./parse");
    /**
     * load and parse config file, if {@param file} is not exists {@param example} will be used
     * for sources and copied to {@param file}
     *
     * @param file
     * absolute path of config file
     *
     * @param example
     * absolute path of config example file
     *
     * @param parser
     * parser to convert string to object
     */
    function ConfigFile(file, example, parser) {
        if (fs_1.existsSync(file)) {
            return parse_1.default(file, parser);
        }
        let object = parse_1.default(example, parser);
        fs_1.copyFileSync(example, file);
        return object;
    }
    exports.default = ConfigFile;
});
//# sourceMappingURL=config-file.js.map