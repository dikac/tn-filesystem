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
    function Json(file, reviver) {
        exists_1.default(file);
        let buffer = fs_1.readFileSync(file);
        return JSON.parse(buffer.toString(), reviver);
    }
    exports.default = Json;
});
//# sourceMappingURL=json.js.map