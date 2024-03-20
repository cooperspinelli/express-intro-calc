"use strict";

const { BadRequestError } = require("./expressError");

/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

// stick with function declaration pattern unless simplifying a callback
const convertStrNums = (strNums) => {
  const nums = [];
  for (let strNum of strNums) {
    if (isNaN(parseFloat(strNum))) {
      throw new BadRequestError(`${strNum} is not a number.`);
    }
    nums.push(parseFloat(strNum));
  }
  return nums;
};


module.exports = { convertStrNums };