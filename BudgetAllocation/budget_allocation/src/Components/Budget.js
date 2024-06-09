import React, { useState, useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const value = parseInt(event.target.value);
        setNewBudget(value);

        if (value >= 0) {
            dispatch({
                type: 'SET_BUDGET',
                payload: value,
            });
        } else {
            alert("Budget cannot be negative");
        }
    };

    return (
        <div className='alert alert-secondary d-flex align-items-center'>
            <label className='mr-3'>Budget: {currency}</label>
            <input
                type='number'
                step='10'
                value={newBudget}
                onChange={handleBudgetChange}
                className='form-control w-25'
            />
        </div>
    );
};

export default Budget;
