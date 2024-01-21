import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ListView from './pages/ListView';
import DetailsView from './pages/DetailsView';

import './App.css'

function App() {

  return (
    <div className='main-container'>
      <img className="logo" src='//upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png' alt='pokemon logo' />
      <Routes>
        <Route path='/' element={<ListView />} />
        <Route path='/pokemon/' element={<DetailsView />} />
      </Routes>
    </div>
  );
}

export default App;