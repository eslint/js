export interface IgnoredStatement {
    type: "IgnoredStatement"
}
export interface AnotherStatement {
    type: "AnotherStatement";
    anotherToIgnore: IgnoredStatement;
}

export interface StaticBlock extends Omit<AnotherStatement, 'type' | 'anotherToIgnore'> {
    type: "StaticBlock";
}
