import React from "react";
import "./ExpenseItem.scss";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem({ title, amount, date }) {
  return (
    <div className="expense-item">
      <div className="item-date">
        <ExpenseDate date={date} />
      </div>
      <div className="item-name">{title}</div>
      <div className="item-price">${amount}</div>
    </div>
  );
}

export default ExpenseItem;
