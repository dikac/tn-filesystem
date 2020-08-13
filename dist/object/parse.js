(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "fs", "../assert/exists"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const fs_1 = require("fs");
    const exists_1 = require("../assert/exists");
    /**
     * Parse file to object
     *
     * @param file
     * absolute path file location
     *
     * @param parser
     * parser to convert string to object
     */
    function Parser(file, parser) {
        exists_1.default(file);
        let buffer = fs_1.readFileSync(file);
        return parser(buffer.toString());
    }
    exports.default = Parser;
});
//# sourceMappingURL=parse.js.map