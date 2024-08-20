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

export interface NewFangledExpression {
  type: "NewFangledExpression";
  operator: AssignmentOperator;
  up: Expression;
  down: Expression;
  left: Pattern | MemberExpression;
  right: Expression;
}
