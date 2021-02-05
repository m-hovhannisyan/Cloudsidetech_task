import React, { Suspense } from 'react';
import './App.css';
import axios from 'axios'
import Tables from './components/table';
import Calc_r from './components/calc_r';

function App (){

  return ( 
    <div>

        <Tables></Tables>
        <Calc_r></Calc_r>

    </div>
  )
}

export default App;
