import {PathLike} from "fs";
import ConfigFile from "./config-file";

export default function ConfigDirectory(directory : PathLike, file : PathLike, example : PathLike) : object {

    return ConfigFile(
        directory.toString() + file.toString(),
        directory.toString() + example.toString()
    );
}
