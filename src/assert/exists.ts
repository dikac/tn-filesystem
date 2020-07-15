import Fn from "@dikac/t-function/function";
import Parameter from "@dikac/t-function/assert/parameter";
import NumberError from "./throwable/exists";
import {existsSync, PathLike} from "fs";

export default function Exists(
    value : PathLike,
    error : Fn<[PathLike], Error> = NumberError
) : void {

    Parameter(value, existsSync, error);
}
