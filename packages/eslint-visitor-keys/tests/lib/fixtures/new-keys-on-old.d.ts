export type AssignmentOperator = "=";

interface IgnoreBase {
    type: "Line";
}

type AnotherIgnore = IgnoreBase;

interface BasePattern {
    type: "Pattern"
};
interface IgnoreChild extends Omit<BasePattern, "type"> {
};

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
  ignore: IgnoreChild;
  anotherIgnore: AnotherIgnore;
  operator: AssignmentOperator;
  up: Expression;
  down: Expression;
  left: Pattern | MemberExpression;
  right: Expression;
  nontraversable: RegExp;
}
