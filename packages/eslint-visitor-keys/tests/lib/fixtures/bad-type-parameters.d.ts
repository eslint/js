export interface Statement {}

export interface StaticBlock extends BadTypeParam<Statement, 'type'> {
    type: "StaticBlock";
}
