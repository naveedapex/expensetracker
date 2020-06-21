import React, { useReducer } from "react";
import "./App.css";
import Balance from "./component/Balance";
import Header from "./component/Header";
import History from "./component/History";
import Transaction from "./component/Transaction";
import ExpenseContext from "./ExpenseContext";
import ExpenseReducer from "./reducer/ExpenseReducer";

function App() {
  const [state, dispatch] = useReducer(ExpenseReducer, []);
  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header />
        <Balance />
        <History />
        <Transaction />
      </div>
    </ExpenseContext.Provider>
  );
}

export default App;
