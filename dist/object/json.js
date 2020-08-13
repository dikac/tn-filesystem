(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./parse"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const parse_1 = require("./parse");
    /**
     * wrapper for {@link Parser} for json
     *
     * @param file
     * absolute path json file location
     *
     * @param reviver
     * json parse reviver
     */
    function Json(file, reviver) {
        return parse_1.default(file, (data) => JSON.parse(data, reviver));
    }
    exports.default = Json;
});
//# sourceMappingURL=json.js.map