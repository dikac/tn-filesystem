(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Exists(valid, path) {
        let string = path.toString();
        if (valid) {
            return `path "${string}" is exists`;
        }
        else {
            return `path "${string}" is not exists`;
        }
    }
    exports.default = Exists;
});
//# sourceMappingURL=exists.js.map