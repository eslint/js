/**
 * @param literalNode
 */
export default function(literalNode) {
    if (literalNode.regex) {
        try {
            literalNode.value = new RegExp(literalNode.regex.pattern, literalNode.regex.flags);
            /* eslint-disable no-unused-vars */
        } catch (e) {
            literalNode.value = null;
        }
    }
    return literalNode;
}
