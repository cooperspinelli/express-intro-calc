const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

const convertStrNums = (strNums) => {

  const nums = [];
  for (let strNum of strNums) {
    if (isNaN(parseFloat(strNum))) {
      throw new BadRequestError(`${strNum} is not a number.`);
    }
    nums.push(parseFloat(strNum));
  }
};


module.exports = { convertStrNums };