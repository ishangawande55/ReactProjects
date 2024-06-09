import React, { createContext, useReducer } from 'react';

// The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    console.log("Reducer action:", action);

    let budget = state.budget;
    switch (action.type) {
        case 'ADD_EXPENSE': {
            const total_budget = state.expenses.reduce(
                (previousExp, currentExp) => previousExp + currentExp.cost, 0
            ) + action.payload.cost;

            console.log("Total budget after adding:", total_budget);

            if (total_budget <= state.budget) {
                const expenseExists = state.expenses.find(exp => exp.name === action.payload.name);
                let updatedExpenses;

                if (expenseExists) {
                    updatedExpenses = state.expenses.map((currentExp) => {
                        if (currentExp.name === action.payload.name) {
                            return { ...currentExp, cost: currentExp.cost + action.payload.cost };
                        }
                        return currentExp;
                    });
                } else {
                    updatedExpenses = [...state.expenses, action.payload];
                }

                console.log("Updated expenses:", updatedExpenses);

                return {
                    ...state,
                    expenses: updatedExpenses,
                };
            } else {
                alert("Cannot increase the allocation! Out of funds");
                return state;
            }
        }

        case 'RED_EXPENSE': {
            const updatedExpenses = state.expenses.map((currentExp) => {
                if (currentExp.name === action.payload.name) {
                    const newCost = currentExp.cost - action.payload.cost;
                    if (newCost >= 0) {
                        return { ...currentExp, cost: newCost };
                    } else {
                        console.warn(`Cannot reduce expense below zero for ${currentExp.name}`);
                    }
                }
                return currentExp;
            });

            console.log("Updated expenses after reduction:", updatedExpenses);

            return {
                ...state,
                expenses: updatedExpenses,
            };
        }

        case 'DELETE_EXPENSE': {
            const expenseToDelete = state.expenses.find(exp => exp.name === action.payload);
            if (expenseToDelete) {
                budget += expenseToDelete.cost;
            } else {
                console.warn(`Expense with name ${action.payload} not found`);
            }

            const updatedExpenses = state.expenses.filter(exp => exp.name !== action.payload);

            return {
                ...state,
                budget,
                expenses: updatedExpenses,
            };
        }

        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };

        case 'CHG_CURRENCY':
            return {
                ...state,
                currency: action.payload,
            };

        default:
            return state;
    }
};

// Sets the initial state when the app loads
const initialState = {
    budget: 2000,
    expenses: [
        { id: "Marketing", name: 'Marketing', cost: 50 },
        { id: "Finance", name: 'Finance', cost: 300 },
        { id: "Sales", name: 'Sales', cost: 70 },
        { id: "Human Resource", name: 'Human Resource', cost: 40 },
        { id: "IT", name: 'IT', cost: 500 },
    ],
    currency: '£'
};

// Creates the context - this is the thing our components import and use to get the state
export const AppContext = createContext();

// Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested (wrapped) components
export const AppProvider = (props) => {
    // Sets up the app state. Takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const totalExpenses = state.expenses.reduce((total, item) => total + item.cost, 0);
    const remaining = state.budget - totalExpenses;

    return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                budget: state.budget,
                remaining,
                dispatch,
                currency: state.currency,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
