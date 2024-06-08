import React, {useContext} from 'react';
import ExpenseItem from './Expenseitem';
import {AppContext} from '../Context/AppContext';

const ExpenseList=()=>{
    const {expenses}=useContext(AppContext);

    return(
        <table className='table'>
            <thead
            className='thread-light'>

                <tr>
                    <th scope='col'>Department</th>
                    <th scope='col'>Allocated Budget</th>
                    <th scope='col'>Increase by 10</th>
                    <th scope='col'>Delete</th>
                </tr>
            </thead>
            <tbody>
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
            ))}
            </tbody>
        </table>
    );
};
export default ExpenseList;