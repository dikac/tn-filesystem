/// <reference types="node" />
import Fn from "@dikac/t-function/function";
import { PathLike } from "fs";
export default function Exists(value: PathLike, error?: Fn<[PathLike], Error>): void;
