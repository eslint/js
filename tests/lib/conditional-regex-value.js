"use strict";

module.exports = function(literalNode) {
    if (literalNode.regex) {
        try {
            literalNode.value = new RegExp(literalNode.regex.pattern, literalNode.regex.flags);
        } catch {
            literalNode.value = null;
        }
    }
    return literalNode;
};
