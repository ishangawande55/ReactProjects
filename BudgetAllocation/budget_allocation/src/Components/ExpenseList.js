import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './ExpenseList.css'; // Make sure to import the CSS file

const ExpenseList = () => {
    const { expenses, currency, dispatch } = useContext(AppContext);

    const increaseBudget = (id) => {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: { name: id, cost: 10 }
        });
    };

    const resetBudget = (id) => {
        dispatch({
            type: 'RED_EXPENSE',
            payload: { name: id, cost: expenses.find(exp => exp.id === id).cost }
        });
    };

    const changeCurrency = (newCurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency
        });
    };

    return (
        <div className="container-fluid">
            <div className="row mb-3">
                <div className="col">
                    <div className="currency-box">
                        <select
                            className="form-select currency-select"
                            value={currency}
                            onChange={(e) => changeCurrency(e.target.value)}
                        >
                            <option value="£">Pound (£)</option>
                            <option value="$">Dollar ($)</option>
                            <option value="₹">Indian Rupee (₹)</option>
                            <option value="€">Euro (€)</option>
                        </select>
                    </div>
                </div>
            </div>
            <table className="table">
                <thead className="thead-light">
                    <tr className="d-flex justify-content-between">
                        <th scope="col" className="col-4 ">Department</th>
                        <th scope="col" className="col-4 ">Allocated Budget</th>
                        <th scope="col" className="col-4 ">Increase by 10</th>
                        <th scope="col" className="col-4 ">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <tr key={expense.id} className="d-flex justify-content-between">
                            <td className="col-4">{expense.name}</td>
                            <td className="col-4 text-center">{currency}{expense.cost}</td>
                            <td className="col-4 text-center">
                                <button
                                    className="btn btn-success rounded-circle"
                                    onClick={() => increaseBudget(expense.id)}
                                >
                                    <i className="fas fa-plus text-white"></i>
                                </button>
                            </td>
                            <td className="col-2 text-right">
                                <button
                                    className="btn btn-danger rounded-circle"
                                    onClick={() => resetBudget(expense.id)}
                                >
                                    <i className="fas fa-times text-white"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseList;
