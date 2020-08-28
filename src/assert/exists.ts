import Callback from "@dikac/t-function/assert/callback";
import NumberError from "./throwable/exists";
import {existsSync, PathLike} from "fs";

export default function Exists(
    value : PathLike,
    error : (path:PathLike)=>Error = NumberError
) : void {

    Callback(value, existsSync, error);
}
