import React from 'react';
import './App.css';
import { AddReminder } from './components/AddReminder/AddReminder';

function App() {
  return (
    <div className="App">
      <h1 className="App-header">
        Just Remind
        <AddReminder />
      </h1>
      
    </div>
  );
}

export default App;
