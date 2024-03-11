// App.jsx

import './App.css';
import userData from './data/users.json'; // Check this import path
import Navbar from './Navbar';
import UserCard from './userCard';
// import { useState } from 'react';

function App() {
  return (
    <div className='app'>
      <header className='header'>
        <Navbar />
      </header>
      <main className='main'>
      <UserCard/>
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
