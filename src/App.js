import React, { useState } from 'react';
import './App.css';
import Item from './components/Item';

function App() {

  const [timezones, setTimezones] = useState([
    { value: 'America/New_York', name: 'America/New York' },
    { value: 'America/Los_Angeles', name: 'America/Los Angeles' },
    { value: 'Europe/London', name: 'Europe/London' },
    { value: 'Australia/Sydney', name: 'Australia/Sydney' },
    { value: 'Asia/Tokyo', name: 'Asia/Tokyo' },
  ]);

  const [items, setItems] = useState([]);

  function addTimeZone(e) {
    e.preventDefault();

    const item = e.target.value;

    if (items.includes(item)) return; // Return if time zone is already on list

    // Add to items array
    setItems(prevState => [...prevState, item])

    // Remove item from timezones array
    const newTimezones = [...timezones].filter(timezone => timezone.value !== item);
    setTimezones(newTimezones);
  }

  function deleteTimeZone(e, i) {
    e.preventDefault();
    const currentItems = [...items];
    const item = currentItems.splice(i, 1);
    setItems(currentItems);

    // Add item back into timezones array
    const newTimezones = [...timezones];
    newTimezones.push({
      value: item.join(),
      name: item.join().split('_').join(' ')
    })
    setTimezones(newTimezones);
  }

  return (
    <main>
      <div>
        <h1>World Time Zones</h1>
        <select name='time-zones' id='time-zones' onChange={(e) => addTimeZone(e)}>
          <option value='' selected>Select a time zone to add</option>
          {
            timezones.map((timezone, i) => <option key={`${i}-${timezone.value}`} value={timezone.value}>{timezone.name}</option>)
          }
        </select>
        <table className='list'>
          <tbody>
            {
              items && items.map((item, i) => {
                return <Item key={`${i}-${item}`} item={item} onDelete={(e) => deleteTimeZone(e, i)} />
              })
            }
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default App;
