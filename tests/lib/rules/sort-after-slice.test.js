/**
 * @fileoverview call sort() after slice() for immutability
 * @author Daniele Esposti
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/sort-after-slice"),
  RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  ecmaVersion: 6,
  sourceType: "module"
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("sort-after-slice", rule, {
  valid: ["array.slice().sort()"],

  invalid: [
    {
      code: "array.sort()",
      errors: [
        {
          message: "sort() without slice()",
          type: "CallExpression"
        }
      ]
    }
  ]
});
