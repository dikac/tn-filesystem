/// <reference types="node" />
import { PathLike } from "fs";
/**
 * Parse file to object
 *
 * @param file
 * absolute path file location
 *
 * @param parser
 * parser to convert string to object
 */
export default function Parser(file: PathLike, parser: (content: string) => object): object;
