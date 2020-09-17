import ConfigSuffix from "./config-suffix";
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
export default function ConfigSuffixJson(file, suffix, reviver) {
    return ConfigSuffix(file, suffix, (data) => JSON.parse(data, reviver));
}
//# sourceMappingURL=config-suffix-json.js.map