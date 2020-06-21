

const ExpenseReducer =(state, action )=>{
    console.log("states");
 console.log(state);
 console.log(action.payload);
    switch(action.type){
        case 'ADD':
            return [...state,action.payload];
        case 'DEL':
            return state.filter((i)=>{return i.id!==action.payload.id});     
        default:
            return state;

    }
}

export default ExpenseReducer