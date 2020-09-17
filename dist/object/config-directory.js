import ConfigFile from "./config-file";
/**
 * Wrapper for {@link ConfigFile}
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
 * @param parser
 * parser to convert string to object
 */
export default function ConfigDirectory(directory, file, example, parser) {
    return ConfigFile(directory.toString() + file.toString(), directory.toString() + example.toString(), parser);
}
//# sourceMappingURL=config-directory.js.map