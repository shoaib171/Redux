/** @format */

export const DepositAmount = (num) => {
  return {
    type: "DEPOSIT",
    payload: num,
  };
};
export const WithDrawAmount = (num) => {
  return {
    type: "WITHDRAW",
    payload: num,
  };
};
