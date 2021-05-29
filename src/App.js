import React, { useEffect, useState } from 'react';
import './App.css';
import Item from './components/Item';

function App() {

  const [timezones, setTimezones] = useState(JSON.parse(localStorage.getItem('timezones')) || [
    // { value: 'America/Los_Angeles', name: 'America/Los Angeles' },
    // { value: 'America/New_York', name: 'America/New York' },
    // { value: 'Asia/Tokyo', name: 'Asia/Tokyo' },
    // { value: 'Australia/Sydney', name: 'Australia/Sydney' },
    // { value: 'Europe/London', name: 'Europe/London' },
  ]);

  useEffect(() => {
    fetch('https://worldtimeapi.org/api/timezone')
      .then(res => res.json())
      .then(res => {
        const tempTimezones = [];
        for (let i = 0; i < res.length; i++) {
          tempTimezones.push({
            value: res[i],
            name: res[i].split('_').join(' ')
          })
        }
        return tempTimezones;
      })
      .then(res => setTimezones(res))
      .catch(err => console.log(err))
  }, [])

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);

  function addTimeZone(e) {
    e.preventDefault();

    const item = e.target.value;
    if (items.includes(item)) return; // Return if time zone is already on list

    // Add to items array
    setItems(prevState => [...prevState, item])
    // Store items in localstorage
    localStorage.setItem('items', JSON.stringify([...items, item]));

    // Remove item from timezones array
    const newTimezones = [...timezones].filter(timezone => timezone.value !== item);
    setTimezones(newTimezones);
    // Store timezones in localstorage
    localStorage.setItem('timezones', JSON.stringify(newTimezones));
  }

  function deleteTimeZone(e, i) {
    e.preventDefault();
    const currentItems = [...items];
    const item = currentItems.splice(i, 1);
    setItems(currentItems);
    // Store items in localstorage
    localStorage.setItem('items', JSON.stringify(currentItems));

    // Add item back into timezones array
    const newTimezones = [...timezones];
    newTimezones.push({
      value: item.join(),
      name: item.join().split('_').join(' ')
    })
    newTimezones.sort((a, b) => a.value > b.value ? 1 : -1);
    setTimezones(newTimezones);
    // Store timezones in localstorage
    localStorage.setItem('timezones', JSON.stringify(newTimezones));
  }

  return (
    <main>
      <div>
        <h1>World Time Zones</h1>
        <select name='time-zones' id='time-zones' onChange={(e) => addTimeZone(e)}>
          <option value=''>Select a time zone to add</option>
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
        {
          items.length > 1 && (
            <div id='refresh' onClick={() => window.location.reload()}>&#8635; Sync</div>
          )
        }
      </div>
    </main>
  );
}

export default App;
