import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


//code to import Budget.js
import Budget from './Components/Budget';
import AlloctionForm from "./Components/AllocationForm";
import Expenseitem from "./Components/Expenseitem";
import ExpenseList from "./Components/ExpenseList";
import ExpenseTotal from "./Components/ExpenseTotal";
import Remaining from './Components/Remaining';

//add code to import other components here

import { AppProvider } from "./Context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <div className='container'>
        <h1 className='mt-3'>
          Company's Budget Allocation
          <div className='row mt-3'>
            {

              /* Add Budget component here */
              // Budget component
              <div className='col-sm'>
                <Budget />
              </div>
            }

            {
              /* Add Remaining component here*/
              //Remaining component
              <div className='col-sm'>
                <Remaining />
              </div>
            }

            {
              /* Add ExpenseTotal component here */
              <div className='col-sm'>
                <ExpenseTotal />
              </div>
            }

            {
              /* Add ExpenseList component here */
              <div className='col-sm'>
                <ExpenseList />
              </div>

            }



            {
              /* Add ExpenseItem component here */
              <div className='col-sm'>
                <Expenseitem />
              </div>
            }

            {
              /* Add AllocationForm component here under */
              <div className='col-sm'>
                <AlloctionForm />
              </div>
            }

          </div>
        </h1>
      </div>
    </AppProvider>
  );
};
export default App;