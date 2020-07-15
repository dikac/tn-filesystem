import {copyFileSync, existsSync, PathLike} from "fs";
import {execSync} from "child_process";
import Json from "./json";
import AssertExists from "../assert/exists";

export default function ConfigFile(file : PathLike, example : PathLike) : object {

    if(existsSync(file)) {

        return Json(file);
    }

    let object = Json(example);
    copyFileSync(example, file);
    return object;

}
