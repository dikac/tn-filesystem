/// <reference types="node" />
import { PathLike } from "fs";
/**
 * Wrapper for {@link ConfigFile} for json
 *
 * @param file
 * absolute path of json config file
 *
 * @param suffix
 * example suffix to be appended to {@param file}
 *
 * @param reviver
 * json parse reviver
 */
export default function ConfigSuffixJson(file: PathLike, suffix: PathLike, reviver?: (this: any, key: string, value: any) => any): object;
