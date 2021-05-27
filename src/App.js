import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [items, setItems] = useState([
    { name: 'America/New York', time: '12:10:15' },
    { name: 'America/Los Angeles', time: '12:10:15' }
  ]);

  useEffect(() => {
    setInterval(() => {
      console.log('hello')
    }, 1000)
  }, [])

  return (
    <main>
      <div>
        <h1>World Time Zones</h1>
        <select name='time-zones' id='time-zones' defaultValue='Add a time zone'>
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
