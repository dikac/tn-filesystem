(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-function/assert/callback", "./throwable/exists", "fs"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const callback_1 = require("@dikac/t-function/assert/callback");
    const exists_1 = require("./throwable/exists");
    const fs_1 = require("fs");
    function Exists(value, error = exists_1.default) {
        callback_1.default(value, fs_1.existsSync, error);
    }
    exports.default = Exists;
});
//# sourceMappingURL=exists.js.map