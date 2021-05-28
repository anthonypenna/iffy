export type IfElseBranch<A, B> = { then: A; else: B };

export function If<A, B>(
  condition: boolean,
  branch: IfElseBranch<A, B>
): A | B {
  return condition ? branch.then : branch.else;
}
