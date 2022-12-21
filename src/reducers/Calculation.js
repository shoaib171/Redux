/** @format */

const CalculateAmount = (state = 0, action) => {
  if (action.type === "DEPOSIT") {
    return state + action.payload;

    // return state + 100;
  } else if (action.type === "WITHDRAW") {
    // return state - action.payload;
    if (state > 0) return state - action.payload;
  } else {
    return state;
  }
};
export default CalculateAmount;
