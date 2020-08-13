import {PathLike} from "fs";
import ConfigFile from "./config-file";
import Function from "@dikac/t-function/function-single";

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
export default function ConfigDirectory(
    directory : PathLike,
    file : PathLike,
    example : PathLike,
    parser : Function<string, object>
) : object {

    return ConfigFile(
        directory.toString() + file.toString(),
        directory.toString() + example.toString(),
        parser
    );
}
