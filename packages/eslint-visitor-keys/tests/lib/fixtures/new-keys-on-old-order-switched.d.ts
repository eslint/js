export type AssignmentOperator = "=";
interface Pattern {
    type: "Pattern"
};
interface MemberExpression {
    type: "MemberExpression"
};
interface Expression {
    type: "Expression"
};

export interface AssignmentExpression {
  type: "AssignmentExpression";
  operator: AssignmentOperator;
  down: Expression;
  up: Expression;
  left: Pattern | MemberExpression;
  right: Expression;
  nontraversable: RegExp;
}
