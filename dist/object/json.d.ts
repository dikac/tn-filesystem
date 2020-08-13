/// <reference types="node" />
import { PathLike } from "fs";
/**
 * wrapper for {@link Parser} for json
 *
 * @param file
 * absolute path json file location
 *
 * @param reviver
 * json parse reviver
 */
export default function Json(file: PathLike, reviver?: Parameters<typeof JSON.parse>[1]): object;
