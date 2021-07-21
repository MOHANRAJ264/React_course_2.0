import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesList from "./ExpensesList.js";
import ExpensesChart from "./ExpensesChart.js";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteresYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteresYear(selectedYear);
  };
  const filteresExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteresExpenses} />
        <ExpensesList items={filteresExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
