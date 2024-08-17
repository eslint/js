export interface StaticBlock extends Omit<SomeUnknownStatement, 'type'> {
    type: "StaticBlock";
}
