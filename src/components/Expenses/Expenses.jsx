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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onSaveNewYEar={saveNewYearHandler}
        />
        {/* if this && then that */}
        {filteredList.length === 0 && <p>No expenses found.</p>}
        {filteredList.length > 0 &&
          filteredList.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
  );
}

export default Expenses;
