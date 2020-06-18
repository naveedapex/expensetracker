import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Balance from './component/Balance';
import Transaction from './component/Transaction';
import History from './component/History';
import ExpenseReducer from './reducer/ExpenseReducer';
import ExpenseContext from './ExpenseContext';

function App() {
  const [state, dispatch] = useReducer(ExpenseReducer,[]);
  return (
    <ExpenseContext.Provider value={{state, dispatch}}>
    <div className="App">
      <Header />
      <Balance />
      <History/>
      <Transaction/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    </ExpenseContext.Provider> 
  );
}

export default App;
