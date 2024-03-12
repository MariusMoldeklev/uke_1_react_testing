// App.jsx

import './App.css';
import userData from './data/users.json'; // Check this import path
import Navbar from './Navbar';
import UserCard from './userCard';
// import { useState } from 'react';

function App() {
  console.log(userData.users[0].age)
  return (
    <div className='app'>
      <header className='header'>
        <Navbar />
      </header>
      <main className='main'>
        {userData.users.map((user) =>
          <UserCard user={user} key={user.id}/>
        )}
      </main>
      {console.log(userData)}
      <footer className='footer'>
        <p>random kontakt informasjon</p>
        <p>tlf +47 123 45 678</p>
      </footer>
  </div>
  );
}

export default App;
