import ConfigDirectory from "./config-directory";
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
export default function ConfigDirectoryJson(directory, file, example, reviver) {
    return ConfigDirectory(directory, file, example, (data) => JSON.parse(data, reviver));
}
//# sourceMappingURL=config-directory-json.js.map