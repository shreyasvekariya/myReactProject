import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layoutpage from './Backend/layoutPage';
import Homepage from './Backend/homePage';
import Crud from './Backend/crudPage';
import Insertdata from './Backend/insertPage';
import Updatedata from './Backend/updatePage';
import GetById from './Backend/getByid';
import Bill from './Backend/bill';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>  
  <Routes>
    <Route path='/' element={<Layoutpage/>}>
    <Route path='/home' element={<Homepage/>}/>
    <Route path='/insert' element={<Insertdata/>}/>
    <Route path='/getAll' element={<Crud/>}/>
    <Route path='/getAll/:id' element={<GetById/>}/>
    <Route path='/getAll/update/:id' element={<Updatedata/>}/>
    <Route path="/getAll/bill" element={<Bill/>} />
    </Route>
  </Routes>
  </BrowserRouter>
)
reportWebVitals();
