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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onSaveNewYEar={saveNewYearHandler}
        />
        {props.expenses.map((expense) => {
          return (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
}

export default Expenses;
