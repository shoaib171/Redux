/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DepositAmount } from "../actions";
import { WithDrawAmount } from "../actions";

const Shop = () => {
  const CalculateAmount = useSelector((state) => state.CalculateAmount);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Deposit/WithDraw your Amount</h2>
      <button
        className="btn btn-primary mx-3"
        onClick={() => {
          dispatch(DepositAmount(100));
        }}
      >
        +
      </button>
      Your Balance is:{CalculateAmount}
      <button
        className="btn btn-primary mx-3"
        onClick={() => {
          dispatch(WithDrawAmount(100));
        }}
      >
        -
      </button>
    </div>
  );
};

export default Shop;
