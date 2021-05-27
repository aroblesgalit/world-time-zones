import './App.css';

function App() {
  return (
    <main>
      <div>
        <h1>World Time Zones</h1>
        <select name='time-zones' id='time-zones'>
          <option value='' selected disabled>Add a time zone</option>
          <option value='America/New_York'>America/New York</option>
          <option value='America/Los_Angeles'>America/Los Angeles</option>
          <option value='America/London'>Europe/London</option>
        </select>
        <div class='list'>
          <div class='item'>
            <p>Time zone name</p>
            <p>12:10:20</p>
            <span>Delete</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
