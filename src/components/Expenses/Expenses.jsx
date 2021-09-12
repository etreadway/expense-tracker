import ExpensesList from "./ExpensesList";
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
    // eslint-disable-next-line eqeqeq
    (expense) => selectedYear == expense.date.getFullYear()
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onSaveNewYEar={saveNewYearHandler}
        />
        <ExpensesList expenses={filteredList} />
      </Card>
    </div>
  );
}

export default Expenses;
