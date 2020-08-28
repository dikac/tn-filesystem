/// <reference types="node" />
import { PathLike } from "fs";
export default function Exists(value: PathLike, error?: (path: PathLike) => Error): void;
