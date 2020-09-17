export default function Exists(valid, path) {
    let string = path.toString();
    if (valid) {
        return `path "${string}" is exists`;
    }
    else {
        return `path "${string}" is not exists`;
    }
}
//# sourceMappingURL=exists.js.map