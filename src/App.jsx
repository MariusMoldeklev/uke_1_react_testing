// App.jsx

import './App.css';
import userData from '../users.json'; // Check this import path
import Navbar from './Navbar';
import UserCard from './UserCard';
import { useState } from 'react';

function App() {
  const [showMore, setShowMore] = useState({});

  const handleShowMore = (userId) => {
    setShowMore((prevState) => ({
      ...prevState,
      [userId]: !prevState[userId],
    }));
  };

  // Make sure userData is an array here
  const users = userData.users || [];

  return (
    <div className='app'>
      <header className='header'>
        <Navbar />
      </header>
      <main className='main'>
        <h2>Static Components</h2>
      </main>
      <div className='user-cards'>
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            showMore={showMore}
            handleShowMore={handleShowMore}
          />
        ))}
      </div>
      <footer className='footer'>
        <p>random kontakt informasjon</p>
        <p>tlf +47 123 45 678</p>
      </footer>
    </div>
  );
}

export default App;
