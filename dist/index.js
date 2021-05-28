export function If(condition, branch) {
  return condition ? branch.then : branch.else;
}
