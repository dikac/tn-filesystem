(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./config-file"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const config_file_1 = require("./config-file");
    /**
     * Wrapper for {@link ConfigFile}
     *
     * @param file
     * absolute path of config file
     *
     * @param suffix
     * example suffix to be appended to {@param file}
     *
     * @param parser
     */
    function ConfigSuffix(file, suffix, parser) {
        return config_file_1.default(file, file.toString() + suffix.toString(), parser);
    }
    exports.default = ConfigSuffix;
});
//# sourceMappingURL=config-suffix.js.map