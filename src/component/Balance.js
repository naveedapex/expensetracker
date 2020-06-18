import React, {useReducer, useContext} from 'react'
import ExpenseReducer from '../reducer/ExpenseReducer'
import ExpenseContext from '../ExpenseContext';


function Balance(){

    const {state} = useContext(ExpenseContext);
console.log(state);
function myFunc(total, num) {
    return total + parseInt(num.amount);
  }
const balance = state.reduce(myFunc,0);

function myIncome(total, num) {
    return  parseInt(num.amount)>0? total + parseInt(num.amount):0;
  }

  function myExpense(total, num) {
    return  parseInt(num.amount)<0? total + parseInt(num.amount):0;
  }
const income =state.reduce(myIncome,0);
const expense = state.reduce(myExpense,0);
    return <div>
        <div>Your Balance</div>
        <div>${balance}</div>
        <div>
        <div className='inline'>Income
<p>{income}</p>
        </div>
        <div className='inline'>Expense
        <p>{expense}</p>
        </div>
    
        </div>

    </div>

}

export default Balance