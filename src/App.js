import React, { useState } from 'react';
import './App.css';
import Item from './components/Item';

function App() {

  const [items, setItems] = useState([]);

  function addTimeZone(e) {
    e.preventDefault();

    const item = e.target.value;

    if (items.includes(item)) return; // Return if time zone is already on list

    // Add to items array
    setItems(prevState => [...prevState, item])
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
              return <Item key={`${i}-${item}`} item={item} />
            })
          }
        </div>
      </div>
    </main>
  );
}

export default App;
