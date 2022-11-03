import "./App.scss";
import Expenses from "./components/Expenses/Expenses.jsx";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_data = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_data);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      {/* <div className="expense">
        <div className="date">Date</div>
        <div className="name">Description</div>
        <div className="price">Price$</div>
      </div> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <div className="items">
        <Expenses items={expenses} />
      </div>
    </div>
  );
}

export default App;
