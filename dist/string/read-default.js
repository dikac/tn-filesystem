(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "fs"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const fs_1 = require("fs");
    /**
     * read {@param file} content, if not exists value from {@param source} is
     * returned and written to {@param file}
     *
     * @param file
     * @param source
     */
    function ReadDefault(file, source) {
        if (fs_1.existsSync(file)) {
            return fs_1.readFileSync(file);
        }
        const data = source(file);
        fs_1.writeFileSync(file, data);
        return data;
    }
    exports.default = ReadDefault;
});
//# sourceMappingURL=read-default.js.map