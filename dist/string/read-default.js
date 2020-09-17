import { existsSync, readFileSync, writeFileSync } from "fs";
/**
 * read {@param file} content, if not exists value from {@param source} is
 * returned and written to {@param file}
 *
 * @param file
 * @param source
 */
export default function ReadDefault(file, source) {
    if (existsSync(file)) {
        return readFileSync(file);
    }
    const data = source(file);
    writeFileSync(file, data);
    return data;
}
//# sourceMappingURL=read-default.js.map