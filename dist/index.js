"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.If = void 0;
function If(condition, branch) {
  return condition ? branch.then : branch.else;
}
exports.If = If;
