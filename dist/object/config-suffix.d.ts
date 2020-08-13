/// <reference types="node" />
import { PathLike } from "fs";
/**
 * Wrapper for {@link ConfigFile}
 *
 * @param file
 * absolute path of config file
 *
 * @param suffix
 * example suffix to be appended to {@param file}
 *
 * @param parser
 */
export default function ConfigSuffix(file: PathLike, suffix: PathLike, parser: (file: string) => object): object;
