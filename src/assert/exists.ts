import Fn from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/callback";
import NumberError from "./throwable/exists";
import {existsSync, PathLike} from "fs";

export default function Exists(
    value : PathLike,
    error : Fn<[PathLike], Error> = NumberError
) : void {

    Callback(value, existsSync, error);
}
