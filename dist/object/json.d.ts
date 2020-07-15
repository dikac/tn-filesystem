/// <reference types="node" />
import { PathLike } from "fs";
export default function Json(file: PathLike, reviver?: (this: any, key: string, value: any) => any): object;
