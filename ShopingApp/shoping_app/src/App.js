import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './Context/AppContext';
import CartValue from './Components/CartValue';
import ExpenseList from './Components/ExpenseList';
import ItemSelected from './Components/ItemSelected';
import Location from './Components/Location';

function App() {
  return (
    <AppProvider>
      <CartValue />
      <ExpenseList />
      <ItemSelected />
      <Location />
    </AppProvider>
  );
}

export default App;
