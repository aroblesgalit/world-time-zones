import React, { useEffect, useState } from 'react';
import './App.css';
import moment from 'moment-timezone';

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    // setInterval(() => {
    //   console.log('hello')
    // }, 1000)
  }, []);

  function addTimeZone(e) {
    e.preventDefault();
  
    // Get name and time zone
    const value = e.target.value;
    const valueArr = value.split('_');
    const name = valueArr.join(' ');
    if (items.some(item => item.name === name)) return; // Return if time zone is already on list
    const newTimeZone = moment().tz(e.target.value).format('h:mm:ss a z');
    
    // Add to items array
    setItems(prevState => [...prevState, {
      name: name,
      time: newTimeZone
    }])
  }

  return (
    <main>
      <div>
        <h1>World Time Zones</h1>
        <select name='time-zones' id='time-zones' onChange={(e) => addTimeZone(e)}>
          <option value='' selected disabled>Select a time zone to add</option>
          <option value='America/New_York'>America/New York</option>
          <option value='America/Los_Angeles'>America/Los Angeles</option>
          <option value='America/London'>Europe/London</option>
        </select>
        <div className='list'>
          {
            items && items.map((item, i) => {
              return (
                <div key={`${i}-${item.name}`} className='item'>
                  <p>{item.name}</p>
                  <p>{item.time}</p>
                  <div>&#10006;</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </main>
  );
}

export default App;
