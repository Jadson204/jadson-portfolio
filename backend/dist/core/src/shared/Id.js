"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Id {
    static gerar() {
        const p1 = Math.random().toString(36).substring(2, 9);
        const p2 = Math.random().toString(36).substring(2, 9);
        const p3 = Math.random().toString(36).substring(2, 9);
        return `${p1}-${p2}-${p3}`;
    }
}
exports.default = Id;
console.log(Id.gerar());
//# sourceMappingURL=Id.js.map