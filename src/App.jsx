// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'
import userData from "../users.json"
import Navbar from"./Navbar";


function App() {
  const [showMore, setShowMore] = useState({});

  const handleShowMore = (userId) => {
    setShowMore((prevState) => ({
      ...prevState,
      [userId]: !prevState[userId],
    }));
  };

  console.log('userData:', userData);
  console.log('showMore:', showMore);

  return (
    <div className='app'>
      <header className='header'>
      <Navbar />
      </header>
      <main className='main'>
        <h2>Static Components</h2>
      </main>
      <p>{console.log(userData)}</p>
      <div className='user-cards'>
          {userData.map((user) => (
            <div className='user-card' key={user.id}>
              <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
              <p>First Name: {user.firstName}</p>
              {showMore[user.id] ? (
                <div>
                  <p>Last Name: {user.lastName}</p>
                  <p>Age: {user.age}</p>
                  <p>Gender: {user.gender}</p>
                  <p>Email: {user.email}</p>
                  <p>Phone: {user.phone}</p>
                </div>
              ) : null}
              <button onClick={() => handleShowMore(user.id)}>
                {showMore[user.id] ? 'Hide Details' : 'Show Details'}
              </button>
            </div>
          ))}
        </div>
      

      <footer className='footer'>
        <p>random kontakt info</p>
        <p>+47 123 45 678</p>
      </footer>
    </div>
  )
}

export default App

// const [count, setCount] = useState(0)

// return (
//   <>
//     <div>
//       <a href="https://vitejs.dev" target="_blank">
//         <img src={viteLogo} className="logo" alt="Vite logo" />
//       </a>
//       <a href="https://react.dev" target="_blank">
//         <img src={reactLogo} className="logo react" alt="React logo" />
//       </a>
//     </div>
//     <h1>Vite + React</h1>
//     <div className="card">
//       <button onClick={() => setCount((count) => count + 1)}>
//         count is {count}
//       </button>
//       <p>
//         Edit <code>src/App.jsx</code> and save to test HMR
//       </p>
//     </div>
//     <p className="read-the-docs">
//       Click on the Vite and React logos to learn more
//     </p>
//   </>
// )