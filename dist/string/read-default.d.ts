/// <reference types="node" />
import { PathLike, writeFileSync } from "fs";
/**
 * read {@param file} content, if not exists value from {@param source} is
 * returned and written to {@param file}
 *
 * @param file
 * @param source
 */
export default function ReadDefault<FunctionT extends (path: PathLike) => Parameters<typeof writeFileSync>[1]>(file: PathLike, source: FunctionT): ReturnType<FunctionT>;
