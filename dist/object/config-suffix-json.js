(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./json", "./config-suffix"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const json_1 = require("./json");
    const config_suffix_1 = require("./config-suffix");
    /**
     * Wrapper for {@link ConfigFile} for json
     *
     * @param file
     * absolute path of json config file
     *
     * @param suffix
     * example suffix to be appended to {@param file}
     *
     * @param reviver
     * json parse reviver
     */
    function ConfigSuffixJson(file, suffix, reviver) {
        return config_suffix_1.default(file, suffix, (data) => json_1.default(data, reviver));
    }
    exports.default = ConfigSuffixJson;
});
//# sourceMappingURL=config-suffix-json.js.map