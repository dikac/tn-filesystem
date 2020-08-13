/// <reference types="node" />
import { PathLike } from "fs";
/**
 * Wrapper for {@link ConfigDirectory} for json
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
 * @param reviver
 * json parse reviver
 */
export default function ConfigDirectoryJson(directory: PathLike, file: PathLike, example: PathLike, reviver?: Parameters<typeof JSON.parse>[1]): object;
