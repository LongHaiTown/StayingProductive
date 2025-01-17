import './App.css';
import Weekday from './Weekday.js';
import AppFunctionSection from './AppFunctionSection.js';

import React,{ useState } from 'react';

function App() {
  const [sharedData, setSharedData] = useState([]);

  return (
    <div className="App">
      <div className='outer-app-title'>
        <div className='app-title'>
          <h1 id="appTitle">Staying Productive~</h1>
          <h1 id="appTitle_shadow">Staying Productive~</h1>
        </div>
        <div className='someGreeting'>
          <p style={{paddingLeft:"auto"}}>hi</p>
        </div>
      </div>


      <div className='scheduleBoard'>
        <div className='date'></div>
        <div className='date'>2</div>
        <div className='date'>3</div>
        <div className='date'>4</div>
        <div className='date'>5</div>
        <div className='date'>6</div>
        <div className='date'>7</div>
        <div className='date'>8</div>

        <div className='date' id='morning'>Sáng</div>
        <div className='date' id='afternoon'>Trưa</div>
        <div className='date' id='evening'>Chiều</div>
        <Weekday thingstodo = {sharedData }/>

      </div>
      <AppFunctionSection setSharedData={setSharedData}/>
      
    </div>
  );
}

export default App;

