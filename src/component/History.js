import React, {useContext, JSX}  from 'react';
import ExpenseContext from '../ExpenseContext';
import { light } from '@material-ui/core/styles/createPalette';
function History(){
    const {state, dispatch} = useContext(ExpenseContext);
return <div>
    <h2>Hisotry</h2>
    <ol>
      {state.map(record => (
       
        <li >{record.amount} {record.desc} 
        <button onClick={()=>{
            dispatch({type:'DEL', payload:{id:record.id}})
        }}>X</button>
      </li>
      ))}
    </ol>

</div>

}

export default History