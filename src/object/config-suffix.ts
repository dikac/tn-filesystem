import {PathLike} from "fs";
import ConfigFile from "./config-file";

export default function Config(file : PathLike, suffix : PathLike) : object {

    return ConfigFile(file, file.toString() + suffix.toString())
}
