module.exports.sum = (num1, num2) => {
  const intNum1 = parseInt(num1);
  const intNum2 = parseInt(num2);

  if (Number.isNaN(intNum1) || Number.isNaN(intNum2)) {
    throw new Error("Please check your input");
  }

  return intNum1 + intNum2;
};
