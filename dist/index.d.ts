export declare type IfElseBranch<A, B> = {
  then: A;
  else: B;
};
export declare function If<A, B>(
  condition: boolean,
  branch: IfElseBranch<A, B>
): A | B;
