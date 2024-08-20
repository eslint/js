interface BadExpression {
  type: undefined;
}

export interface NewFangledExpression {
  type: "NewFangledExpression";
  right: BadExpression;
}
