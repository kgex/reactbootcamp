import { useState } from 'react';
import './App.css';
import User from './User';
import UserCard from './UserCard';

function App(props) {
  console.log(props)

  const [val, setHomeVal] = useState(0);
  const [users, serUsers] = useState([{ 'name': "Jane" }, { 'name': "John" }, { 'name': "Raju" }])
  return (
    <div className="App">
      <p>
        content {props.title}
        <br />
        {props.name}
        <br />
        {val}
        <br />
        <button onClick={() => setHomeVal(val + 1)}>Click</button>

        {val % 2 === 0 ? <p>Even</p> : <p>Odd</p>}


        {users.map((user) =>
          <UserCard homeVal={val} name={user.name} setHomeVal={setHomeVal} />
        )}
      </p>
    </div>
  );
}

export default App;
