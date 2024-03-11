// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// App.jsx

import './App.css';
import userData from '../users.json';
import Navbar from './Navbar';
import UserCard from './card';
import { useState } from 'react';

function App() {
  const [showMore, setShowMore] = useState({});

  const handleShowMore = (userId) => {
    setShowMore((prevState) => ({
      ...prevState,
      [userId]: !prevState[userId],
    }));
  };

  return (
    <div className='app'>
      <header className='header'>
        <Navbar />
      </header>
      <main className='main'>
        <h2>Dyr som er tilgjengelige</h2>
      <div className='user-cards'>
        {userData.map((user) => (
          <UserCard
          key={user.id}
          user={user}
          showMore={showMore}
          handleShowMore={handleShowMore}
          />
        ))}
      </div>
        </main>
      <footer className='footer'>
        <p>Random kontakt info 3252 Bergen</p>
        <p>Telefon nr +47 123 45 678</p>
      </footer>
    </div>
  );
}

export default App;
