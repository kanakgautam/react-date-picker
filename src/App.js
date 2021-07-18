import React from 'react'
import './App.css';
import Button from './components/Button';
import DatePicker from './components/DatePicker';

function App() {
  return (
    <div className='app-container'>
      <DatePicker />
      <Button/>
    </div>
  );
}

export default App;
