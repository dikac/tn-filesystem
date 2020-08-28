/// <reference types="node" />
import { PathLike } from "fs";
/**
 * Wrapper for {@link ConfigFile}
 *
 * @param directory
 * base absolute directory
 *
 * @param file
 * config file, appended with {@param directory}
 *
 * @param example
 * example file, appended with {@param directory}
 *
 * @param parser
 * parser to convert string to object
 */
export default function ConfigDirectory(directory: PathLike, file: PathLike, example: PathLike, parser: (content: string) => object): object;
