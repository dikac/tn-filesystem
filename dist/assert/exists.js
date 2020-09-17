import Callback from "@dikac/t-function/assert/callback";
import NumberError from "./throwable/exists";
import { existsSync } from "fs";
export default function Exists(value, error = NumberError) {
    Callback(value, existsSync, error);
}
//# sourceMappingURL=exists.js.map