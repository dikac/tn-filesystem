(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./config-directory"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const config_directory_1 = require("./config-directory");
    /**
     * Wrapper for {@link ConfigDirectory} for json
     *
     * @param directory
     * base absolute directory
     *
     * @param file
     * config file, appended with {@param directory}
     *
     * @param example
     * example file, appended with {@param directory}
     *
     * @param reviver
     * json parse reviver
     */
    function ConfigDirectoryJson(directory, file, example, reviver) {
        return config_directory_1.default(directory, file, example, (data) => JSON.parse(data, reviver));
    }
    exports.default = ConfigDirectoryJson;
});
//# sourceMappingURL=config-directory-json.js.map