(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/exists"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const exists_1 = require("../../boolean/string/exists");
    function Exists(path) {
        return new Error(exists_1.default(false, path));
    }
    exports.default = Exists;
});
//# sourceMappingURL=exists.js.map