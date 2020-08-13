/// <reference types="node" />
import { PathLike } from "fs";
/**
 * Wrapper for {@link ConfigFile} for json
 *
 * @param file
 * absolute path of json config file
 *
 * @param example
 * absolute path of config example file
 *
 * @param reviver
 * json parse reviver
 */
export default function ConfigFileJson(file: PathLike, example: PathLike, reviver?: (this: any, key: string, value: any) => any): object;
