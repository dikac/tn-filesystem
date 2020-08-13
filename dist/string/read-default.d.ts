/// <reference types="node" />
import { PathLike, writeFileSync } from "fs";
import Function from "@dikac/t-function/function-single";
/**
 * read {@param file} content, if not exists value from {@param source} is
 * returned and written to {@param file}
 *
 * @param file
 * @param source
 */
export default function ReadDefault<FunctionT extends Function<PathLike, Parameters<typeof writeFileSync>[1]>>(file: PathLike, source: FunctionT): ReturnType<FunctionT>;
