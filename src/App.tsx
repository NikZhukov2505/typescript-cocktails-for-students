import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Detail from './Pages/Detail';

const App: FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/drink/:id' element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;