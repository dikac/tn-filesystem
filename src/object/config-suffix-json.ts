import {PathLike} from "fs";
import ConfigFile from "./config-file";
import Json from "./json";
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
export default function ConfigSuffixJson(
    file : PathLike,
    suffix : PathLike,
    reviver?: (this: any, key: string, value: any) => any
) : object {

    return ConfigSuffix(file, suffix, (data) => Json(data, reviver))
}
