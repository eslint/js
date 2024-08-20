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
  up: Expression;
  left: Pattern | MemberExpression;
  down: Expression;
  right: Expression;
  nontraversable: RegExp;
}
