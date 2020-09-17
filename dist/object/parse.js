import { readFileSync } from "fs";
import AssertExists from "../assert/exists";
/**
 * Parse file to object
 *
 * @param file
 * absolute path file location
 *
 * @param parser
 * parser to convert string to object
 */
export default function Parser(file, parser) {
    AssertExists(file);
    let buffer = readFileSync(file);
    return parser(buffer.toString());
}
//# sourceMappingURL=parse.js.map