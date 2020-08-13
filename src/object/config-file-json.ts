import {PathLike} from "fs";
import Json from "./json";
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

export default function ConfigFileJson(
    file : PathLike,
    example : PathLike,
    reviver?: (this: any, key: string, value: any) => any
) : object {

    return ConfigFile(file, example, (data : string) => JSON.parse(data, reviver))

}
