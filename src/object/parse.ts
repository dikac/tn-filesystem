import {PathLike, readFileSync} from "fs";
import AssertExists from "../assert/exists";
import Function from "@dikac/t-function/function-single";

/**
 * Parse file to object
 *
 * @param file
 * absolute path file location
 *
 * @param parser
 * parser to convert string to object
 */
export default function Parser(
    file : PathLike,
    parser : Function<string, object>
) : object {

    AssertExists(file);

    let buffer : Buffer = readFileSync(file);

    return parser(buffer.toString())

}
