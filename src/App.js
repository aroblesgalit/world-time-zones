import React, { useState } from 'react';
import './App.css';
import Item from './components/Item';

function App() {

  const timezones = [
    { value: 'America/New_York', name: 'America/New York' },
    { value: 'America/Los_Angeles', name: 'America/Los Angeles' },
    { value: 'Europe/London', name: 'Europe/London' },
    { value: 'Australia/Sydney', name: 'Australia/Sydney' },
    { value: 'Asia/Tokyo', name: 'Asia/Tokyo' },
  ]

  const [items, setItems] = useState([]);

  function addTimeZone(e) {
    e.preventDefault();

    const item = e.target.value;

    if (items.includes(item)) return; // Return if time zone is already on list

    // Add to items array
    setItems(prevState => [...prevState, item])
  }

  function deleteTimeZone(e, i) {
    e.preventDefault();
    const currentItems = [...items];
    currentItems.splice(i, 1);
    setItems(currentItems);
  }

  return (
    <main>
      <div>
        <h1>World Time Zones</h1>
        <select name='time-zones' id='time-zones' onChange={(e) => addTimeZone(e)}>
          <option value='' selected disabled>Select a time zone to add</option>
          {
            timezones.map((timezone, i) => <option key={`${i}-${timezone.value}`} value={timezone.value}>{timezone.name}</option>)
          }
        </select>
        <div className='list'>
          {
            items && items.map((item, i) => {
              return <Item key={`${i}-${item}`} item={item} onDelete={(e) => deleteTimeZone(e, i)} />
            })
          }
        </div>
      </div>
    </main>
  );
}

export default App;
