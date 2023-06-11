import React from 'react';
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Router, Routes, Navigate, useNavigate  } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';

import ProductForm from './components/ProductForm';
import Sales from './components/Sales';
import User from './components/User';
import HomePage from './components/HomePage';
import InventoryTable from './components/Inventory';
import  UserDropdown from './components/drop';


export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" />    
        <Route index element={<HomePage />} />   
        <Route path="/inventory" element={<InventoryTable />} />
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/user" element={<User />} />
        <Route path="/drop" element={<UserDropdown />} />
      </Routes>
    </BrowserRouter>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);