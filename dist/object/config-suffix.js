import ConfigFile from "./config-file";
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
export default function ConfigSuffix(file, suffix, parser) {
    return ConfigFile(file, file.toString() + suffix.toString(), parser);
}
//# sourceMappingURL=config-suffix.js.map