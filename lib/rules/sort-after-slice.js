/**
 * @fileoverview call sort() after slice() for immutability
 * @author Daniele Esposti
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "call sort() after slice() for immutability",
      category: "Fill me in",
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: function(context) {
    return {
      CallExpression: function(node) {
        if (
          node.callee.type === "MemberExpression" &&
          node.callee.object.type === "Identifier" &&
          node.callee.property.type === "Identifier" &&
          node.callee.property.name === "sort"
        ) {
          context.report(node, "sort() without slice()");
        }
      }
    };
  }
};
