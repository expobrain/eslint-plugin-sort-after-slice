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
      /**
       * Case where sort() is called on an array and the result is stored
       */
      CallExpression: function(node) {
        debugger;
        if (
          // is calling sort()
          node.callee.type === "MemberExpression" &&
          node.callee.object.type === "Identifier" &&
          node.callee.property.type === "Identifier" &&
          node.callee.property.name === "sort" &&
          // result is assigned to a variable
          node.parent.type === "VariableDeclarator"
        ) {
          context.report(node, "sort() without slice()");
        }
      }
    };
  }
};
