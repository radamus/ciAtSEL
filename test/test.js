var assert = require("assert");

var discountCalc =  require("../discount");

describe("discount Calculator", function(){
    it("should have discount function", function(){
       assert.equal(discountCalc.discount instanceof Function, true); 
    });
});