import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const saveNewYearHandler = (newYear) => {
    setSelectedYear(newYear);
    console.log("from Expenses.jsx");
    console.log(selectedYear);
  };

  const filteredList = props.expenses.filter(
    (expense) => selectedYear == expense.date.getFullYear()
  );

  if (filteredList.length === 0) {
    var expensesContent = <p>No expenses found.</p>;
  } else {
    expensesContent = filteredList.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onSaveNewYEar={saveNewYearHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
