import {PathLike} from "fs";
import ConfigFile from "./config-file";
import Function from "@dikac/t-function/function-single";

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
export default function ConfigSuffix(
    file : PathLike,
    suffix : PathLike,
    parser : Function<string, object>
) : object {

    return ConfigFile(file, file.toString() + suffix.toString(), parser)
}
