import {copyFileSync, existsSync, PathLike, readFileSync} from "fs";
import AssertExists from "../assert/exists";

export default function Json(
    file : PathLike,
    reviver?: (this: any, key: string, value: any) => any
) : object {

    AssertExists(file);

    let buffer : Buffer = readFileSync(file);

    return  JSON.parse(buffer.toString(), reviver)

}
