import {PathLike} from "fs";
import Parser from "./parse";

/**
 * wrapper for {@link Parser} for json
 *
 * @param file
 * absolute path json file location
 *
 * @param reviver
 * json parse reviver
 */
export default function Json(
    file : PathLike,
    reviver ?: Parameters<typeof JSON.parse>[1]
) : object {

    return Parser(file, (data : string) => JSON.parse(data, reviver))
}
