(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./json", "./config-file"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const json_1 = require("./json");
    const config_file_1 = require("./config-file");
    /**
     * Wrapper for {@link ConfigFile} for json
     *
     * @param file
     * absolute path of json config file
     *
     * @param example
     * absolute path of config example file
     *
     * @param reviver
     * json parse reviver
     */
    function ConfigFileJson(file, example, reviver) {
        return config_file_1.default(file, example, (data) => json_1.default(data, reviver));
    }
    exports.default = ConfigFileJson;
});
//# sourceMappingURL=config-file-json.js.map