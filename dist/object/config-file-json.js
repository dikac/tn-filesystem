import ConfigFile from "./config-file";
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
export default function ConfigFileJson(file, example, reviver) {
    return ConfigFile(file, example, (data) => JSON.parse(data, reviver));
}
//# sourceMappingURL=config-file-json.js.map