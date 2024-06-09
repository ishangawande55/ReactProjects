import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
    const remainingBudget = budget - totalExpenses;
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{remainingBudget}</span>
        </div>
    );
};

export default Remaining;
