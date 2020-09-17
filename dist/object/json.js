import Parser from "./parse";
/**
 * wrapper for {@link Parser} for json
 *
 * @param file
 * absolute path json file location
 *
 * @param reviver
 * json parse reviver
 */
export default function Json(file, reviver) {
    return Parser(file, (data) => JSON.parse(data, reviver));
}
//# sourceMappingURL=json.js.map