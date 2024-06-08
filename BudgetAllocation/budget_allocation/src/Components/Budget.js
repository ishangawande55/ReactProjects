import React, {useState, useContext} from 'react';
import {AppContext} from '../Context/AppContext'

const Budget=()=>{
    const {budget}=useContext(AppContext);
    const [newBudget, setNewBudget]=useState(budget);
    const handleBudgetChange=(event)=>{
        setNewBudget(event.target.value);
    }
    return(
    <div className='alert alert-secondary'>
        <span>Budget:￡{budget} </span>
        <input type='number' step="10" value={newBudget} onChange={
            handleBudgetChange}></input>
    </div>
    );
};
export default Budget;