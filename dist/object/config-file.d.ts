/// <reference types="node" />
import { PathLike } from "fs";
/**
 * load and parse config file, if {@param file} is not exists {@param example} will be used
 * for sources and copied to {@param file}
 *
 * @param file
 * absolute path of config file
 *
 * @param example
 * absolute path of config example file
 *
 * @param parser
 * parser to convert string to object
 */
export default function ConfigFile(file: PathLike, example: PathLike, parser: (file: PathLike) => object): object;
